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
        transform: translate(-50%, -50%) scale(0.1);
        transition: opacity 0.2s, transform 0.3s cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
    .custom-cursor.active {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    `;
    document.head.appendChild(style);

    // 创建光标元素
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, active = false;
    let targetX = 0, targetY = 0;
    function animate() {
        // 惯性跟随，速度更慢
        cursorX += (targetX - cursorX) * 0.13;
        cursorY += (targetY - cursorY) * 0.13;
        cursor.style.transform = `translate(-50%, -50%) scale(${active ? 1 : 0.1}) translate(${cursorX}px, ${cursorY}px)`;
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
    const selectors = ['.tp-caption.ws_nowrap', '.serviceLeft > h2', '.wdContent > h2', '.tmLeft > h2', '.ctaContent > h2', '.cursor-highlight-target'];
    document.body.addEventListener('mouseenter', function(e){
        const el = selectors.map(sel => e.target.closest(sel)).find(Boolean);
        if(el){
            // 记录进入时的鼠标位置
            targetX = mouseX;
            targetY = mouseY;
            cursorX = mouseX;
            cursorY = mouseY;
            active = true;
            cursor.classList.add('active');
        }
    }, true);
    document.body.addEventListener('mouseleave', function(e){
        const el = selectors.map(sel => e.target.closest(sel)).find(Boolean);
        if(el){
            // 离开时锁定当前位置
            targetX = mouseX;
            targetY = mouseY;
            cursorX = mouseX;
            cursorY = mouseY;
            active = false;
            cursor.classList.remove('active');
        }
    }, true);
})(); 