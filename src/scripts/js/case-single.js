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
        this.updateGallery();
        this.updateMeta();
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
        $('#case-content').html(this.currentCase.content);
    },

    updateGallery() {
        const galleryHtml = this.currentCase.images.map(image => `
            <div class="labGallery">
                <img src="${image}" alt="${this.currentCase.title}"/>
            </div>
        `).join('');
        
        $('#case-gallery').html(galleryHtml);
        
        // Destroy existing carousel if it exists
        if ($('#case-gallery').hasClass('owl-loaded')) {
            $('#case-gallery').trigger('destroy.owl.carousel');
        }
        
        // Initialize owl carousel with custom navigation
        setTimeout(() => {
            // Destroy any existing carousel
            if ($('#case-gallery').hasClass('owl-loaded')) {
                $('#case-gallery').trigger('destroy.owl.carousel');
            }
            
            console.log('Initializing carousel with', this.currentCase.images.length, 'images');
            
            const owl = $('#case-gallery').owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                nav: false, // Disable default navigation
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 }
                }
            });
            
            // Custom navigation buttons
            $('#prev-gallery').off('click').on('click', function() {
                owl.trigger('prev.owl.carousel');
            });
            
            $('#next-gallery').off('click').on('click', function() {
                owl.trigger('next.owl.carousel');
            });
            
            console.log('Carousel initialized successfully');
        }, 200);
    },

    updateMeta() {
        const metaHtml = this.currentCase.meta.map(item => `
            <div class="col-lg-3 col-md-6 noPadding">
                <div class="GMSingle">
                    <p>${item.label}</p>
                    <h3>${item.value}</h3>
                </div>
            </div>
        `).join('');
        
        $('#case-meta').html(metaHtml);
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
        
        // Ensure carousel is properly initialized after page load
        $(window).on('load', () => {
            if (this.currentCase && this.currentCase.images.length > 0) {
                this.updateGallery();
            }
        });
    }
};

// Initialize when document is ready
$(document).ready(function() {
    CASE_SINGLE.init();
}); 