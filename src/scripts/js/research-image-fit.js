(function() {
    function getBaselineHeight() {
        // 优先以第二个“未克隆”的研究卡片作为基准高度
        var originals = document.querySelectorAll('.researchSlider .owl-item:not(.cloned) .researchItem');
        if (originals && originals.length >= 2) {
            var second = originals[1];
            var h = second ? second.clientHeight : 0;
            if (h && h > 0) return h;
            // 若容器高度为0，尝试以其图片高度为基准
            var img2 = second ? second.querySelector('img') : null;
            if (img2) {
                var ih = img2.clientHeight;
                if (ih && ih > 0) return ih;
            }
        }
        // 回退：任选一个已渲染的研究卡片高度
        var anyItem = document.querySelector('.researchItem');
        if (anyItem) {
            var anyH = anyItem.clientHeight;
            if (anyH && anyH > 0) return anyH;
        }
        // 最终兜底固定值，避免无高度
        return 260;
    }

    function applyHeightToAll(heightPx) {
        // 针对所有研究卡片（包含克隆项）
        var allItems = document.querySelectorAll('.researchItem');
        if (!allItems || allItems.length === 0) return;
        allItems.forEach(function(item) {
            var img = item.querySelector('img');
            if (!img) return;
            img.style.width = '100%';
            img.style.height = heightPx + 'px';
            // 使用拉伸铺满（按需可改为 'cover' 保持比例裁切）
            img.style.objectFit = 'fill';
            img.style.objectPosition = 'center center';
            // 防止父容器被内容撑开不一致
            item.style.overflow = 'hidden';
        });
    }

    function adjustAll() {
        // 读取基准高度并应用
        var baseH = getBaselineHeight();
        applyHeightToAll(baseH);
    }

    function scheduleAdjust() {
        if (scheduleAdjust._tid) cancelAnimationFrame(scheduleAdjust._tid);
        scheduleAdjust._tid = requestAnimationFrame(adjustAll);
    }

    // 初始与窗口变化
    window.addEventListener('load', scheduleAdjust);
    window.addEventListener('resize', scheduleAdjust);

    // Owl Carousel 事件（初始化/尺寸变化/翻页/刷新）
    if (window.jQuery) {
        var $ = window.jQuery;
        $(document).on('initialized.owl.carousel resized.owl.carousel translated.owl.carousel refreshed.owl.carousel', '.researchSlider', scheduleAdjust);
    }

    // 观察DOM变化（卡片或图片动态替换时）
    var observer = new MutationObserver(function() { scheduleAdjust(); });
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });
})();
