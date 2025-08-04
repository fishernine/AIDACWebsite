// Events Renderer
class EventsRenderer {
    constructor() {
        this.currentFilter = 'all';
        this.eventsPerPage = 6;
        this.currentPage = 1;
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.renderEvents();
        this.renderTags();
        this.setupEventListeners();
    }

    // 渲染事件列表
    renderEvents(searchQuery = '') {
        this.searchQuery = searchQuery;
        this.currentPage = 1;
        
        let eventsToRender = EVENTS_DATA.getAllEvents();
        
        // 根据搜索查询筛选
        if (searchQuery) {
            eventsToRender = eventsToRender.filter(event => 
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // 分页处理
        const startIndex = (this.currentPage - 1) * this.eventsPerPage;
        const endIndex = startIndex + this.eventsPerPage;
        const eventsForCurrentPage = eventsToRender.slice(startIndex, endIndex);

        const container = document.querySelector('.col-xl-8 .row');
        if (!container) {
            console.error('Events container not found');
            return;
        }

        // 清空现有内容
        container.innerHTML = '';

        // 渲染事件卡片
        if (eventsForCurrentPage.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="no-results">
                        <h3>No events found</h3>
                        <p>Try adjusting your search criteria.</p>
                    </div>
                </div>
            `;
        } else {
            eventsForCurrentPage.forEach(event => {
                const eventHTML = this.createEventCard(event);
                container.innerHTML += eventHTML;
            });
        }

        // 更新分页
        this.updatePagination(eventsToRender.length);
        
        // 更新结果统计
        this.updateResultsCount(eventsToRender.length);
    }

    // 渲染标签
    renderTags() {
        const tags = EVENTS_DATA.getAllTags();
        const tagcloud = document.querySelector('.tagcloud');
        
        if (!tagcloud) return;

        // 保留"All Events"标签
        const allTag = tagcloud.querySelector('[data-tag="all"]');
        tagcloud.innerHTML = '';
        if (allTag) {
            tagcloud.appendChild(allTag);
        }

        // 添加动态标签
        tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = 'javascript:void(0);';
            tagElement.className = 'event-tag';
            tagElement.dataset.tag = tag;
            tagElement.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
            tagcloud.appendChild(tagElement);
        });
    }

    // 创建事件卡片HTML
    createEventCard(event) {
        const dateInfo = EVENTS_DATA.formatDate(event.date);
        
        return `
            <div class="col-md-6">
                <div class="newsItem" data-tags="${event.tags.join(',')}" data-event-id="${event.id}">
                    <div class="niThumb">
                        <img src="${event.image}" alt="AIDAC"/>
                    </div>
                    <div class="niDetails">
                        <div class="niDate roboto">
                            <span>${dateInfo.day}</span>
                            <span>${dateInfo.month}</span>
                        </div>
                        <div class="niMeta">
                            <span><i class="fa fa-map-marker"></i><a href="javascript:void(0);">${event.location}</a></span>
                            <span><i class="fa fa-calendar"></i><a href="javascript:void(0);">${event.type}</a></span>
                            <span><i class="fa fa-users"></i><a href="javascript:void(0);">${event.attendees}</a></span>
                        </div>
                        <h3><a href="event-single.html?id=${event.id}">${event.title}</a></h3>
                        <div class="blogFooter clearfix">
                            <a href="event-single.html?id=${event.id}" class="readMore">View Details<i class="fa fa-arrow-right"></i></a>
                            <a href="javascript:void(0);" class="commentCount"><i class="fa fa-calendar-o"></i>${dateInfo.month} ${dateInfo.day}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 更新分页
    updatePagination(totalEvents) {
        const totalPages = Math.ceil(totalEvents / this.eventsPerPage);
        const paginationContainer = document.querySelector('.labPagination');
        
        if (!paginationContainer) return;

        let paginationHTML = '';
        
        // 上一页按钮
        if (this.currentPage > 1) {
            paginationHTML += `<a href="#" class="prv" data-page="${this.currentPage - 1}"><i class="fa fa-angle-left"></i></a>`;
        }

        // 页码
        for (let i = 1; i <= totalPages; i++) {
            if (i === this.currentPage) {
                paginationHTML += `<span class="current">${i}</span>`;
            } else {
                paginationHTML += `<a href="#" data-page="${i}">${i}</a>`;
            }
        }

        // 下一页按钮
        if (this.currentPage < totalPages) {
            paginationHTML += `<a href="#" class="nxt" data-page="${this.currentPage + 1}"><i class="fa fa-angle-right"></i></a>`;
        }

        paginationContainer.innerHTML = paginationHTML;
    }

    // 更新结果统计
    updateResultsCount(count) {
        // 可以在这里添加结果统计显示
        console.log(`Showing ${count} events`);
    }

    // 设置事件监听器
    setupEventListeners() {
        // 分页点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.labPagination a')) {
                e.preventDefault();
                const page = parseInt(e.target.closest('a').dataset.page);
                this.goToPage(page);
            }
        });

        // 搜索输入事件
        const searchInput = document.querySelector('.searchForm input[type="search"]');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.handleSearch(e.target.value);
                }, 300); // 300ms 防抖
            });
        }

        // 标签点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.event-tag')) {
                e.preventDefault();
                const selectedTag = e.target.closest('.event-tag').dataset.tag;
                this.handleTagFilter(selectedTag);
            }
        });
    }

    // 处理搜索
    handleSearch(query) {
        this.searchQuery = query;
        this.renderEvents(query);
    }

    // 处理标签筛选
    handleTagFilter(tag) {
        // 更新标签状态
        document.querySelectorAll('.event-tag').forEach(tagEl => {
            tagEl.classList.remove('active');
        });
        document.querySelector(`[data-tag="${tag}"]`).classList.add('active');

        // 筛选事件
        let eventsToRender = EVENTS_DATA.getAllEvents();
        
        if (tag !== 'all') {
            eventsToRender = EVENTS_DATA.getEventsByTag(tag);
        }

        // 重新渲染
        this.renderFilteredEvents(eventsToRender);
    }

    // 渲染筛选后的事件
    renderFilteredEvents(events) {
        const container = document.querySelector('.col-xl-8 .row');
        if (!container) return;

        container.innerHTML = '';

        if (events.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="no-results">
                        <h3>No events found</h3>
                        <p>Try selecting a different category.</p>
                    </div>
                </div>
            `;
        } else {
            events.forEach(event => {
                const eventHTML = this.createEventCard(event);
                container.innerHTML += eventHTML;
            });
        }

        // 隐藏分页（筛选模式下）
        const paginationContainer = document.querySelector('.labPagination');
        if (paginationContainer) {
            paginationContainer.style.display = 'none';
        }
    }

    // 跳转到指定页面
    goToPage(page) {
        this.currentPage = page;
        this.renderEvents(this.searchQuery);
        
        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 添加新事件
    addEvent(eventData) {
        const newEvent = EVENTS_DATA.addEvent(eventData);
        this.renderEvents(this.searchQuery);
        this.renderTags();
        return newEvent;
    }

    // 更新事件
    updateEvent(id, eventData) {
        const updatedEvent = EVENTS_DATA.updateEvent(id, eventData);
        if (updatedEvent) {
            this.renderEvents(this.searchQuery);
            this.renderTags();
        }
        return updatedEvent;
    }

    // 删除事件
    deleteEvent(id) {
        const deletedEvent = EVENTS_DATA.deleteEvent(id);
        if (deletedEvent) {
            this.renderEvents(this.searchQuery);
            this.renderTags();
        }
        return deletedEvent;
    }
}

// 初始化事件渲染器
document.addEventListener('DOMContentLoaded', function() {
    new EventsRenderer();
}); 