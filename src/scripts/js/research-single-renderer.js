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
        this.initEngagement();
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
        
        // 详情页不再展示图片，若存在占位节点则隐藏
        const paperImage = document.getElementById('paperImage');
        if (paperImage && paperImage.parentElement) {
            paperImage.parentElement.style.display = 'none';
        }
        
        // 更新元数据
        document.getElementById('paperAuthor').textContent = paper.author;
        document.getElementById('paperJournal').textContent = paper.journal;
        document.getElementById('paperYear').textContent = paper.year;
        // 显示 DOI（若存在），否则留空
        document.getElementById('paperCitations').textContent = paper.doi ? paper.doi : '';
        document.getElementById('paperCategoryMeta').textContent = paper.category;
        
        // 显示样式化的标签
        const tagsElement = document.getElementById('paperTags');
        if (tagsElement && paper.tags && paper.tags.length > 0) {
            tagsElement.innerHTML = `
                <div class="tags-container">
                    <span class="piDate">Published: ${paper.year}</span>
                    ${paper.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                </div>
            `;
        } else {
            tagsElement.textContent = paper.tags ? paper.tags.join(', ') : '';
        }
        
        // 更新摘要
        document.getElementById('paperAbstract').textContent = paper.abstract;
        
        // 更新分类文本
        const categoryTexts = document.querySelectorAll('#paperCategoryText, #paperCategoryText2');
        categoryTexts.forEach(element => {
            element.textContent = paper.category.toLowerCase();
        });
    }

    // 初始化互动区域
    initEngagement() {
        const likeBtn = document.getElementById('likeBtn');
        const favoriteBtn = document.getElementById('favoriteBtn');
        const shareBtn = document.getElementById('shareBtn');
        const likeCountEl = document.getElementById('likeCount');
        const favCountEl = document.getElementById('favCount');

        // 从本地存储恢复状态
        const paperId = this.getPaperIdFromURL();
        const storageKey = (key) => `paper_${paperId}_${key}`;

        let likeCount = parseInt(localStorage.getItem(storageKey('likes')) || '0', 10);
        let favCount = parseInt(localStorage.getItem(storageKey('favs')) || '0', 10);
        const liked = localStorage.getItem(storageKey('liked')) === '1';
        const faved = localStorage.getItem(storageKey('faved')) === '1';

        likeCountEl && (likeCountEl.textContent = String(likeCount));
        favCountEl && (favCountEl.textContent = String(favCount));
        if (liked && likeBtn) likeBtn.classList.add('active');
        if (faved && favoriteBtn) favoriteBtn.classList.add('active');

        // 点赞（可撤回）
        likeBtn && likeBtn.addEventListener('click', () => {
            const wasActive = likeBtn.classList.contains('active');
            if (wasActive) {
                likeBtn.classList.remove('active');
                likeBtn.setAttribute('aria-pressed', 'false');
                likeCount = Math.max(0, likeCount - 1);
                localStorage.setItem(storageKey('liked'), '0');
            } else {
                likeBtn.classList.add('active');
                likeBtn.setAttribute('aria-pressed', 'true');
                likeCount = likeCount + 1;
                localStorage.setItem(storageKey('liked'), '1');
            }
            likeCountEl.textContent = String(likeCount);
            localStorage.setItem(storageKey('likes'), String(likeCount));
        });

        // 收藏（可撤回）
        favoriteBtn && favoriteBtn.addEventListener('click', () => {
            const wasActive = favoriteBtn.classList.contains('active');
            if (wasActive) {
                favoriteBtn.classList.remove('active');
                favoriteBtn.setAttribute('aria-pressed', 'false');
                favCount = Math.max(0, favCount - 1);
                localStorage.setItem(storageKey('faved'), '0');
            } else {
                favoriteBtn.classList.add('active');
                favoriteBtn.setAttribute('aria-pressed', 'true');
                favCount = favCount + 1;
                localStorage.setItem(storageKey('faved'), '1');
            }
            favCountEl.textContent = String(favCount);
            localStorage.setItem(storageKey('favs'), String(favCount));
        });

        // 转发/分享（统一复制链接）
        shareBtn && shareBtn.addEventListener('click', async () => {
            const url = window.location.href;
            try {
                await navigator.clipboard.writeText(url);
                const oldLabel = shareBtn.innerHTML;
                shareBtn.classList.add('active');
                shareBtn.innerHTML = '<i class="fa fa-check"></i><span>Copied</span>';
                setTimeout(() => {
                    shareBtn.classList.remove('active');
                    shareBtn.innerHTML = oldLabel;
                }, 1200);
            } catch (e) {
                alert('Link copied: ' + url);
            }
        });
    }

    // 更新官方链接
    updateOfficialLink(paper) {
        const officialLinkSection = document.getElementById('officialLinkSection');
        const officialLinkBtn = document.getElementById('officialLinkBtn');
        const journalBadge = document.getElementById('journalBadge');
        
        // 构造可用链接：先用officialLink，其次用DOI
        const doi = (paper.doi || '').trim();
        const hasOfficial = paper.officialLink && /^https?:\/\//i.test(paper.officialLink);
        const fallbackDoiLink = doi ? `https://doi.org/${doi}` : '';
        const finalLink = hasOfficial ? paper.officialLink : fallbackDoiLink;

        if (finalLink) {
            // 显示官方链接区域
            officialLinkSection.style.display = 'block';
            
            // 设置链接
            officialLinkBtn.href = finalLink;
            
            // 根据期刊类型设置按钮文本和徽章
            if ((paper.journal || '').includes('IEEE')) {
                officialLinkBtn.innerHTML = '<i class="fa fa-external-link"></i> View on IEEE Xplore';
                journalBadge.textContent = 'IEEE';
                journalBadge.className = 'journal-badge ieee-badge';
            } else if ((paper.journal || '').includes('SCI') || (paper.journal || '').includes('Science')) {
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
        // 保持横幅标题为固定文案，避免与下方标题重复
        const pageTitleEl = document.getElementById('pageTitle');
        if (pageTitleEl) {
            pageTitleEl.textContent = 'Publication Overview';
        }
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