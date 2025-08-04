# Events Filter CSS

## 文件说明
`events-filter.css` 包含了Events页面标签筛选功能的所有样式。

## 功能特性

### 1. 标签样式 (.event-tag)
- 圆角按钮设计
- 悬停效果（上浮+阴影）
- 激活状态（红色背景）
- 响应式设计

### 2. 卡片筛选动画 (.newsItem)
- 平滑的显示/隐藏动画
- 缩放和透明度过渡
- 布局优化

### 3. 筛选结果提示 (.filter-results)
- 动态显示筛选结果
- 淡入动画效果
- 左侧红色边框装饰

## 使用方法

### 1. 引入CSS文件
```html
<link rel="stylesheet" href="path/to/events-filter.css">
```

### 2. HTML结构
```html
<!-- 标签容器 -->
<div class="tagcloud">
    <a href="javascript:void(0);" class="event-tag active" data-tag="all">All</a>
    <a href="javascript:void(0);" class="event-tag" data-tag="antenna">Antenna</a>
    <!-- 更多标签... -->
</div>

<!-- 事件卡片 -->
<div class="newsItem" data-tags="antenna,research,technology">
    <!-- 卡片内容 -->
</div>
```

### 3. JavaScript功能
需要配合 `events-filter.js` 使用，实现：
- 标签点击事件
- 卡片筛选逻辑
- 结果统计显示

## 响应式支持
- 移动端标签尺寸优化
- 触摸设备支持
- 键盘导航支持

## 无障碍特性
- 键盘焦点样式
- 语义化标签
- 屏幕阅读器友好 