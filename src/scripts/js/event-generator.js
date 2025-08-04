// Event Generator System
// 自动生成事件详情页面和相关文件

const EVENT_GENERATOR = {
    // 生成事件详情页面HTML内容
    generateEventSinglePage(event) {
        const eventId = event.id;
        const fileName = `event-${eventId}.html`;
        
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="AIDAC Event Details - ${event.title}">
        <meta name="keywords" content="AIDAC, Events, ${event.tags.join(', ')}">
        <meta name="author" content="AIDAC">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AIDAC - ${event.title}</title>

        <!-- Start Include All CSS -->
        <link rel="stylesheet" href="../styles/css/bootstrap.css"/>
        <link rel="stylesheet" href="../styles/css/animate.css"/>
        <link rel="stylesheet" href="../styles/css/font-awesome.css"/>
        <link rel="stylesheet" href="../styles/css/labflox-icon.css"/>
        <link rel="stylesheet" href="../styles/css/owl.theme.default.min.css"/>
        <link rel="stylesheet" href="../styles/css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="../styles/css/slick.css">
        <link rel="stylesheet" href="../styles/css/lightcase.css"/>
        <link rel="stylesheet" href="../styles/css/preloader.css"/>
        
        <!-- Revolution Slider Setting CSS -->
        <link rel="stylesheet" href="../styles/css/settings.css">

        <link rel="stylesheet" href="../styles/css/preset.css"/>
        <link rel="stylesheet" href="../styles/css/ignore_for_wp.css"/>
        <link rel="stylesheet" href="../styles/css/theme.css"/>
        <link rel="stylesheet" href="../styles/css/responsive.css"/>
        <link rel="stylesheet" href="../styles/css/event-single.css"/>
        <!-- End Include All CSS -->

        <!-- Favicon Icon -->
        <link rel="icon"  type="image/png" href="../assets/images/favicon.png">
        <!-- Favicon Icon -->
    </head>
    <body>
        <!-- Preloader -->
        <div class="preloader clock text-center">
            <div class="labfloxLoader">
                <div class="loaderO">
                    <span>A</span>
                    <span>I</span>
                    <span>D</span>
                    <span>A</span>
                    <span>C</span>
                </div>
            </div>
        </div>
        
        <!-- Header will be loaded by header-loader.js -->

        <!-- Page Banner Start -->
        <section class="pageBanner">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-7 col-xl-6">
                        <div class="pageBannerContent">
                            <h5 id="event-category">${event.type}</h5>
                            <h2 id="event-title">${event.title}</h2>
                            <div class="pageBreadCum">
                                <a href="index.html">Home</a>
                                <i class="fa fa-angle-right"></i>
                                <a href="blog-grid-lsb.html">Events</a>
                                <i class="fa fa-angle-right"></i>
                                <span id="event-breadcrumb">${event.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Page Banner End -->

        <!-- Event Details Section Start -->
        <section class="blogDetailsPage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blogDetailsThumb">
                            <img id="event-image" src="${event.image}" alt="${event.title}"/>
                        </div>
                        <div class="newsContentArea">
                            <div class="niDate roboto">
                                <span id="event-day">${EVENTS_DATA.formatDate(event.date).day}</span>
                                <span id="event-month">${EVENTS_DATA.formatDate(event.date).month}</span>
                            </div>
                            <div class="niMeta">
                                <span><i class="fa fa-map-marker"></i><a href="javascript:void(0);" id="event-location">${event.location}</a></span>
                                <span><i class="fa fa-calendar"></i><a href="javascript:void(0);" id="event-type">${event.type}</a></span>
                                <span><i class="fa fa-users"></i><a href="javascript:void(0);" id="event-attendees">${event.attendees}</a></span>
                            </div>
                            <h2 class="post-title" id="event-detail-title">${event.title}</h2>
                            <div class="newsContent clearfix">
                                <div id="event-description">
                                    ${event.fullDescription || `<p class="mb44">${event.description}</p>`}
                                </div>
                                <div id="event-details">
                                    <div class="event-details-section">
                                        <h3>Event Information</h3>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-calendar"></i> Date:</strong>
                                                    <span>${new Date(event.date).toLocaleDateString('en-US', { 
                                                        weekday: 'long', 
                                                        year: 'numeric', 
                                                        month: 'long', 
                                                        day: 'numeric' 
                                                    })}</span>
                                                </div>
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-map-marker"></i> Location:</strong>
                                                    <span>${event.venue || event.location}</span>
                                                </div>
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-clock-o"></i> Duration:</strong>
                                                    <span>${event.duration || '1 day'}</span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-users"></i> Organizer:</strong>
                                                    <span>${event.organizer || 'AIDAC Research Group'}</span>
                                                </div>
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-envelope"></i> Contact:</strong>
                                                    <span><a href="mailto:${event.contactEmail || 'info@aidac.ac.uk'}">${event.contactEmail || 'info@aidac.ac.uk'}</a></span>
                                                </div>
                                                <div class="detail-item">
                                                    <strong><i class="fa fa-users"></i> Capacity:</strong>
                                                    <span>${event.attendees}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="newsFooter">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="tagsArea">
                                            <span>Event Tags:</span>
                                            <div id="event-tags">
                                                ${event.tags.map(tag => `<a href="javascript:void(0);" class="event-tag-link">${tag}</a>`).join('')}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 clearfix">
                                        <a href="${event.registrationUrl || 'javascript:void(0);'}" class="sharePost pull-right" id="register-btn">
                                            <i class="fa fa-calendar-plus-o"></i>Register Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Related Events Section -->
                        <div class="relatedEventsArea">
                            <h3>Related Events</h3>
                            <div class="row" id="related-events">
                                <!-- Related events will be loaded dynamically -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="sidebar">
                            <aside class="widget search-widget">
                                <form method="get" action="#" class="searchForm">
                                    <input type="search" name="s" placeholder="Search Events"/>
                                    <button type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </aside>
                            <aside class="widget">
                                <h3 class="widgetTitle">Upcoming Events</h3>
                                <div class="latestPost" id="upcoming-events">
                                    <!-- Upcoming events will be loaded dynamically -->
                                </div>
                            </aside>
                            <aside class="widget">
                                <h3 class="widgetTitle">Event Categories</h3>
                                <ul>
                                    <li><a href="javascript:void(0);">Conferences</a></li>
                                    <li><a href="javascript:void(0);">Workshops</a></li>
                                    <li><a href="javascript:void(0);">Seminars</a></li>
                                    <li><a href="javascript:void(0);">Symposiums</a></li>
                                    <li><a href="javascript:void(0);">Webinars</a></li>
                                </ul>
                            </aside>
                            <aside class="widget">
                                <h3 class="widgetTitle">Event Tags</h3>
                                <div class="tagcloud" id="event-tag-cloud">
                                    <!-- Event tags will be loaded dynamically -->
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Event Details Section End -->

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
                                            Get latest updates Subscribe 
                                            to Our Newsletter
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <form method="post" action="#">
                                        <input type="email" name="email" placeholder="Your Mail Address"/>
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
                                    <i class="laf-y4LP01"></i>
                                    University of Glasgow
                                </div>
                                <div class="cwcInfo">
                                    <i class="laf-BqBcxz01"></i>
                                    <a href="javascript:void(0);">info@aidac.ac.uk</a>
                                </div>
                                <div class="cwcInfo">
                                    <i class="laf-A8AIr201"></i>
                                    G12 8QQ, Glasgow, UK
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <aside class="widget">
                            <h3 class="widgetTitle">Our Research</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Antenna Design</a></li>
                                <li><a href="javascript:void(0);">RF Engineering</a></li>
                                <li><a href="javascript:void(0);">AI Optimization</a></li>
                                <li><a href="javascript:void(0);">Electronic Design</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <aside class="widget">
                            <h3 class="widgetTitle">Services</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Research Collaboration</a></li> 
                                <li><a href="javascript:void(0);">Academic Partnerships</a></li>
                                <li><a href="javascript:void(0);">Industry Projects</a></li>
                                <li><a href="javascript:void(0);">Technology Transfer</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <aside class="widget">
                            <h3 class="widgetTitle">Resources</h3>
                            <ul>
                                <li><a href="javascript:void(0);">Publications</a></li>
                                <li><a href="javascript:void(0);">Research Papers</a></li>
                                <li><a href="javascript:void(0);">Conference Materials</a></li>
                                <li><a href="javascript:void(0);">Technical Reports</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyrightRow">
                            <div class="row">
                                <div class="col-md-6 col-lg-6">
                                    <div class="siteInfo">© 2024 AIDAC All rights reserved.</div>
                                </div>
                                <div class="col-md-6 col-lg-6">
                                    <div class="siteSocial">
                                        <a href="javascript:void(0);"><i class="fa fa-facebook-square"></i></a>
                                        <a href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                        <a href="javascript:void(0);"><i class="fa fa-pinterest"></i></a>
                                        <a href="javascript:void(0);"><i class="fa fa-github"></i></a>
                                        <a href="javascript:void(0);"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Section End -->
        
        <!-- Back To Top -->
        <a href="javascript:void(0);" id="backtotop"><i class="fa fa-angle-double-up"></i></a>
        <!-- Back To Top -->

        <!-- Start Include All JS -->
        <script src="../scripts/js/jquery.js"></script>
        <script src="../scripts/js/bootstrap.min.js"></script>
        <script src="../scripts/js/owl.carousel.min.js"></script>
        <script src="../scripts/js/jquery.appear.js"></script>
        <script src="../scripts/js/circle-progress.min.js"></script>
        <script src="../scripts/js/slick.js"></script>
        <script src="../scripts/js/lightcase.js"></script>
        <script src="../scripts/js/litepicker.js"></script>
        
        <!-- Slider Revolution Main Files -->
        <script src="../scripts/js/jquery.themepunch.tools.min.js"></script>
        <script src="../scripts/js/jquery.themepunch.revolution.min.js"></script>

        <!-- Slider Revolution Extension -->
        <script src="../scripts/js/extensions/revolution.extension.actions.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.carousel.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.kenburn.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.layeranimation.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.migration.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.navigation.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.parallax.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.slideanims.min.js"></script>
        <script src="../scripts/js/extensions/revolution.extension.video.min.js"></script>

        <script src="../scripts/js/theme.js"></script>
        <script src="../scripts/js/cursor-highlight.js"></script>
        <script src="../scripts/js/header-loader.js"></script>
        <script src="../scripts/js/events-data.js"></script>
        <script src="../scripts/js/event-single.js"></script>
        <!-- End Include All JS -->
    </body>
</html>`;

        return {
            fileName: fileName,
            content: htmlContent
        };
    },

    // 生成事件数据更新代码
    generateEventsDataUpdate(event) {
        return `        {
            id: ${event.id},
            title: "${event.title}",
            date: "${event.date}",
            location: "${event.location}",
            type: "${event.type}",
            attendees: "${event.attendees}",
            image: "${event.image}",
            tags: [${event.tags.map(tag => `"${tag}"`).join(', ')}],
            description: "${event.description}",
            fullDescription: \`${event.fullDescription || ''}\`,
            registrationUrl: "${event.registrationUrl || 'javascript:void(0);'}",
            organizer: "${event.organizer || 'AIDAC Research Group'}",
            contactEmail: "${event.contactEmail || 'info@aidac.ac.uk'}",
            venue: "${event.venue || event.location}",
            duration: "${event.duration || '1 day'}"
        }`;
    },

    // 显示生成结果
    showGenerationResults(event) {
        const eventPage = this.generateEventSinglePage(event);
        const dataUpdate = this.generateEventsDataUpdate(event);
        
        return `
            <div class="generation-results">
                <h4><i class="fa fa-check-circle"></i> Event Generated Successfully!</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="download-section">
                            <h5><i class="fa fa-file-code-o"></i> Event Detail Page</h5>
                            <p>Copy this HTML content and save as <code>${eventPage.fileName}</code>:</p>
                            <textarea class="form-control" rows="10" readonly>${eventPage.content}</textarea>
                            <button class="btn btn-admin mt-2" onclick="copyToClipboard(this.previousElementSibling)">
                                <i class="fa fa-copy"></i> Copy HTML
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="download-section">
                            <h5><i class="fa fa-code"></i> Data Update Code</h5>
                            <p>Copy this code and add to <code>events-data.js</code>:</p>
                            <textarea class="form-control" rows="10" readonly>${dataUpdate}</textarea>
                            <button class="btn btn-admin mt-2" onclick="copyToClipboard(this.previousElementSibling)">
                                <i class="fa fa-copy"></i> Copy Code
                            </button>
                        </div>
                    </div>
                </div>
                <div class="instructions">
                    <h5><i class="fa fa-info-circle"></i> Next Steps:</h5>
                    <ol>
                        <li>Copy the HTML content and save it as <code>src/pages/${eventPage.fileName}</code></li>
                        <li>Copy the data code and add it to <code>src/scripts/js/events-data.js</code> in the events array</li>
                        <li>The event will automatically appear in the events list</li>
                        <li>Access the event at: <code>${eventPage.fileName}?id=${event.id}</code></li>
                    </ol>
                </div>
            </div>
        `;
    }
};

// 复制到剪贴板功能
function copyToClipboard(element) {
    element.select();
    document.execCommand('copy');
    
    // 显示复制成功提示
    const button = element.nextElementSibling;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fa fa-check"></i> Copied!';
    button.classList.add('btn-success');
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('btn-success');
    }, 2000);
}

// 导出供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EVENT_GENERATOR;
} 