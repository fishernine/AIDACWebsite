// Research Papers Renderer
class ResearchRenderer {
    constructor() {
        this.currentFilter = 'all';
        this.papersPerPage = 6;
        this.currentPage = 1;
        this.searchQuery = '';
        this.init();
    }

    init() {
        // 从URL参数获取分类筛选
        this.getFilterFromURL();
        this.renderPapers();
        this.setupEventListeners();
    }

    // 从URL参数获取筛选条件
    getFilterFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            this.currentFilter = category;
        }
    }

    // 渲染论文列表
    renderPapers(filter = null, searchQuery = '') {
        // 如果传入了filter参数，使用它；否则使用当前filter
        if (filter !== null) {
            this.currentFilter = filter;
        }
        
        this.searchQuery = searchQuery;
        this.currentPage = 1;
        
        let papersToRender = researchPapers;
        
        // 根据分类筛选
        if (this.currentFilter !== 'all') {
            papersToRender = researchPapers.filter(paper => {
                const category = paper.category.toLowerCase();
                return category === this.currentFilter.toLowerCase();
            });
        }

        // 根据搜索查询筛选
        if (searchQuery) {
            papersToRender = papersToRender.filter(paper => 
                paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                paper.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // 分页处理
        const startIndex = (this.currentPage - 1) * this.papersPerPage;
        const endIndex = startIndex + this.papersPerPage;
        const papersForCurrentPage = papersToRender.slice(startIndex, endIndex);

        const container = document.querySelector('.blogListPage .container .row');
        if (!container) {
            console.error('Research container not found');
            return;
        }

        // 清空现有内容
        container.innerHTML = '';

        // 渲染论文卡片
        papersForCurrentPage.forEach(paper => {
            const paperHTML = this.createPaperCard(paper);
            container.innerHTML += paperHTML;
        });

        // 更新分页
        this.updatePagination(papersToRender.length);
        
        // 更新结果统计和页面标题
        this.updateResultsCount(papersToRender.length);
        this.updatePageTitle();
    }

    // 创建论文卡片HTML
    createPaperCard(paper) {
        return `
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="paperItem">
                    <div class="piThumb">
                        <img src="${paper.image}" alt="${paper.title}"/>
                    </div>
                    <div class="piDetails">
                        <div class="piDate">Published: ${paper.year}</div>
                        <div class="category-badge">${paper.category}</div>
                        <div class="piMeta">
                            <span><i class="fa fa-user"></i>${paper.author}</span>
                            <span><i class="fa fa-calendar"></i>${paper.journal}</span>
                        </div>
                        <h3><a href="research-single-dynamic.html?id=${paper.id}">${paper.title}</a></h3>
                        <div class="paperFooter">
                            <a href="research-single-dynamic.html?id=${paper.id}" class="readMore">Read Abstract<i class="fa fa-arrow-right"></i></a>
                            <span class="citationCount"><i class="fa fa-quote-left"></i>${paper.citations} Citations</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 更新分页
    updatePagination(totalPapers) {
        const totalPages = Math.ceil(totalPapers / this.papersPerPage);
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
        const bannerContent = document.getElementById('pageTitle');
        if (bannerContent) {
            let title = `Latest Publications in AIDAC Design & Analysis (${count} Papers)`;
            if (this.currentFilter !== 'all') {
                title = `${this.currentFilter} Research Papers (${count} Papers)`;
            }
            bannerContent.textContent = title;
        }
    }

    // 更新页面标题和面包屑
    updatePageTitle() {
        const breadcrumbText = document.getElementById('breadcrumbText');
        if (breadcrumbText) {
            if (this.currentFilter !== 'all') {
                breadcrumbText.textContent = this.currentFilter;
            } else {
                breadcrumbText.textContent = 'Research';
            }
        }
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
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.handleSearch(e.target.value);
                }, 300); // 300ms 防抖
            });
        }
    }

    // 处理搜索
    handleSearch(query) {
        this.searchQuery = query;
        this.renderPapers(null, query);
    }

    // 跳转到指定页面
    goToPage(page) {
        this.currentPage = page;
        this.renderPapers(null, this.searchQuery);
        
        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 添加新论文
    addPaper(paperData) {
        const newPaper = {
            id: researchPapers.length + 1,
            ...paperData
        };
        researchPapers.push(newPaper);
        this.renderPapers(null, this.searchQuery);
    }

    // 更新论文
    updatePaper(id, paperData) {
        const index = researchPapers.findIndex(paper => paper.id === id);
        if (index !== -1) {
            researchPapers[index] = { ...researchPapers[index], ...paperData };
            this.renderPapers(null, this.searchQuery);
        }
    }

    // 删除论文
    deletePaper(id) {
        const index = researchPapers.findIndex(paper => paper.id === id);
        if (index !== -1) {
            researchPapers.splice(index, 1);
            this.renderPapers(null, this.searchQuery);
        }
    }
}

// 初始化渲染器
document.addEventListener('DOMContentLoaded', function() {
    new ResearchRenderer();
}); 