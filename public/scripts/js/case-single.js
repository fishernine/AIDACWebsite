// Case Study Single Page Handler
const CASE_SINGLE = {
    currentCaseId: null,
    currentCase: null,

    init() {
        this.getCaseIdFromUrl();
        this.loadCaseDetails();
        this.bindEvents();
    },

    getCaseIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        this.currentCaseId = urlParams.get('id');
        if (!this.currentCaseId) {
            window.location.href = 'blog-list-rsb.html'; // Redirect if no ID
            return;
        }
    },

    loadCaseDetails() {
        this.currentCase = CASES_DATA.getCaseById(this.currentCaseId);
        if (!this.currentCase) {
            this.showError('Case study not found');
            return;
        }

        this.updatePageTitle();
        this.updateBanner();
        this.updateCaseContent();
        this.updateMeta();
        this.updateAdditionalImages();
    },

    updatePageTitle() {
        document.title = `AIDAC - ${this.currentCase.title}`;
    },

    updateBanner() {
        $('#case-category').text(this.currentCase.category);
        $('#case-title').text(this.currentCase.title);
        $('#case-breadcrumb').text(this.currentCase.title);
    },

    updateCaseContent() {
        $('#case-detail-title').text(this.currentCase.title);
        $('#case-subtitle').text(this.currentCase.subtitle);
        
        // 处理新的数据结构
        if (this.currentCase.content && typeof this.currentCase.content === 'object') {
            // 新数据结构：content包含introduction, methodology, findings, conclusion
            let contentHtml = '';
            if (this.currentCase.content.introduction) {
                contentHtml += `<div class="content-section"><h3>Introduction</h3>${this.currentCase.content.introduction}</div>`;
            }
            if (this.currentCase.content.methodology) {
                contentHtml += `<div class="content-section"><h3>Methodology</h3>${this.currentCase.content.methodology}</div>`;
            }
            if (this.currentCase.content.findings) {
                contentHtml += `<div class="content-section"><h3>Findings</h3>${this.currentCase.content.findings}</div>`;
            }
            if (this.currentCase.content.conclusion) {
                contentHtml += `<div class="content-section"><h3>Conclusion</h3>${this.currentCase.content.conclusion}</div>`;
            }
            $('#case-content').html(contentHtml);
        } else {
            // 旧数据结构：content是简单的HTML字符串
            $('#case-content').html(this.currentCase.content || '');
        }
    },



    updateMeta() {
        let metaHtml = '';
        
        // 处理新的数据结构
        if (this.currentCase.technical) {
            // 新数据结构：使用technical字段
            const technical = this.currentCase.technical;
            
            if (technical.application) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>Application</p>
                            <h3>${technical.application}</h3>
                        </div>
                    </div>
                `;
            }
            
            if (technical.frequency) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>Frequency</p>
                            <h3>${technical.frequency}</h3>
                        </div>
                    </div>
                `;
            }
            
            if (technical.variables) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>Variables</p>
                            <h3>${technical.variables}</h3>
                        </div>
                    </div>
                `;
            }
            
            if (technical.constraints) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>Constraints</p>
                            <h3>${technical.constraints}</h3>
                        </div>
                    </div>
                `;
            }
            
            if (technical.simulations) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>Simulations</p>
                            <h3>${technical.simulations.count}</h3>
                        </div>
                    </div>
                `;
            }
            
            if (technical.aiMethod) {
                metaHtml += `
                    <div class="col-lg-3 col-md-6 noPadding">
                        <div class="GMSingle">
                            <p>AI Method</p>
                            <h3>${technical.aiMethod}</h3>
                        </div>
                    </div>
                `;
            }
        } else if (this.currentCase.meta) {
            // 旧数据结构：使用meta字段
            metaHtml = this.currentCase.meta.map(item => `
            <div class="col-lg-3 col-md-6 noPadding">
                <div class="GMSingle">
                    <p>${item.label}</p>
                    <h3>${item.value}</h3>
                </div>
            </div>
        `).join('');
        }
        
        $('#case-meta').html(metaHtml);
    },

    updateAdditionalImages() {
        // 更新第一个图片位置（原来是带视频播放按钮的）
        if (this.currentCase.additionalImages && this.currentCase.additionalImages.image1) {
            const firstImageContainer = document.querySelector('.gallInnerImg');
            if (firstImageContainer) {
                firstImageContainer.innerHTML = `
                    <img src="${this.currentCase.additionalImages.image1}" alt="${this.currentCase.title}">
                `;
            }
        }

        // 更新第二个图片位置
        if (this.currentCase.additionalImages && this.currentCase.additionalImages.image2) {
            const secondImageContainer = document.querySelector('.lab_thumb img');
            if (secondImageContainer) {
                secondImageContainer.src = this.currentCase.additionalImages.image2;
                secondImageContainer.alt = this.currentCase.title;
            }
        }
    },

    showError(message) {
        $('#case-title').text('Error');
        $('#case-content').html(`
            <div class="error-message">
                <i class="fa fa-exclamation-triangle"></i>
                <h3>${message}</h3>
                <p>The requested case study could not be found.</p>
                <a href="blog-list-rsb.html" class="btn btn-primary">Back to Case Studies</a>
            </div>
        `);
    },

    bindEvents() {
        // Add any additional event handlers here
        $(document).on('click', '.labGallery img', function() {
            // Lightbox functionality for gallery images
            if (typeof lightcase !== 'undefined') {
                lightcase.start();
            }
        });
        
        // Initialize engagement features
        this.initializeEngagement();
    },

    initializeEngagement() {
        // Load saved engagement data
        this.loadEngagementData();
        
        // Bind engagement button events
        $('#case-like-btn').on('click', () => this.toggleLike());
        $('#case-favorite-btn').on('click', () => this.toggleFavorite());
        
        // Bind comment form event
        $('#case-comment-form').on('submit', (e) => this.handleCommentSubmit(e));
    },

    loadEngagementData() {
        const caseId = this.currentCaseId;
        const savedData = localStorage.getItem(`case_engagement_${caseId}`);
        
        if (savedData) {
            const data = JSON.parse(savedData);
            $('#case-like-count').text(data.likes || 0);
            $('#case-favorite-count').text(data.favorites || 0);
            
            if (data.userLiked) {
                $('#case-like-btn').addClass('active');
            }
            if (data.userFavorited) {
                $('#case-favorite-btn').addClass('active');
            }
        }
    },

    saveEngagementData(data) {
        const caseId = this.currentCaseId;
        localStorage.setItem(`case_engagement_${caseId}`, JSON.stringify(data));
    },

    toggleLike() {
        const caseId = this.currentCaseId;
        const savedData = localStorage.getItem(`case_engagement_${caseId}`);
        let data = savedData ? JSON.parse(savedData) : { likes: 0, favorites: 0, userLiked: false, userFavorited: false };
        
        const btn = $('#case-like-btn');
        const countElement = $('#case-like-count');
        let currentCount = parseInt(countElement.text()) || 0;
        
        if (data.userLiked) {
            // Unlike
            currentCount = Math.max(0, currentCount - 1);
            data.userLiked = false;
            btn.removeClass('active');
        } else {
            // Like
            currentCount += 1;
            data.userLiked = true;
            btn.addClass('active');
        }
        
        data.likes = currentCount;
        countElement.text(currentCount);
        this.saveEngagementData(data);
    },

    toggleFavorite() {
        const caseId = this.currentCaseId;
        const savedData = localStorage.getItem(`case_engagement_${caseId}`);
        let data = savedData ? JSON.parse(savedData) : { likes: 0, favorites: 0, userLiked: false, userFavorited: false };
        
        const btn = $('#case-favorite-btn');
        const countElement = $('#case-favorite-count');
        let currentCount = parseInt(countElement.text()) || 0;
        
        if (data.userFavorited) {
            // Unfavorite
            currentCount = Math.max(0, currentCount - 1);
            data.userFavorited = false;
            btn.removeClass('active');
        } else {
            // Favorite
            currentCount += 1;
            data.userFavorited = true;
            btn.addClass('active');
        }
        
        data.favorites = currentCount;
        countElement.text(currentCount);
        this.saveEngagementData(data);
    },

    handleCommentSubmit(e) {
        e.preventDefault();
        
        const content = $('#comment-content').val().trim();
        
        if (!content) {
            this.showToast('Please enter your comment');
            return;
        }
        
        const comment = {
            id: Date.now(),
            content: content,
            date: new Date().toLocaleString('en-US'),
            caseId: this.currentCaseId
        };
        
        // Submit to backend
        this.submitCommentToBackend(comment);
        
        // Clear form
        $('#case-comment-form')[0].reset();
        
        // Show success message
        this.showToast('Comment submitted successfully!');
    },

    async submitCommentToBackend(comment) {
        try {
            // Replace with your actual backend endpoint
            const response = await fetch('/api/case-comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    caseId: comment.caseId,
                    content: comment.content,
                    timestamp: new Date().toISOString()
                })
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }
            
            console.log('Comment submitted to backend successfully');
        } catch (error) {
            console.error('Error submitting comment to backend:', error);
        }
    },



    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    showToast(message) {
        // Create a simple toast notification
        const toast = $(`
            <div class="toast-notification">
                <i class="fa fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `);
        
        $('body').append(toast);
        
        // Show toast
        setTimeout(() => toast.addClass('show'), 100);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.removeClass('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Initialize when document is ready
$(document).ready(function() {
    CASE_SINGLE.init();
}); 