# cv-minify - Lite Markdown Workspace

[简体中文](#简体中文) | [English](#english)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Build-Vite-6-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React-19-61DAFB?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

cv-minify is a modern, lightweight Markdown live workspace built for fast local authoring, real-time preview, and pixel-perfect A4 export. It is designed for narrow laptops, multi-monitor workflows, and anyone who needs a smooth Markdown productivity tool without heavyweight dependencies.

> Resume and interview brief: [PORTFOLIO.md](PORTFOLIO.md)

---

## 简体中文

### 项目愿景

cv-minify 不是单一用途的简历工具，而是一套面向创作者、工程师、产品团队和写作者的轻量 Markdown 实时工作站。

它的目标是：

- 本地启动、低依赖，不依赖大型 Markdown 运行时。
- 浏览器端快速响应，保证编辑与预览不卡顿。
- 适配窄屏笔记本、外接屏和双屏展示工作流。
- 提供接近 A4 打印的预览与 PDF 导出体验。

### 为什么选择 cv-minify

- **轻量安全**：基于纯 JavaScript 的微型 Markdown 渲染逻辑，先转义 HTML 再渲染。
- **实时反馈**：输入内容即时预览，适合高频写作和简历微调。
- **双屏优化**：支持编辑、双栏、预览模式，并可把预览投射到独立窗口。
- **打印友好**：内置 `@media print` 样式，导出 PDF 时自动隐藏编辑界面。
- **自动恢复**：通过 `localStorage` 保存草稿，避免刷新或断电导致内容丢失。
- **AI 润色降级**：没有 `/api/ai-polish` 后端时，仍能使用本地规则生成优化建议。

### 快速开始

```bash
git clone https://github.com/rrg1225/cv-minify.git
cd cv-minify
npm install
npm run dev
```

### 构建与预览

```bash
npm run build
npm run preview
```

### PDF 导出建议

1. 在浏览器中按 `Ctrl + P`。
2. 选择“保存为 PDF”或系统 PDF 打印机。
3. 开启“背景图形/打印背景”。
4. 纸张设置为 A4。
5. 边距设置为“无”或“最小”。

### 项目结构

```text
cv-minify/
|-- index.html
|-- package.json
|-- README.md
|-- tailwind.config.js
|-- vite.config.js
`-- src/
    |-- index.css
    |-- main.jsx
    `-- components/
        `-- ResumeEditor.jsx
```

---

## English

### Vision

cv-minify is a universal, ultra-lightweight Markdown live workspace for creators, engineers, product teams, and writers.

It provides:

- local-first startup without a heavyweight Markdown stack.
- responsive live editing and preview.
- narrow-laptop and dual-screen friendly workflows.
- print-focused A4 preview and PDF export.

### Highlights

- **Lightweight and secure**: handcrafted JavaScript rendering with HTML escaping.
- **Real-time feedback**: immediate preview updates for fast authoring.
- **Dual-screen optimized**: edit, split, preview, and cast-to-window modes.
- **Print-ready output**: print styles hide editor chrome and keep A4 output clean.
- **Auto-save**: localStorage persistence keeps drafts safe across refreshes.
- **AI polish fallback**: local rule-based suggestions keep the feature useful without a backend.

### Quick Start

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Portfolio Value

This project demonstrates a polished local-first productivity UI, safe Markdown rendering, print-aware CSS, browser storage, and multi-window synchronization in a compact React application.

## Repository Topics

`markdown`, `react`, `vite`, `tailwindcss`, `editor`, `pdf-export`, `local-first`
