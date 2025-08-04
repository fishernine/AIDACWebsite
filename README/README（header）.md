# 导航栏组件使用说明

## 概述
这个导航栏组件提供了一个统一的导航栏，可以在所有页面中使用。组件会自动根据当前页面设置正确的激活状态。

## 文件结构
```
src/
├── components/
│   ├── header.html          # 导航栏HTML组件
│   └── README.md           # 使用说明
└── scripts/js/
    └── header-loader.js    # 导航栏加载器脚本
```

## 使用方法

### 1. 在HTML页面中引入脚本
在页面的`</body>`标签前添加：
```html
<script src="../scripts/js/header-loader.js"></script>
```

### 2. 移除原有的导航栏代码
删除页面中原有的`<header>`部分，替换为：
```html
<!-- Header will be loaded by header-loader.js -->
```

### 3. 确保jQuery已加载
确保在`header-loader.js`之前已经加载了jQuery：
```html
<script src="../scripts/js/jquery.js"></script>
<script src="../scripts/js/header-loader.js"></script>
```

## 功能特性

### 自动页面高亮
组件会根据当前页面URL自动设置正确的导航项为激活状态：
- `index.html` → Home 激活
- `research.html` → Research 激活
- `team.html` → Event 激活
- `gallery.html` → Case Studies 激活
- `contact-us.html` → Contact 激活

### 下拉菜单
Research菜单包含下拉选项：
- Antenna
- Filter
- Analog IC
- RFIC

### 响应式支持
- 桌面端：鼠标悬停显示下拉菜单
- 移动端：点击展开/收起菜单

## 自定义

### 修改导航项
编辑`src/components/header.html`文件中的导航结构。

### 添加新页面
1. 在`header.html`中添加新的导航项
2. 在`header-loader.js`的`setCurrentPageActive()`函数中添加对应的case

### 修改样式
导航栏使用主题的CSS样式，修改`src/styles/css/theme.css`中的相关样式。

## 注意事项

1. **路径问题**：确保组件文件路径正确
2. **加载顺序**：jQuery必须在header-loader.js之前加载
3. **服务器环境**：需要通过HTTP服务器访问，不能直接打开HTML文件
4. **浏览器兼容性**：需要支持AJAX请求的现代浏览器

## 故障排除

### 导航栏不显示
- 检查文件路径是否正确
- 确认jQuery已正确加载
- 检查浏览器控制台是否有错误

### 页面高亮不正确
- 检查页面文件名是否与switch case中的名称匹配
- 确认导航项的class名称正确

### 下拉菜单不工作
- 确认主题的CSS和JS文件已正确加载
- 检查是否有JavaScript错误 