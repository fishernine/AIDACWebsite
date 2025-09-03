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
        const tag = urlParams.get('tag');
        
        if (tag) {
            this.currentFilter = tag.toLowerCase();
        } else if (category) {
            this.currentFilter = category;
        }
    }

    // 渲染论文列表
    renderPapers(filter = null, searchQuery = undefined) {
        // 判断是否需要重置到第一页（当筛选或搜索条件发生变化时）
        let shouldResetPage = false;
        
        if (filter !== null) {
            if (this.currentFilter !== filter) {
                shouldResetPage = true;
            }
            this.currentFilter = filter;
        }
        
        if (typeof searchQuery !== 'undefined') {
            if (this.searchQuery !== searchQuery) {
                shouldResetPage = true;
            }
            this.searchQuery = searchQuery;
        }
        
        if (shouldResetPage) {
            this.currentPage = 1;
        }
        
        // 规范化数据：修剪 DOI、生成 officialLink（若缺失）、容错 author/journal/tags/image
        const normalizedPapers = researchPapers.map(p => {
            const doi = (p.doi || '').trim();
            const hasOfficial = p.officialLink && /^https?:\/\//i.test(p.officialLink);
            const officialLink = hasOfficial ? p.officialLink : (doi ? `https://doi.org/${doi}` : '');
            return {
                author: p.author || 'Unknown',
                journal: p.journal || '',
                tags: Array.isArray(p.tags) ? p.tags : [],
                image: p.image || '',
                ...p,
                doi,
                officialLink
            };
        });

        let papersToRender = normalizedPapers;
        
        // 根据标签筛选
        if (this.currentFilter !== 'all') {
            papersToRender = normalizedPapers.filter(paper => {
                return paper.tags.some(tag => tag.toLowerCase() === this.currentFilter.toLowerCase());
            });
        }

        // 根据搜索查询筛选
        if (this.searchQuery) {
            papersToRender = papersToRender.filter(paper => 
                paper.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                paper.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                paper.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
        const hasImage = paper.image && paper.image.trim().length > 0;
        return `
            <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="paperItem">
                    ${hasImage ? `<div class=\"piThumb\"><img src=\"${paper.image}\" alt=\"${paper.title}\"/></div>` : ''}
                    <div class="piDetails">
                        <div class="tags-container">
                            <span class="piDate">Published: ${paper.year}</span>
                            ${paper.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                        </div>
                        <div class="piMeta">
                            <span><i class="fa fa-user"></i>${paper.author}</span>
                            ${paper.journal ? `<span><i class=\"fa fa-book\"></i>${paper.journal}</span>` : ''}
                            ${paper.doi ? `<span><i class=\"fa fa-link\"></i>DOI: ${paper.doi}</span>` : ''}
                        </div>
                        <h3><a href="research-single-dynamic.html?id=${paper.id}">${paper.title}</a></h3>
                        <div class="paperFooter">
                            <a href="${paper.officialLink || `research-single-dynamic.html?id=${paper.id}` }" class="readMore" target="_blank">Read Abstract<i class="fa fa-arrow-right"></i></a>
                            ${paper.doi ? `<span class=\"citationCount\"><i class=\"fa fa-quote-left\"></i>DOI</span>` : ''}
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