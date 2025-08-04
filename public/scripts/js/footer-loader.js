// Footer Loader
class FooterLoader {
    constructor() {
        this.footerContainer = document.querySelector('footer, [data-footer-container]');
        this.init();
    }

    init() {
        if (this.footerContainer) {
            this.loadFooter();
        } else {
            // 如果没有找到footer容器，创建一个
            this.createFooterContainer();
        }
    }

    createFooterContainer() {
        // 查找页面中是否有footer占位符
        const footerPlaceholder = document.querySelector('[data-footer-placeholder]');
        if (footerPlaceholder) {
            this.footerContainer = footerPlaceholder;
            this.loadFooter();
        } else {
            // 查找footer注释的位置
            const footerComment = Array.from(document.querySelectorAll('*')).find(el => 
                el.nodeType === Node.COMMENT_NODE && 
                el.textContent.includes('Footer will be loaded by footer-loader.js')
            );
            
            if (footerComment) {
                // 在注释位置创建footer容器
                const footerDiv = document.createElement('footer');
                footerDiv.setAttribute('data-footer-container', 'true');
                footerComment.parentNode.insertBefore(footerDiv, footerComment.nextSibling);
                this.footerContainer = footerDiv;
                this.loadFooter();
            } else {
                // 在body末尾创建footer容器
                const footerDiv = document.createElement('footer');
                footerDiv.setAttribute('data-footer-container', 'true');
                document.body.appendChild(footerDiv);
                this.footerContainer = footerDiv;
                this.loadFooter();
            }
        }
    }

    async loadFooter() {
        try {
            // 直接使用内嵌的footer内容，避免fetch问题
            const footerHTML = this.getFooterHTML();
            
            // 替换footer容器内容
            if (this.footerContainer.tagName === 'FOOTER') {
                // 如果容器本身就是footer标签，替换其内容
                this.footerContainer.innerHTML = footerHTML;
            } else {
                // 否则替换整个容器
                this.footerContainer.outerHTML = footerHTML;
            }
            

        } catch (error) {
            console.error('Error loading footer:', error);
            this.createFallbackFooter();
        }
    }

    getFooterHTML() {
        return `
<!-- Section Start -->
<footer class="footer01">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="subscribeForm">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="sfLeft">
                                <img src="../assets/images/icons/1.png" alt=""/>
                                <h3>
                                    Stay Updated with AIDAC Research 
                                    and Innovations
                                </h3>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <form method="post" action="#">
                                <input type="email" name="email" placeholder="Your Email Address"/>
                                <button type="submit">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row widgetRow">
            <div class="col-md-6 col-lg-3">
                <aside class="widget">
                    <div class="contactWidtetContent">
                        <div class="footerLogo">
                            <a href="index.html"><img src="../assets/images/logo.png" alt="AIDAC"/></a>
                        </div>
                        <div class="cwcInfo">
                            <i class="fa fa-map-marker"></i>
                            University of Glasgow, G12 8QQ
                        </div>
                        <div class="cwcInfo">
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:info@aidac.ac.uk">info@aidac.ac.uk</a>
                        </div>
                        <div class="cwcInfo">
                            <i class="fa fa-phone"></i>
                            0000000000
                        </div>
                    </div>
                </aside>
            </div>
            <div class="col-md-6 col-lg-2">
                <aside class="widget">
                    <h3 class="widgetTitle">About Us</h3>
                    <ul>
                        <li><a href="javascript:void(0);">Leadership Team</a></li>
                        <li><a href="javascript:void(0);">News & Media</a></li>
                        <li><a href="javascript:void(0);">Sustainability</a></li>
                        <li><a href="javascript:void(0);">Careers</a></li>
                    </ul>
                </aside>
            </div>
            <div class="col-md-6 col-lg-2">
                <aside class="widget">
                    <h3 class="widgetTitle">Links</h3>
                    <ul>
                        <li><a href="javascript:void(0);">Knowledge base</a></li>
                        <li><a href="javascript:void(0);">Report a Vulnerability</a></li>
                        <li><a href="javascript:void(0);">Suppliers & Vendors</a></li>
                        <li><a href="javascript:void(0);">Genova Diagnostics</a></li>
                    </ul>
                </aside>
            </div>
            <div class="col-md-6 col-lg-5">
                <aside class="widget">
                    <h3 class="widgetTitle">Location</h3>
                    <div class="map-container" style="height: 160px; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.1234567890123!2d-4.2875!3d55.8721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sUniversity+of+Glasgow!5e0!3m2!1sen!2suk!4v1234567890123"
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </aside>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="copyrightRow">
                    <div class="row">
                        <div class="col-md-6 col-lg-6">
                            <div class="siteInfo">© 2025 AIDAC All rights reserved.</div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="siteSocial">
                                <a href="javascript:void(0);"><i class="fa fa-facebook-square"></i></a>
                                <a href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a>
                                <a href="javascript:void(0);"><i class="fa fa-github"></i></a>
                                <a href="https://youtube.com/@aidac7442?si=LF01vsubULvzSP1Q" target="_blank"><i class="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Section End -->
        `;
    }



    createFallbackFooter() {
        const fallbackHTML = `
            <footer class="footer01">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copyrightRow">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6">
                                        <div class="siteInfo">© 2025 AIDAC All rights reserved.</div>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        <div class="siteSocial">
                                            <a href="javascript:void(0);"><i class="fa fa-facebook-square"></i></a>
                                            <a href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                            <a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        
        if (this.footerContainer) {
            this.footerContainer.innerHTML = fallbackHTML;
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new FooterLoader();
});

// 如果页面已经加载完成，立即初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new FooterLoader();
    });
} else {
    new FooterLoader();
} 