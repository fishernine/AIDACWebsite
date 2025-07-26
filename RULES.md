
## 🧱 推荐文件结构

你的网站可以采用如下文件结构（`public` 文件夹为最终部署目录）：

```
/aidac-website/
│
├── public/                 # 打包输出目录
│
├── src/                    # 源代码
│   ├── assets/             # 静态资源（图片、字体、Lottie JSON等）
│   ├── styles/             # 所有 CSS 文件
│   │   ├── base.css        # 浏览器重置、基础规则
│   │   ├── layout.css      # 布局相关样式
│   │   ├── components.css  # 组件样式（按钮、卡片等）
│   │   └── animations.css  # 自定义动画类（非 GSAP/Lenis）
│   ├── scripts/            # JavaScript 动画、交互控制逻辑
│   │   ├── gsap.js
│   │   ├── lenis.js
│   │   └── lottie.js
│   ├── pages/              # 各个页面（html为主）
│   │   └── index.html
│   └── components/         # 页面中可复用的HTML片段（如footer.html）
│
├── .cursor/                # Cursor 编辑器配置文件夹
├── .gitignore
├── README.md               # 项目介绍
└── RULES.md                # 技术规范文档
```

---

## ✍️ `RULES.md` 内容（你可以直接在 Cursor 创建）

````markdown
# AIDAC 实验室官网开发规范（RULES.md）

> 技术栈：HTML + CSS（纯前端）  
> 动画库：GSAP、Lenis、Lottie  
> 编程环境：Cursor + GitHub + 本地预览  

---

## 1. 文件与目录结构规范

- 所有源代码统一放在 `src/` 文件夹下；
- 页面级文件放在 `src/pages/`，如 `index.html`；
- 可复用组件放在 `src/components/` 中；
- 所有 CSS 文件放在 `src/styles/`，按用途细分；
- 所有 JavaScript 动画控制脚本放在 `src/scripts/`；
- 所有图片、字体、Lottie 文件放在 `src/assets/`。

---

## 2. 文件命名规则

| 类型       | 命名规则         | 示例                    |
|------------|------------------|-------------------------|
| HTML 页面  | 小写+中划线      | `index.html`            |
| CSS 文件   | 小写+中划线      | `base.css`, `layout.css`|
| JS 脚本    | 小写+中划线      | `gsap.js`, `lenis.js`   |
| 图片/资源  | 小写+中划线      | `logo-black.png`        |
| 组件片段   | 小写+中划线      | `footer.html`           |

- 命名必须语义明确，避免拼音、缩写和无意义词；
- 所有文件名统一使用英文，不使用中文；
- 所有类名和ID必须有上下文语义，避免 `box1`、`title2` 这类命名；

---

## 3. HTML 编写规范

- 使用语义化标签（如 `<header>` `<main>` `<footer>`）；
- 所有标签必须正确闭合；
- 属性必须使用双引号（"`"）；
- 页面结构层级清晰（推荐三层结构：结构层、布局层、内容层）；
- 禁止内联样式（style="..."），所有样式都通过 CSS 实现；
- 每个页面必须引入 `base.css` 和需要的动画脚本；
- 动画元素必须添加明确的 `data-` 属性用于绑定（如 `data-animate="fade-in"`）；

---

## 4. CSS 编写规范

- 使用 **BEM 命名规范**（Block__Element--Modifier）；
  - 示例：`.button--primary`, `.card__title`；
- 所有颜色值使用 HEX 或 HSL，不使用中文或拼音注释；
- 保持选择器简洁，避免嵌套超过 3 层；
- 动画类应独立放置在 `animations.css`；
- 禁止使用 `!important`，除非有明确注释解释其必要性；
- 每个 CSS 文件顶部应添加文件用途说明：

```css
/* 
 * layout.css - 页面整体布局规则，包括 header, main, footer 的 grid/flex 布局
 */
````

---

## 5. JavaScript（GSAP / Lenis / Lottie）

* 所有动画控制统一放入 `scripts/` 中，不直接写入 HTML；
* 每个库一个文件，如 `gsap.js` 只负责 GSAP 动画；
* 为每个动画元素添加 `data-*` 属性标记，绑定清晰；
* 所有脚本必须使用模块化结构（如 IIFE、ESM 等），防止变量污染；
* 使用 `requestAnimationFrame` 管理性能关键动画；
* 禁止出现魔法数字，所有参数需定义常量；

---

## 6. 可维护性与注释要求

* 所有代码文件必须有模块说明注释；
* 所有关键 DOM 元素操作、动画函数需加注释；
* 所有第三方库使用，需在 README.md 中注明用途；
* 每个页面需在顶部添加页面信息注释：

```html
<!--
  页面名称：实验室首页
  作者：赵云飞
  创建时间：2025-07
-->
```

---

## 7. Cursor 编程约定

* 每个功能点为一个 Commit；
* 每一个页面一个 Prompt；
* 写 CSS 时优先使用 Tailwind Class Lookup 辅助调试；
* 使用 Cursor 自带 Prettier 格式化功能保持代码统一；

---

## 8. 后期扩展建议

* 可考虑在第二阶段引入 Vite + Vue + TypeScript；
* 所有组件结构应为模块化，方便后续集成框架；
* 所有静态资源建议采用 CDN 管理或打包优化；

---

```