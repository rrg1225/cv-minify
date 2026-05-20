# 📄 cv-minify (Lite Markdown Workspace)

> **一款为极简主义者打造的“零依赖”高性能 Markdown 实时工作站。** > 专为窄屏笔记本、外接双显设备优化，支持像素级 A4 PDF 导出与通用排版自适应。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## ✨ 为什么选择 cv-minify？ (Core Features)

### 🚀 1. 纯原生微型 Markdown 渲染引擎
告别体积臃肿、加载缓慢的第三方解析库（如 Marked, MDX）。本项目核心采用纯 JavaScript 正则表达式编写了一套**微秒级响应的轻量化文本解析引擎**。它在保持极致轻量的同时，天然具备防范 XSS 注入的能力，对笔记本设备的内存和续航极其友好。

### 🖥️ 2. 全场景排版自适应
不仅是**高颜值简历**的排版利器，更是**项目 README、学术论文、日常笔记**的通用编写工作台：
* **窄屏分栏：** 针对笔记本屏幕优化，支持“纯编辑 / 智能双栏 / 全屏预览”一键切换，并支持滑块拖拽自由调节分栏占比。
* **跨屏独立投射：** 外接显示器开发者的福音。点击“投射外接屏幕”利用跨窗口 DOM 同步技术，在一块屏幕全屏沉浸敲码，在第二块屏幕实时查看渲染效果。

### 🖨️ 3. 像素级 A4 打印优化 (媒体查询驱动)
集成标准的 CSS `@media print` 打印规范。当您按下 `Ctrl + P` 导出时，系统会自动重置页边距、隐藏所有边框与操作按钮，完美锁定标准 A4 纸张尺寸（$210\text{mm} \times 297\text{mm}$），绝不发生段落跨页截断、排版错位。

### 💾 4. 本地云工作台与自动保存
* 支持一键导入本地电脑上的 `.md` 文件进行编辑。
* 内置 `localStorage` 自动同步。即使误刷新浏览器、设备断电，您的字句也绝对不会丢失。

---

## 🛠️ 快速开始 (Quick Start)

### 1. 克隆并进入项目
```bash
git clone [https://github.com/rrg1225/cv-minify.git](https://github.com/rrg1225/cv-minify.git)
cd cv-minify