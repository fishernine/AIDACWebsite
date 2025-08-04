# AIDAC 统一内容管理系统使用指南

## 概述

统一内容管理系统（Unified Content Management System）是一个集成的管理界面，允许管理员在一个地方管理所有类型的内容：研究论文、事件和案例研究。

## 访问管理界面

1. 在网站导航栏中点击 "Admin" 链接
2. 或者直接访问：`unified-admin.html`

## 界面功能

### 1. 标签页导航

管理界面分为四个主要标签页：

- **Research Papers** - 管理研究论文
- **Events** - 管理事件
- **Case Studies** - 管理案例研究
- **Statistics** - 查看统计信息和数据管理

### 2. 研究论文管理

#### 添加新论文
1. 切换到 "Research Papers" 标签页
2. 填写表单信息：
   - **Paper Title** (必填) - 论文标题
   - **Author** (必填) - 作者
   - **Category** (必填) - 选择类别：Antenna, Filter, Analog IC, RFIC
   - **Journal** (必填) - 期刊名称
   - **Year** (必填) - 发表年份 (2000-2030)
   - **Citations** - 引用次数
   - **Image Path** - 图片路径
   - **Official Link** - 官方链接 (IEEE, SCI等)
   - **Abstract** (必填) - 摘要
   - **Tags** - 标签 (用逗号分隔)

3. 点击 "Add Research Paper" 提交

#### 编辑论文
1. 在论文列表中找到要编辑的论文
2. 点击 "Edit" 按钮
3. 表单会自动填充现有数据
4. 修改需要更新的字段
5. 点击 "Update Research Paper" 保存更改

#### 删除论文
1. 在论文列表中找到要删除的论文
2. 点击 "Delete" 按钮
3. 确认删除操作

### 3. 事件管理

#### 添加新事件
1. 切换到 "Events" 标签页
2. 填写表单信息：
   - **Event Title** (必填) - 事件标题
   - **Event Date** (必填) - 事件日期
   - **Location** (必填) - 地点
   - **Event Type** (必填) - 事件类型：Conference, Workshop, Symposium, Webinar
   - **Attendees** - 参与者数量
   - **Image Path** - 图片路径
   - **Description** (必填) - 事件描述
   - **Tags** - 标签 (用逗号分隔)

3. 点击 "Add Event" 提交

#### 编辑和删除事件
操作方式与研究论文相同。

### 4. 案例研究管理

#### 添加新案例研究
1. 切换到 "Case Studies" 标签页
2. 填写表单信息：
   - **Case Study Title** (必填) - 案例标题
   - **Category** (必填) - 类别：Antenna Design, RF Engineering, AI Engineering, Circuit Design
   - **Subtitle** (必填) - 副标题
   - **Date** (必填) - 日期
   - **Team** (必填) - 团队
   - **Content** (必填) - 详细内容
   - **Tags** - 标签 (用逗号分隔)

3. 点击 "Add Case Study" 提交

#### 编辑和删除案例研究
操作方式与研究论文相同。

### 5. 统计信息

#### 查看统计
切换到 "Statistics" 标签页查看：
- 总内容数量
- 研究论文数量
- 事件数量
- 案例研究数量

#### 数据管理
在统计页面可以：
- **Export All Data** - 导出所有数据为JSON文件
- **Import All Data** - 从JSON文件导入数据

## 数据文件结构

### 研究论文数据结构
```javascript
{
    id: 1,
    title: "论文标题",
    author: "作者",
    category: "Antenna|Filter|Analog IC|RFIC",
    journal: "期刊名称",
    year: 2024,
    citations: 10,
    image: "图片路径",
    abstract: "摘要内容",
    tags: ["标签1", "标签2"],
    officialLink: "官方链接"
}
```

### 事件数据结构
```javascript
{
    id: 1,
    title: "事件标题",
    date: "2024-01-01",
    location: "地点",
    type: "Conference|Workshop|Symposium|Webinar",
    attendees: "100+ Attendees",
    image: "图片路径",
    description: "事件描述",
    tags: ["标签1", "标签2"]
}
```

### 案例研究数据结构
```javascript
{
    id: 1,
    title: "案例标题",
    category: "Antenna Design|RF Engineering|AI Engineering|Circuit Design",
    subtitle: "副标题",
    date: "2024-01-01",
    team: "团队名称",
    content: "详细内容",
    tags: ["标签1", "标签2"]
}
```

## 功能特点

### 1. 统一界面
- 所有内容类型在一个界面中管理
- 标签页式导航，操作简单
- 响应式设计，支持移动设备

### 2. 数据验证
- 必填字段验证
- 年份范围验证 (2000-2030)
- 实时错误提示

### 3. 实时更新
- 添加/编辑/删除后立即更新列表
- 统计信息实时更新
- 成功/错误消息自动显示

### 4. 数据管理
- 导出所有数据为JSON文件
- 从JSON文件导入数据
- 数据备份和恢复功能

### 5. 用户体验
- 表单自动重置
- 编辑模式自动填充
- 确认对话框防止误删
- 3秒自动隐藏消息提示

## 技术实现

### 文件结构
```
src/
├── pages/
│   └── unified-admin.html          # 统一管理界面
├── scripts/js/
│   ├── unified-admin.js            # 统一管理脚本
│   ├── research-data.js            # 研究论文数据
│   ├── events-data.js              # 事件数据
│   └── cases-data.js               # 案例研究数据
└── components/
    └── header.html                 # 导航栏（包含Admin链接）
```

### 核心类
- `UnifiedAdmin` - 统一管理类
- 处理所有CRUD操作
- 管理表单验证和数据处理
- 提供统计和导入/导出功能

## 使用建议

### 1. 定期备份
- 使用导出功能定期备份数据
- 保存多个版本的备份文件

### 2. 数据组织
- 使用标签对内容进行分类
- 保持图片路径的一致性
- 定期清理无用数据

### 3. 内容质量
- 确保必填字段完整
- 使用描述性的标题和摘要
- 添加相关的标签便于搜索

### 4. 团队协作
- 建立内容添加的规范
- 定期审查和更新内容
- 保持数据的一致性

## 故障排除

### 常见问题

1. **表单提交失败**
   - 检查必填字段是否完整
   - 验证年份是否在有效范围内
   - 确保所有输入格式正确

2. **数据不显示**
   - 检查JavaScript控制台是否有错误
   - 确认数据文件正确加载
   - 刷新页面重新加载数据

3. **编辑功能不工作**
   - 确保点击正确的编辑按钮
   - 检查表单是否正确填充
   - 验证数据ID是否存在

4. **导入数据失败**
   - 确保JSON文件格式正确
   - 检查文件编码是否为UTF-8
   - 验证数据结构是否匹配

### 联系支持
如果遇到技术问题，请检查：
1. 浏览器控制台错误信息
2. 网络连接状态
3. 文件路径是否正确
4. JavaScript是否启用

## 更新日志

### v1.0.0
- 初始版本发布
- 支持研究论文、事件、案例研究管理
- 实现CRUD操作
- 添加统计和数据管理功能
- 统一界面设计 