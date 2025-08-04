// Research Single Paper Renderer
class ResearchSingleRenderer {
    constructor() {
        this.paperId = this.getPaperIdFromURL();
        this.init();
    }

    // 从URL参数获取论文ID
    getPaperIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id')) || 1;
    }

    init() {
        this.loadPaperDetails();
    }

    // 加载论文详情
    loadPaperDetails() {
        const paper = researchPapers.find(p => p.id === this.paperId);
        
        if (!paper) {
            this.showError('Paper not found');
            return;
        }

        this.updatePageContent(paper);
        this.updatePageTitle(paper);
        this.updateBreadcrumb(paper);
        this.updateOfficialLink(paper);
    }

    // 更新页面内容
    updatePageContent(paper) {
        // 更新标题
        document.getElementById('paperTitle').textContent = paper.title;
        document.getElementById('paperCategory').textContent = paper.category;
        
        // 更新图片
        const paperImage = document.getElementById('paperImage');
        paperImage.src = paper.image;
        paperImage.alt = paper.title;
        
        // 更新元数据
        document.getElementById('paperAuthor').textContent = paper.author;
        document.getElementById('paperJournal').textContent = paper.journal;
        document.getElementById('paperYear').textContent = paper.year;
        document.getElementById('paperCitations').textContent = paper.citations;
        document.getElementById('paperCategoryMeta').textContent = paper.category;
        document.getElementById('paperTags').textContent = paper.tags.join(', ');
        
        // 更新摘要
        document.getElementById('paperAbstract').textContent = paper.abstract;
        
        // 更新分类文本
        const categoryTexts = document.querySelectorAll('#paperCategoryText, #paperCategoryText2');
        categoryTexts.forEach(element => {
            element.textContent = paper.category.toLowerCase();
        });
    }

    // 更新官方链接
    updateOfficialLink(paper) {
        const officialLinkSection = document.getElementById('officialLinkSection');
        const officialLinkBtn = document.getElementById('officialLinkBtn');
        const journalBadge = document.getElementById('journalBadge');
        
        if (paper.officialLink) {
            // 显示官方链接区域
            officialLinkSection.style.display = 'block';
            
            // 设置链接
            officialLinkBtn.href = paper.officialLink;
            
            // 根据期刊类型设置按钮文本和徽章
            if (paper.journal.includes('IEEE')) {
                officialLinkBtn.innerHTML = '<i class="fa fa-external-link"></i> View on IEEE Xplore';
                journalBadge.textContent = 'IEEE';
                journalBadge.className = 'journal-badge ieee-badge';
            } else if (paper.journal.includes('SCI') || paper.journal.includes('Science')) {
                officialLinkBtn.innerHTML = '<i class="fa fa-external-link"></i> View on ScienceDirect';
                journalBadge.textContent = 'SCI';
                journalBadge.className = 'journal-badge sci-badge';
            } else {
                officialLinkBtn.innerHTML = '<i class="fa fa-external-link"></i> View Publication';
                journalBadge.textContent = 'Journal';
                journalBadge.className = 'journal-badge';
            }
        } else {
            // 隐藏官方链接区域
            officialLinkSection.style.display = 'none';
        }
    }

    // 更新页面标题
    updatePageTitle(paper) {
        document.title = `AIDAC - ${paper.title}`;
        document.getElementById('pageTitle').textContent = paper.title;
    }

    // 更新面包屑
    updateBreadcrumb(paper) {
        document.getElementById('breadcrumbTitle').textContent = paper.title.length > 30 
            ? paper.title.substring(0, 30) + '...' 
            : paper.title;
    }

    // 显示错误信息
    showError(message) {
        const container = document.querySelector('.researchItems');
        if (container) {
            container.innerHTML = `
                <div class="text-center" style="padding: 50px 20px;">
                    <h3 style="color: #666; margin-bottom: 15px;">${message}</h3>
                    <p style="color: #999;">The requested research paper could not be found.</p>
                    <a href="javascript:history.back()" class="btn btn-primary" style="margin-top: 20px;">
                        <i class="fa fa-arrow-left"></i> Back to Research
                    </a>
                </div>
            `;
        }
    }
}

// 初始化论文详情渲染器
document.addEventListener('DOMContentLoaded', function() {
    new ResearchSingleRenderer();
}); 