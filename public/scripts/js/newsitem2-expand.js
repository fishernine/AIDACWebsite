(function(){
    function enableSmoothExpand() {
        var items = document.querySelectorAll('.blogSection2 .newsItem2');
        if (!items || items.length === 0) return;

        items.forEach(function(item){
            // 初始高度：测量当前渲染后的高度，作为折叠高度
            var collapsedHeight = item.getAttribute('data-collapsed-height');
            if (!collapsedHeight) {
                collapsedHeight = item.clientHeight || 210;
                item.setAttribute('data-collapsed-height', String(collapsedHeight));
            } else {
                collapsedHeight = parseInt(collapsedHeight, 10) || 210;
            }

            // 准备过渡：height 过渡比 max-height 更稳定
            item.style.height = collapsedHeight + 'px';
            item.style.overflow = 'hidden';
            item.style.transition = 'height 300ms cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s';
            item.style.willChange = 'height';

            function onEnter(){
                // 先锁定当前高度作为过渡起点
                var start = item.clientHeight || collapsedHeight;
                item.style.height = start + 'px';
                // 添加expanded以解除标题省略，获取真实展开高度
                item.classList.add('expanded');
                // 下一帧读取scrollHeight并过渡
                requestAnimationFrame(function(){
                    var expanded = item.scrollHeight;
                    item.style.height = expanded + 'px';
                });
            }

            function onLeave(){
                // 先将当前高度锁定为起点
                var current = item.scrollHeight;
                item.style.height = current + 'px';
                // 下一帧移除expanded并过渡回折叠高度
                requestAnimationFrame(function(){
                    item.classList.remove('expanded');
                    var collapsed = parseInt(item.getAttribute('data-collapsed-height'), 10) || collapsedHeight;
                    item.style.height = collapsed + 'px';
                });
            }

            item.addEventListener('mouseenter', onEnter);
            item.addEventListener('mouseleave', onLeave);

            // 当窗口变化时，更新折叠高度，保持布局不跳
            window.addEventListener('resize', function(){
                if (!item.classList.contains('expanded')) {
                    var h = item.clientHeight || collapsedHeight;
                    item.setAttribute('data-collapsed-height', String(h));
                    item.style.height = h + 'px';
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enableSmoothExpand);
    } else {
        enableSmoothExpand();
    }
})();
