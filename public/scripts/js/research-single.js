// Research Single Page Handler
// 处理论文详情页的动态加载

const RESEARCH_SINGLE = {
    // 初始化
    init() {
        this.loadPaperFromURL();
    },
    
    // 从URL获取论文ID并加载论文
    loadPaperFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const paperId = urlParams.get('id');
        
        if (!paperId) {
            this.showError('No paper ID provided');
            return;
        }
        
        const paper = RESEARCH_DATA.getPaperById(paperId);
        if (!paper) {
            this.showError('Paper not found');
            return;
        }
        
        this.renderPaper(paper);
    },
    
    // 渲染论文详情
    renderPaper(paper) {
        // 更新页面标题和面包屑
        this.updatePageElements(paper);
        
        // 渲染论文内容
        const contentContainer = document.getElementById('researchDetailContent');
        if (contentContainer) {
            const paperHTML = RESEARCH_RENDERER.renderPaperDetail(paper);
            contentContainer.innerHTML = paperHTML;
        }
        
        // 初始化页面功能
        this.initializePageFeatures();
    },
    
    // 更新页面元素
    updatePageElements(paper) {
        // 更新页面标题
        document.title = `AIDAC - ${paper.title}`;
        
        // 更新面包屑导航
        const categoryElement = document.getElementById('research-category');
        const titleElement = document.getElementById('research-title');
        const breadcrumbElement = document.getElementById('research-breadcrumb');
        
        if (categoryElement) {
            categoryElement.textContent = paper.category;
        }
        
        if (titleElement) {
            titleElement.textContent = paper.title;
        }
        
        if (breadcrumbElement) {
            breadcrumbElement.textContent = paper.title;
        }
        
        // 更新meta标签
        this.updateMetaTags(paper);
    },
    
    // 更新meta标签
    updateMetaTags(paper) {
        // 更新description
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', paper.summary);
        }
        
        // 更新keywords
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) {
            const keywords = [...paper.keywords, ...paper.tags].join(', ');
            keywordsMeta.setAttribute('content', keywords);
        }
    },
    
    // 初始化页面功能
    initializePageFeatures() {
        // 添加关键词和标签的样式
        this.styleKeywordsAndTags();
        
        // 初始化下载按钮
        this.initializeDownloadButton();
        
        // 添加返回按钮功能
        this.initializeBackButton();
    },
    
    // 样式化关键词和标签
    styleKeywordsAndTags() {
        // 为关键词添加样式
        const keywords = document.querySelectorAll('.keyword');
        keywords.forEach(keyword => {
            keyword.classList.add('badge', 'badge-primary', 'mr-2', 'mb-2');
        });
        
        // 为标签添加样式
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.classList.add('badge', 'badge-secondary', 'mr-2', 'mb-2');
        });
    },
    
    // 初始化下载按钮
    initializeDownloadButton() {
        const downloadBtn = document.querySelector('a[href*="download"]');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function(e) {
                // 这里可以添加下载统计或其他功能
                console.log('Download clicked');
            });
        }
    },
    
    // 初始化返回按钮
    initializeBackButton() {
        const backBtn = document.querySelector('a[href="research-filter.html"]');
        if (backBtn) {
            backBtn.addEventListener('click', function(e) {
                // 可以在这里添加返回前的确认或其他功能
                console.log('Back to papers clicked');
            });
        }
    },
    
    // 显示错误信息
    showError(message) {
        const contentContainer = document.getElementById('researchDetailContent');
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div class="col-12 text-center">
                    <div class="error-page">
                        <i class="fa fa-exclamation-triangle fa-3x mb20 text-warning"></i>
                        <h2>Error</h2>
                        <p>${message}</p>
                        <a href="research-filter.html" class="btn btn-primary">
                            <i class="fa fa-arrow-left"></i> Back to Papers
                        </a>
                    </div>
                </div>
            `;
        }
        
        // 更新页面标题
        document.title = 'AIDAC - Error';
        
        // 更新面包屑
        const breadcrumbElement = document.getElementById('research-breadcrumb');
        if (breadcrumbElement) {
            breadcrumbElement.textContent = 'Error';
        }
    },
    
    // 获取当前论文ID
    getCurrentPaperId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    },
    
    // 获取当前论文数据
    getCurrentPaper() {
        const paperId = this.getCurrentPaperId();
        return paperId ? RESEARCH_DATA.getPaperById(paperId) : null;
    },
    
    // 导航到下一篇论文
    navigateToNextPaper() {
        const currentPaper = this.getCurrentPaper();
        if (!currentPaper) return;
        
        const allPapers = RESEARCH_DATA.getAllPapers();
        const currentIndex = allPapers.findIndex(paper => paper.id === currentPaper.id);
        const nextIndex = (currentIndex + 1) % allPapers.length;
        const nextPaper = allPapers[nextIndex];
        
        window.location.href = `research-single.html?id=${nextPaper.id}`;
    },
    
    // 导航到上一篇论文
    navigateToPrevPaper() {
        const currentPaper = this.getCurrentPaper();
        if (!currentPaper) return;
        
        const allPapers = RESEARCH_DATA.getAllPapers();
        const currentIndex = allPapers.findIndex(paper => paper.id === currentPaper.id);
        const prevIndex = currentIndex === 0 ? allPapers.length - 1 : currentIndex - 1;
        const prevPaper = allPapers[prevIndex];
        
        window.location.href = `research-single.html?id=${prevPaper.id}`;
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    RESEARCH_SINGLE.init();
});

// 键盘导航支持
document.addEventListener('keydown', function(e) {
    // 左箭头键 - 上一篇论文
    if (e.key === 'ArrowLeft') {
        RESEARCH_SINGLE.navigateToPrevPaper();
    }
    // 右箭头键 - 下一篇论文
    else if (e.key === 'ArrowRight') {
        RESEARCH_SINGLE.navigateToNextPaper();
    }
});

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RESEARCH_SINGLE;
} 