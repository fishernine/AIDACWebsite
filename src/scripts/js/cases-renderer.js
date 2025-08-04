// Cases Renderer
class CasesRenderer {
    constructor() {
        this.currentFilter = 'all';
        this.casesPerPage = 6;
        this.currentPage = 1;
        this.searchQuery = '';
        this.init();
    }

    init() {
        this.renderCases();
        this.renderCategories();
        this.renderTags();
        this.setupEventListeners();
    }

    // 渲染案例列表
    renderCases(searchQuery = '') {
        this.searchQuery = searchQuery;
        this.currentPage = 1;
        
        let casesToRender = CASES_DATA.getAllCases();
        
        // 根据搜索查询筛选
        if (searchQuery) {
            casesToRender = casesToRender.filter(caseStudy => 
                caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                caseStudy.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                caseStudy.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                caseStudy.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // 分页处理
        const startIndex = (this.currentPage - 1) * this.casesPerPage;
        const endIndex = startIndex + this.casesPerPage;
        const casesForCurrentPage = casesToRender.slice(startIndex, endIndex);

        const container = document.querySelector('.col-lg-8');
        if (!container) {
            console.error('Cases container not found');
            return;
        }

        // 清空现有内容
        container.innerHTML = '';

        // 渲染案例卡片
        if (casesForCurrentPage.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="no-results">
                        <h3>No case studies found</h3>
                        <p>Try adjusting your search criteria.</p>
                    </div>
                </div>
            `;
        } else {
            casesForCurrentPage.forEach(caseStudy => {
                const caseHTML = this.createCaseCard(caseStudy);
                container.innerHTML += caseHTML;
            });
        }

        // 更新分页
        this.updatePagination(casesToRender.length);
        
        // 更新结果统计
        this.updateResultsCount(casesToRender.length);
    }

    // 渲染分类
    renderCategories() {
        const categories = CASES_DATA.getAllCategories();
        const categoryContainer = document.querySelector('.widget:has(.case-tag) .tagcloud');
        
        if (!categoryContainer) return;

        // 保留"All Cases"标签
        const allTag = categoryContainer.querySelector('[data-tag="all"]');
        categoryContainer.innerHTML = '';
        if (allTag) {
            categoryContainer.appendChild(allTag);
        }

        // 添加动态分类
        categories.forEach(category => {
            const categoryElement = document.createElement('a');
            categoryElement.href = 'javascript:void(0);';
            categoryElement.className = 'case-tag';
            categoryElement.dataset.tag = category;
            categoryElement.textContent = category;
            categoryContainer.appendChild(categoryElement);
        });
    }

    // 渲染标签
    renderTags() {
        const tags = CASES_DATA.getAllTags();
        const tagContainer = document.querySelector('.widget:has(h3:contains("Tags")) .tagcloud');
        
        if (!tagContainer) return;

        tagContainer.innerHTML = '';

        // 添加动态标签
        tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = 'javascript:void(0);';
            tagElement.className = 'case-tag';
            tagElement.dataset.tag = tag;
            tagElement.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
            tagContainer.appendChild(tagElement);
        });
    }

    // 创建案例卡片HTML
    createCaseCard(caseStudy) {
        const dateInfo = CASES_DATA.formatDate(caseStudy.date);
        
        return `
            <div class="newsItem niList" data-tags="${caseStudy.tags.join(',')}" data-case-id="${caseStudy.id}">
                <div class="niThumb">
                    <img src="${caseStudy.images[0]}" alt="AIDAC"/>
                </div>
                <div class="niDetails">
                    <div class="niDate roboto">
                        <span>${dateInfo.day}</span>
                        <span>${dateInfo.month}</span>
                    </div>
                    <div class="niMeta">
                        <span><i class="fa fa-tags"></i><a href="javascript:void(0);">${caseStudy.category}</a></span>
                        <span><i class="fa fa-user"></i><a href="javascript:void(0);">${caseStudy.team}</a></span>
                        <span><i class="fa fa-calendar"></i><a href="javascript:void(0);">${caseStudy.date.split('-')[0]}</a></span>
                    </div>
                    <h3><a href="case-single.html?id=${caseStudy.id}">${caseStudy.title}</a></h3>
                    <div class="blogExcerpt">
                        ${caseStudy.subtitle}
                    </div>
                    <div class="blogFooter clearfix">
                        <a href="case-single.html?id=${caseStudy.id}" class="readMore">View Case Study<i class="fa fa-arrow-right"></i></a>
                        <a href="javascript:void(0);" class="commentCount"><i class="fa fa-download"></i>PDF</a>
                    </div>
                </div>
            </div>
        `;
    }

    // 更新分页
    updatePagination(totalCases) {
        const totalPages = Math.ceil(totalCases / this.casesPerPage);
        const paginationContainer = document.querySelector('.labPagination');
        
        if (!paginationContainer) {
            // 创建分页容器
            const container = document.querySelector('.col-lg-8');
            if (container) {
                container.innerHTML += '<div class="labPagination"></div>';
            }
        }

        const pagination = document.querySelector('.labPagination');
        if (!pagination) return;

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

        pagination.innerHTML = paginationHTML;
    }

    // 更新结果统计
    updateResultsCount(count) {
        // 可以在这里添加结果统计显示
        console.log(`Showing ${count} case studies`);
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

        // 分类点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.case-tag')) {
                e.preventDefault();
                const selectedTag = e.target.closest('.case-tag').dataset.tag;
                this.handleCategoryFilter(selectedTag);
            }
        });
    }

    // 处理搜索
    handleSearch(query) {
        this.searchQuery = query;
        this.renderCases(query);
    }

    // 处理分类筛选
    handleCategoryFilter(category) {
        // 更新分类状态
        document.querySelectorAll('.case-tag').forEach(tagEl => {
            tagEl.classList.remove('active');
        });
        document.querySelector(`[data-tag="${category}"]`).classList.add('active');

        // 筛选案例
        let casesToRender = CASES_DATA.getAllCases();
        
        if (category !== 'all') {
            casesToRender = CASES_DATA.getCasesByCategory(category);
        }

        // 重新渲染
        this.renderFilteredCases(casesToRender);
    }

    // 渲染筛选后的案例
    renderFilteredCases(cases) {
        const container = document.querySelector('.col-lg-8');
        if (!container) return;

        container.innerHTML = '';

        if (cases.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="no-results">
                        <h3>No case studies found</h3>
                        <p>Try selecting a different category.</p>
                    </div>
                </div>
            `;
        } else {
            cases.forEach(caseStudy => {
                const caseHTML = this.createCaseCard(caseStudy);
                container.innerHTML += caseHTML;
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
        this.renderCases(this.searchQuery);
        
        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 添加新案例
    addCase(caseData) {
        const newCase = CASES_DATA.addCase(caseData);
        this.renderCases(this.searchQuery);
        this.renderCategories();
        this.renderTags();
        return newCase;
    }

    // 更新案例
    updateCase(id, caseData) {
        const updatedCase = CASES_DATA.updateCase(id, caseData);
        if (updatedCase) {
            this.renderCases(this.searchQuery);
            this.renderCategories();
            this.renderTags();
        }
        return updatedCase;
    }

    // 删除案例
    deleteCase(id) {
        const deletedCase = CASES_DATA.deleteCase(id);
        if (deletedCase) {
            this.renderCases(this.searchQuery);
            this.renderCategories();
            this.renderTags();
        }
        return deletedCase;
    }
}

// 初始化案例渲染器
document.addEventListener('DOMContentLoaded', function() {
    new CasesRenderer();
}); 