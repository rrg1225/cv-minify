# 📄 cv-minify — Lite Markdown Workspace

[简体中文](#简体中文) | [English](#english)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Build-Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React-19.0-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

cv-minify is a modern, lightweight Markdown live workspace built for fast local authoring, real-time preview, and pixel-perfect A4 export. It is designed for narrow laptops, multi-monitor workflows, and anyone who needs a smooth Markdown productivity tool without heavyweight dependencies.

---

## 简体中文

### 目录
- [项目愿景](#项目愿景)
- [为什么选择 cv-minify](#为什么选择-cv-minify)
- [核心亮点](#核心亮点)
- [应用场景](#应用场景)
- [架构与技术栈](#架构与技术栈)
- [快速上手](#快速上手)
- [完美 PDF 导出指南](#完美-pdf-导出指南)
- [项目结构](#项目结构)
- [许可证](#许可证)

### 项目愿景
cv-minify 不是一款单一用途的简历工具，而是一套面向所有人的、极致轻量的 Markdown 实时工作站。

本项目的设计目标是：
- 零依赖、本地启动，不依赖大型 Markdown 引擎。
- 浏览器端微秒级响应，保证编辑与预览时不卡顿。
- 低内存、低耗电，适合笔记本电脑全天候写作。
- 支持窄屏笔记本与外接双显示器的“多屏同投”协同工作方式。
- 同时提供像素级 A4 打印与 PDF 导出的专业级体验。

这意味着你可以用 cv-minify 来：
- 撰写项目文档、产品规格、技术博客。
- 编写个人简历、演示资料、课程笔记。
- 进行研发日志记录、内容预览、快速导出。

### 为什么选择 cv-minify
- **轻量安全**：基于纯 JavaScript 正则手写 Markdown 引擎，无需第三方解析库。
- **真实实时**：输入内容即时渲染，适合高频实时编辑场景。
- **双屏优化**：支持“仅编辑 / 双栏 / 仅预览”三种模式，并可投射到外接屏幕。
- **打印级输出**：内置 `@media print` 打印样式，确保 A4 导出结果更稳定。
- **自动恢复**：本地 `localStorage` 自动保存，避免页面刷新或意外断电导致数据丢失。

### 核心亮点

#### 1. 手写微型 Markdown 引擎
cv-minify 的解析器是一个纯 JavaScript 的轻量实现：
- 标题、引用、加粗、列表和换行等常用语法均可识别。
- 先转义 `<` 与 `>`，从根源抵御 HTML 注入风险。
- 实现简单，可控性强，在生产环境中具备更高安全边界。
- 该解析策略在标准编辑场景下可为渲染速度带来显著提升。

#### 2. 窄屏笔记本与外接双显“多屏同投”架构
cv-minify 提供多种视图模式，完美适配现代办公硬件：
- 窄屏笔记本上支持轻量编辑与实时预览。
- 外接显示器时可将渲染区域投射到独立窗口，实现双屏协同。
- 无需服务器，基于本地跨窗口 DOM 同步技术即可完成实时输出。

#### 3. 像素级 A4 打印控制
本项目把“所见即所得”提升到打印级别：
- 预览页面宽度直接对应真实 A4 纸张尺寸。
- `@media print` 自动隐藏 UI 控件、边框和换行提示。
- 样式规则降低内容跨页断裂风险。
- 用户只需在打印对话框中启用背景图形、设置无边距即可获得专业 PDF。

#### 4. 云工作台与自动保存
cv-minify 兼具编辑器与本地工作台特性：
- 支持导入本地 `.md` 文件继续编辑。
- 自动将内容同步到 `localStorage`，刷新后自动恢复。
- 提供欢迎文档、空白文档和简历模板三种启动方案。

### 应用场景
- 个人或团队的技术文档编辑器
- 产品设计方案与 PRD 撰写工具
- 快速生成项目 README 或博客草稿
- 纯文本简历、作品集、课程笔记导出
- 双屏会议展示与现场演示制作

### 架构与技术栈
- `React 19`：现代声明式组件与可组合 UI。
- `Vite 6`：极速启动与高效构建体验。
- `Tailwind CSS v4`：快速样式组合与打印友好布局。
- `localStorage`：持久化自动保存。
- 纯 JS Markdown 解析：零依赖、安全可控。

### 快速上手

#### 前置条件
- Node.js 18+ / 20+
- npm / yarn / pnpm

#### 启动项目
```bash
git clone https://github.com/rrg1225/cv-minify.git
cd cv-minify
npm install
npm run dev
```

#### 构建与预览
```bash
npm run build
npm run preview
```

### 完美 PDF 导出指南
1. 在浏览器中按下 `Ctrl + P`。
2. 选择“保存为 PDF”或系统 PDF 打印机。
3. 启用“背景图形”或“打印背景”。
4. 将纸张尺寸确认设置为 A4。
5. 将边距设置为“无”或“最小”。
6. 预览中应显示干净的内容，操作栏被自动隐藏。

### 项目结构
```text
cv-minify/
├─ index.html
├─ package.json
├─ README.md
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ index.css
   ├─ main.jsx
   └─ components/
      └─ ResumeEditor.jsx
```

### 贡献指南
欢迎通过 Issue 和 Pull Request 参与改进：
- 提交功能建议或体验优化需求。
- 针对代码样式、文档更新、Bug 修复均可贡献。
- 该仓库采用 MIT 协议，欢迎社区共享与复用。

### 许可证
本项目使用 [MIT License](https://opensource.org/licenses/MIT)。

---

## English

### Table of Contents
- [Vision](#vision)
- [Why cv-minify](#why-cv-minify)
- [Key Highlights](#key-highlights)
- [Use Cases](#use-cases)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Quick Start](#quick-start)
- [Perfect PDF Export Guide](#perfect-pdf-export-guide)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

### Vision
cv-minify is not a simple resume generator. It is a universal, ultra-lightweight Markdown live workspace designed for creators, engineers, product teams, and writers.

Its mission is to provide:
- zero-dependency local startup without heavy Markdown parsing libraries.
- microsecond-level browser responsiveness for editor and preview.
- low memory and battery usage for laptop workflows.
- a dual-screen live-cast experience for narrow laptops and external displays.
- pixel-perfect A4 print and PDF export.

That means you can use a single tool to write project specs, draft technical notes, create documentation, author blog posts, or export professional PDF assets.

### Why cv-minify
- **Lightweight & secure**: built on a handcrafted JavaScript Markdown parser with no third-party engine.
- **Real-time feedback**: immediate render updates for fast authoring.
- **Dual-screen optimized**: edit, split, preview modes plus external screen projection.
- **Print-ready output**: built-in print styles for stable A4 export.
- **Auto-save**: localStorage persistence keeps content safe across refreshes.

### Key Highlights

#### 1. Handcrafted Micro Markdown Engine
cv-minify’s parser is implemented with pure JavaScript and regular expressions:
- supports headings, blockquotes, bold text, lists, and line breaks.
- escapes `<` and `>` first to defend against injection.
- minimal implementation delivers smaller runtime and faster parsing.
- optimized for live editing performance.

#### 2. Narrow Laptop + External Dual-Screen Live-Cast Architecture
The workspace is tailored for modern hardware workflows:
- narrow laptop-friendly layout with high-density editing.
- real-time preview on the same screen or split between windows.
- external display casting opens a second browser window with synchronized rendered output.
- local cross-window DOM sync eliminates the need for backend services.

#### 3. Pixel-Perfect A4 Print Control
The preview page is tuned for real print:
- `@media print` removes UI controls and chrome.
- content width corresponds to 210mm for true A4 fidelity.
- print styles reduce page breaks and layout shifting.
- best results come from enabling print backgrounds and disabling margins.

#### 4. Local Workspace with Auto-Save
cv-minify doubles as an editor and a local workspace:
- import any `.md` file from your device and edit it instantly.
- localStorage auto-sync saves content continuously.
- includes quick-start content for welcome notes, blank pages, and premium resume templates.

### Use Cases
- technical documentation authoring
- product requirement writing
- README and blog draft generation
- resume, portfolio, and note export
- dual-screen presentations and demos

### Architecture & Tech Stack
- `React 19` for modern component-driven UI.
- `Vite 6` for instant startup, HMR, and build speed.
- `Tailwind CSS v4` for atomic styling and print-friendly layouts.
- `localStorage` for persistence.
- pure JS Markdown parsing for control, security, and speed.

### Quick Start

#### Prerequisites
- Node.js 18+ / 20+
- npm / yarn / pnpm

#### Start locally
```bash
git clone https://github.com/rrg1225/cv-minify.git
cd cv-minify
npm install
npm run dev
```

#### Build and preview
```bash
npm run build
npm run preview
```

### Perfect PDF Export Guide
1. Press `Ctrl + P` in the browser.
2. Choose “Save as PDF” or a PDF printer.
3. Enable background graphics or print backgrounds.
4. Set paper size to A4.
5. Set margins to none or minimum.
6. Confirm a clean A4 preview without editor chrome.

### Project Structure
```text
cv-minify/
├─ index.html
├─ package.json
├─ README.md
├─ tailwind.config.js
├─ vite.config.js
└─ src/
   ├─ index.css
   ├─ main.jsx
   └─ components/
      └─ ResumeEditor.jsx
```

### Contributing
Contributions are welcome.
- Open an issue for feature requests or bugs.
- Submit pull requests for improvements, fixes, or documentation updates.
- This repository uses the MIT License, and community contributions are encouraged.

### License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
