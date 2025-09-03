// Header Loader
class HeaderLoader {
    constructor() {
        this.init();
    }

    init() {
        // 等待jQuery加载完成
        if (typeof $ !== 'undefined') {
            this.loadHeader();
        } else {
            // 如果jQuery还没加载，等待一下
            setTimeout(() => {
                this.init();
            }, 100);
        }
    }

    loadHeader() {
        // 直接使用内嵌的header内容，避免fetch问题
        const headerHTML = this.getHeaderHTML();
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
        this.setCurrentPageActive();
        this.initializeHeader();
    }

    getHeaderHTML() {
        return `
<!-- Header Start -->
<header class="header01 isSticky">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="navArea">
                    <div class="logo">
                        <a href="index.html"><img src="../assets/images/logo.png" alt="AIDAC"/></a>
                    </div>
                    <nav class="mainMenu">
                        <ul>
                            <li class="current-menu-item">
                                <a href="index.html">Home</a>
                            </li>
                                                    <li class="menu-item-has-children">
                            <a href="javascript:void(0);">Research</a>
                            <ul>
                                <li><a href="../pages/research.html?tag=antenna">Antenna</a></li>
                                <li><a href="../pages/research.html?tag=filter">Filter</a></li>
                                <li><a href="../pages/research.html?tag=analog ic">Analog IC</a></li>
                                <li><a href="../pages/research.html?tag=rfic">RFIC</a></li>
                            </ul>
                        </li>
                            <li><a href="blog-grid-lsb.html">Event</a></li>
                            <li><a href="blog-list-rsb.html">Case Studies</a></li>
                            <li><a href="appointment.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="accessNav">
                        <div class="phoneCall">
                            <i class="fa fa-map-marker"></i>
                            <span>University of Glasgow</span>
                            <h6>G12 8QQ</h6>
                        </div>
                        <a href="http://ec2-35-176-54-107.eu-west-2.compute.amazonaws.com/" target="_blank" class="lab_btn lightHover requestBTN"><span><i class="fa fa-satellite"></i>Antenna Paradise</span></a>
                        <a href="javascript:void(0);" class="menuBtn"><span><i class="fa fa-bars"></i>Menu</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header End -->
        `;
    }

    setCurrentPageActive() {
        const currentPage = this.getCurrentPage();
        
        // 移除所有当前活动状态
        $('.mainMenu li').removeClass('current-menu-item');
        
        switch(currentPage) {
            case 'index':
                $('.mainMenu li:has(a[href="index.html"])').addClass('current-menu-item');
                break;
            case 'research':
                $('.mainMenu li:has(a[href="javascript:void(0);"]').addClass('current-menu-item');
                break;
            case 'research-antenna':
            case 'research-filter':
            case 'research-analog-ic':
            case 'research-rfic':
                $('.mainMenu li:has(a[href="javascript:void(0);"]').addClass('current-menu-item');
                break;
            case 'blog-grid-lsb':
                $('.mainMenu li:has(a[href="blog-grid-lsb.html"])').addClass('current-menu-item');
                break;
            case 'blog-list-rsb':
                $('.mainMenu li:has(a[href="blog-list-rsb.html"])').addClass('current-menu-item');
                break;
            case 'contact-us':
            case 'appointment':
                $('.mainMenu li:has(a[href="appointment.html"])').addClass('current-menu-item');
                break;
            default:
                // 尝试通过href匹配
                const currentPath = window.location.pathname;
                const matchingLink = $(`.mainMenu a[href="${currentPath.split('/').pop()}"]`);
                if (matchingLink.length > 0) {
                    matchingLink.closest('li').addClass('current-menu-item');
                }
                break;
        }
    }

    initializeHeader() {
        // 初始化移动端菜单切换
        $('.menuBtn').on('click', function() {
            $('.mainMenu').toggleClass('active');
        });
        
        // 点击外部关闭移动端菜单
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.navArea').length) {
                $('.mainMenu').removeClass('active');
            }
        });
        
        // 初始化粘性header功能
        this.initializeStickyHeader();
        
        // 初始化下拉菜单
        this.initializeDropdownMenus();
    }

    initializeStickyHeader() {
        if($(".isSticky").length > 0){
            var header_height = $(".isSticky").height();
            $(window).on('scroll', function(){
                if($(window).scrollTop() > 100){
                    $(".isSticky").addClass('fixedHeader animated slideInDown');
                    $("body").addClass('header-fixed');
                }else{
                    $(".isSticky").removeClass('fixedHeader animated slideInDown');
                    $("body").removeClass('header-fixed');
                }
            });
        }
    }

    initializeDropdownMenus() {
        $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
            e.preventDefault();
            var $this = $(this);
            if($(window).width() < 1200){
                $this.siblings('ul').slideToggle();
                $this.parent('li.menu-item-has-children').toggleClass('active');
            }
        });
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        return page;
    }
}

// 等待DOM和jQuery都加载完成后再初始化
$(document).ready(function() {
    new HeaderLoader();
}); 