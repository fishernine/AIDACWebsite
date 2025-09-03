// 自定义圆形光标和文本反色交互
(function(){
    // 插入CSS样式
    const style = document.createElement('style');
    style.innerHTML = `
    .custom-cursor {
        position: fixed;
        top: 0; left: 0;
        width: 144px; height: 144px;
        border-radius: 50%;
        background: #fff;
        /* box-shadow: 0 0 0 5px rgba(255,255,255,0.3);  去除灰色边缘 */
        pointer-events: none;
        mix-blend-mode: difference;
        opacity: 0;
        z-index: 9999;
        transform: translate(-50%, -50%) translate(0px, 0px) scale(0);
        transition: none;
    }
    .custom-cursor.active {
        opacity: 1;
    }
    `;
    document.head.appendChild(style);

    // 创建光标元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, active = false;
    let targetX = 0, targetY = 0;

    // 弹簧缩放（更慢且有弹性）
    let displayScale = 0;        // 当前缩放
    let targetScale = 0;         // 目标缩放（0 或 1）
    let scaleVelocity = 0;       // 缩放速度（弹簧用）
    const SPRING_STIFFNESS = 0.055;  // 刚度更小 => 更慢更柔和
    const SPRING_DAMPING   = 0.18;   // 阻尼稍低 => 弹性更明显

    function animate() {
        // 位置插值（更慢更柔和，增加滞后感）
        const positionLerp = active ? 0.04 : 0.025;  // 进一步降低插值系数，大幅增加滞后感
        cursorX += (targetX - cursorX) * positionLerp;
        cursorY += (targetY - cursorY) * positionLerp;

        // 弹簧缩放更新：像气球一样有弹性地弹出/收回
        const scaleDelta = targetScale - displayScale;
        const accel = scaleDelta * SPRING_STIFFNESS - scaleVelocity * SPRING_DAMPING;
        scaleVelocity += accel;
        displayScale += scaleVelocity;
        // 不允许小于 0，避免视觉翻转；允许轻微超出 1 以体现弹性
        if (displayScale < 0) { displayScale = 0; scaleVelocity = 0; }

        cursor.style.transform = `translate(-50%, -50%) translate(${cursorX}px, ${cursorY}px) scale(${displayScale})`;
        requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener('mousemove', function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
        targetX = mouseX;
        targetY = mouseY;
    });

    // 支持多个选择器：轮播主标题、serviceLeft > h2、wdContent > h2、tmLeft > h2、ctaContent > h2、cursor-highlight-target
    // 新增：研究合作标题、发表研究标题、所有页面主标题
    const selectors = [
        '.tp-caption.ws_nowrap', 
        '.serviceLeft > h2', 
        '.wdContent > h2', 
        '.tmLeft > h2', 
        '.ctaContent > h2', 
        '.cursor-highlight-target',
        // 新增的标题选择器
        '.reasearchSection .secTitle',  // "We collaborate with academia and industry"
        '.blogSection2 .secTitle',     // "Our Published Research"
        '.pageBanner h2',              // 所有页面的第一个界面大标题
        '.pageBannerContent h2'        // 备用选择器，确保覆盖
    ];

    document.body.addEventListener('mouseenter', function(e){
        const el = selectors.map(sel => e.target.closest(sel)).find(Boolean);
        if(el){
            // 进入时以当前指针为圆心，立即定位并从很小的值弹出
            targetX = mouseX;
            targetY = mouseY;
            cursorX = mouseX;
            cursorY = mouseY;

            active = true;
            targetScale = 1;
            // 从极小值开始并清零速度，获得干净的"弹出"弹性
            displayScale = Math.min(displayScale, 0.008);
            scaleVelocity = 0;

            cursor.classList.add('active');
        }
    }, true);

    document.body.addEventListener('mouseleave', function(e){
        const el = selectors.map(sel => e.target.closest(sel)).find(Boolean);
        if(el){
            // 离开时从指针位置有弹性地收回
            targetX = mouseX;
            targetY = mouseY;
            cursorX = mouseX;
            cursorY = mouseY;

            active = false;
            targetScale = 0;
            // 清零速度，使收缩过程干净且有弹性
            scaleVelocity = 0;

            // 隐藏时机延后一些以配合更慢的弹性动画
            // 当缩放接近 0 后移除 active（兜底延时）
            const startHide = performance.now();
            function tryHide(ts){
                // 接近 0 即隐藏
                if (displayScale < 0.03 || ts - startHide > 1200) {
                    cursor.classList.remove('active');
                } else {
                    requestAnimationFrame(tryHide);
                }
            }
            requestAnimationFrame(tryHide);
        }
    }, true);
})(); 