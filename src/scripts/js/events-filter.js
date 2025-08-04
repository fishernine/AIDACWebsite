// Events Filter JavaScript

$(document).ready(function() {
    // Event Tags 筛选功能
    $('.event-tag').on('click', function() {
        var selectedTag = $(this).data('tag');
        
        // 更新标签状态
        $('.event-tag').removeClass('active');
        $(this).addClass('active');
        
        // 筛选事件卡片
        filterEvents(selectedTag);
    });
    
    function filterEvents(tag) {
        var $events = $('.newsItem');
        var visibleCount = 0;
        
        $events.each(function() {
            var $event = $(this);
            var eventTags = $event.data('tags').split(',');
            
            if (tag === 'all' || eventTags.includes(tag)) {
                $event.removeClass('hidden').addClass('visible');
                visibleCount++;
            } else {
                $event.removeClass('visible').addClass('hidden');
            }
        });
        
        // 显示筛选结果提示
        showFilterResults(tag, visibleCount);
    }
    
    function showFilterResults(tag, count) {
        // 移除现有的结果提示
        $('.filter-results').remove();
        
        var message = '';
        if (tag === 'all') {
            message = 'Showing all events (' + count + ' events)';
        } else {
            message = 'Showing ' + count + ' event(s) for "' + tag.charAt(0).toUpperCase() + tag.slice(1) + '"';
        }
        
        // 在事件列表前添加结果提示
        $('.col-xl-8 .row').before('<div class="filter-results">' + message + '</div>');
    }
    
    // 初始化显示所有事件
    filterEvents('all');
    
    // 添加键盘导航支持
    $('.event-tag').on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).click();
        }
    });
    
    // 添加触摸设备支持
    $('.event-tag').on('touchstart', function() {
        $(this).addClass('touch-active');
    }).on('touchend', function() {
        $(this).removeClass('touch-active');
    });
}); 