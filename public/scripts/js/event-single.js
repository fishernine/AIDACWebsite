// Event Single Page Handler
// 处理event详情页面的动态内容加载

const EVENT_SINGLE = {
    // 当前事件ID
    currentEventId: null,
    
    // 初始化页面
    init() {
        this.getEventIdFromUrl();
        this.loadEventDetails();
        this.loadRelatedEvents();
        this.loadUpcomingEvents();
        this.loadEventTags();
        this.bindEvents();
    },
    
    // 从URL获取事件ID
    getEventIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        this.currentEventId = urlParams.get('id');
        
        if (!this.currentEventId) {
            // 如果没有ID参数，重定向到events页面
            window.location.href = 'blog-grid-lsb.html';
            return;
        }
    },
    
    // 加载事件详情
    loadEventDetails() {
        const event = EVENTS_DATA.getEventById(this.currentEventId);
        
        if (!event) {
            // 如果事件不存在，显示错误信息
            this.showError();
            return;
        }
        
        // 更新页面标题
        document.title = `AIDAC - ${event.title}`;
        
        // 更新页面banner
        $('#event-category').text(event.type);
        $('#event-title').text(event.title);
        $('#event-breadcrumb').text(event.title);
        
        // 更新事件图片
        $('#event-image').attr('src', event.image).attr('alt', event.title);
        
        // 更新日期
        const dateInfo = EVENTS_DATA.formatDate(event.date);
        $('#event-day').text(dateInfo.day);
        $('#event-month').text(dateInfo.month);
        
        // 更新元信息
        $('#event-location').text(event.location);
        $('#event-type').text(event.type);
        $('#event-attendees').text(event.attendees);
        
        // 更新标题和描述
        $('#event-detail-title').text(event.title);
        $('#event-description').html(event.fullDescription);
        
        // 更新标签
        this.renderEventTags(event.tags);
        
        // 更新注册按钮
        $('#register-btn').attr('href', event.registrationUrl);
        
        // 添加额外的事件详情
        this.renderEventDetails(event);
    },
    
    // 渲染事件标签
    renderEventTags(tags) {
        const tagsHtml = tags.map(tag => 
            `<a href="javascript:void(0);" class="event-tag-link">${tag}</a>`
        ).join('');
        $('#event-tags').html(tagsHtml);
    },
    
    // 渲染事件详情
    renderEventDetails(event) {
        const detailsHtml = `
            <div class="event-details-section">
                <h3>Event Information</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="detail-item">
                            <strong><i class="fa fa-calendar"></i> Date:</strong>
                            <span>${new Date(event.date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fa fa-map-marker"></i> Location:</strong>
                            <span>${event.venue}</span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fa fa-clock-o"></i> Duration:</strong>
                            <span>${event.duration}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="detail-item">
                            <strong><i class="fa fa-users"></i> Organizer:</strong>
                            <span>${event.organizer}</span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fa fa-envelope"></i> Contact:</strong>
                            <span><a href="mailto:${event.contactEmail}">${event.contactEmail}</a></span>
                        </div>
                        <div class="detail-item">
                            <strong><i class="fa fa-users"></i> Capacity:</strong>
                            <span>${event.attendees}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('#event-details').html(detailsHtml);
    },
    
    // 加载相关事件
    loadRelatedEvents() {
        const currentEvent = EVENTS_DATA.getEventById(this.currentEventId);
        if (!currentEvent) return;
        
        // 获取有相同标签的其他事件
        const relatedEvents = EVENTS_DATA.events.filter(event => 
            event.id !== currentEvent.id && 
            event.tags.some(tag => currentEvent.tags.includes(tag))
        ).slice(0, 3); // 最多显示3个相关事件
        
        if (relatedEvents.length === 0) {
            $('#related-events').html('<p>No related events found.</p>');
            return;
        }
        
        const relatedHtml = relatedEvents.map(event => `
            <div class="col-md-4">
                <div class="related-event-card">
                    <div class="related-event-image">
                        <img src="${event.image}" alt="${event.title}"/>
                    </div>
                    <div class="related-event-content">
                        <h4><a href="event-single.html?id=${event.id}">${event.title}</a></h4>
                        <p class="related-event-date">${new Date(event.date).toLocaleDateString()}</p>
                        <p class="related-event-location">${event.location}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
        $('#related-events').html(relatedHtml);
    },
    
    // 加载即将到来的事件
    loadUpcomingEvents() {
        const upcomingEvents = EVENTS_DATA.events
            .filter(event => new Date(event.date) > new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 3);
        
        const upcomingHtml = upcomingEvents.map(event => `
            <div class="lpSingle">
                <img src="${event.image}" alt="${event.title}"/>
                <h3><a href="event-single.html?id=${event.id}">${event.title}</a></h3>
                <span>${new Date(event.date).toLocaleDateString()}</span>
            </div>
        `).join('');
        
        $('#upcoming-events').html(upcomingHtml);
    },
    
    // 加载事件标签云
    loadEventTags() {
        const allTags = EVENTS_DATA.getAllTags();
        const tagsHtml = allTags.map(tag => 
            `<a href="blog-grid-lsb.html?tag=${tag}" class="event-tag-cloud">${tag}</a>`
        ).join('');
        $('#event-tag-cloud').html(tagsHtml);
    },
    
    // 显示错误信息
    showError() {
        $('#event-title').text('Event Not Found');
        $('#event-detail-title').text('Event Not Found');
        $('#event-description').html(`
            <p class="mb44">
                The requested event could not be found. Please check the URL or return to the 
                <a href="blog-grid-lsb.html">events page</a>.
            </p>
        `);
    },
    
    // 绑定事件
    bindEvents() {
        // 注册按钮点击事件
        $('#register-btn').on('click', function(e) {
            const url = $(this).attr('href');
            if (url && url !== 'javascript:void(0);') {
                window.open(url, '_blank');
            } else {
                alert('Registration link will be available soon.');
            }
        });
        
        // 标签点击事件
        $(document).on('click', '.event-tag-link', function() {
            const tag = $(this).text();
            window.location.href = `blog-grid-lsb.html?tag=${tag}`;
        });
        
        // 相关事件点击事件
        $(document).on('click', '.related-event-card a', function(e) {
            e.preventDefault();
            const href = $(this).attr('href');
            window.location.href = href;
        });
    }
};

// 页面加载完成后初始化
$(document).ready(function() {
    EVENT_SINGLE.init();
}); 