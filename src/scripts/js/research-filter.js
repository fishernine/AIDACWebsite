// Research Filter
// 处理论文搜索和分类过滤功能

const RESEARCH_FILTER = {
    // 当前显示状态
    currentState: {
        category: 'all',
        searchQuery: '',
        currentPapers: []
    },
    
    // 初始化
    init() {
        this.bindEvents();
        this.loadAllPapers();
    },
    
    // 绑定事件
    bindEvents() {
        // 分类过滤器
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.filterByCategory(e.target.value);
            });
        }
        
        // 搜索功能
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        if (searchInput) {
            // 实时搜索
            searchInput.addEventListener('input', (e) => {
                this.debounce(() => {
                    this.searchPapers(e.target.value);
                }, 300)();
            });
            
            // 回车搜索
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchPapers(e.target.value);
                }
            });
        }
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput ? searchInput.value : '';
                this.searchPapers(query);
            });
        }
        
        // 加载更多按钮
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMorePapers();
            });
        }
    },
    
    // 加载所有论文
    loadAllPapers() {
        const papers = RESEARCH_DATA.getAllPapers();
        this.currentState.currentPapers = papers;
        RESEARCH_RENDERER.renderPapersList(papers);
        this.updateResultsCount(papers.length);
    },
    
    // 按分类过滤
    filterByCategory(category) {
        this.currentState.category = category;
        this.currentState.searchQuery = '';
        
        // 清空搜索框
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        
        const papers = RESEARCH_DATA.getPapersByCategory(category);
        this.currentState.currentPapers = papers;
        RESEARCH_RENDERER.renderPapersList(papers);
        this.updateResultsCount(papers.length);
        
        // 更新URL参数
        this.updateURLParams();
    },
    
    // 搜索论文
    searchPapers(query) {
        this.currentState.searchQuery = query;
        
        let papers;
        if (query.trim() === '') {
            // 如果搜索框为空，显示当前分类的所有论文
            papers = RESEARCH_DATA.getPapersByCategory(this.currentState.category);
        } else {
            // 在所有论文中搜索
            papers = RESEARCH_DATA.searchPapers(query);
            
            // 如果当前有分类过滤，进一步过滤
            if (this.currentState.category !== 'all') {
                papers = papers.filter(paper => paper.category === this.currentState.category);
            }
        }
        
        this.currentState.currentPapers = papers;
        RESEARCH_RENDERER.renderSearchResults(papers);
        this.updateResultsCount(papers.length);
        
        // 更新URL参数
        this.updateURLParams();
    },
    
    // 更新结果计数
    updateResultsCount(count) {
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = `${count} paper${count !== 1 ? 's' : ''} found`;
        }
    },
    
    // 更新URL参数
    updateURLParams() {
        const params = new URLSearchParams();
        
        if (this.currentState.category !== 'all') {
            params.set('category', this.currentState.category);
        }
        
        if (this.currentState.searchQuery) {
            params.set('search', this.currentState.searchQuery);
        }
        
        const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.replaceState({}, '', newURL);
    },
    
    // 从URL参数加载状态
    loadStateFromURL() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category') || 'all';
        const search = params.get('search') || '';
        
        // 设置分类过滤器
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }
        
        // 设置搜索框
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = search;
        }
        
        // 应用过滤
        if (search) {
            this.searchPapers(search);
        } else {
            this.filterByCategory(category);
        }
    },
    
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 加载更多论文（分页功能）
    loadMorePapers() {
        // 这里可以实现分页加载功能
        // 目前所有论文都在内存中，所以暂时隐藏加载更多按钮
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        if (loadMoreContainer) {
            loadMoreContainer.style.display = 'none';
        }
    },
    
    // 清除所有过滤器
    clearFilters() {
        this.currentState.category = 'all';
        this.currentState.searchQuery = '';
        
        // 重置UI
        const categoryFilter = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');
        
        if (categoryFilter) {
            categoryFilter.value = 'all';
        }
        
        if (searchInput) {
            searchInput.value = '';
        }
        
        // 重新加载所有论文
        this.loadAllPapers();
        
        // 清除URL参数
        window.history.replaceState({}, '', window.location.pathname);
    },
    
    // 获取当前过滤状态
    getCurrentState() {
        return { ...this.currentState };
    },
    
    // 设置过滤状态
    setState(newState) {
        this.currentState = { ...this.currentState, ...newState };
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    RESEARCH_FILTER.init();
    
    // 从URL参数加载状态
    RESEARCH_FILTER.loadStateFromURL();
});

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESEARCH_FILTER;
} 