// Scroll Animation Handler
class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
        this.init();
    }

    init() {
        // 初始检查
        this.checkAnimations();
        
        // 监听滚动事件
        window.addEventListener('scroll', () => {
            this.checkAnimations();
        });
        
        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            this.checkAnimations();
        });
    }

    checkAnimations() {
        this.animatedElements.forEach(element => {
            if (this.isElementInViewport(element) && !element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    }

    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // 当元素进入视口底部20%时触发动画
        return rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
});

// 如果页面已经加载完成，立即初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScrollAnimations();
    });
} else {
    new ScrollAnimations();
} 