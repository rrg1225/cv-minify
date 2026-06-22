# cv-minify - Lite Markdown Workspace

[简体中文](#简体中文) | [English](#english)

cv-minify is a lightweight Markdown live workspace for local authoring, real-time preview, document quality checks, and A4/PDF-friendly output.

> Resume and interview brief: [PORTFOLIO.md](PORTFOLIO.md)
> Enterprise architecture: [docs/ENTERPRISE_ARCHITECTURE.md](docs/ENTERPRISE_ARCHITECTURE.md)

---

## 简体中文

### 项目亮点

- **本地优先 Markdown 工作台**：无需后端即可编辑、预览、保存和导出。
- **实时预览**：编辑区和预览区同步更新，支持编辑、分屏、预览模式。
- **A4/PDF 友好**：内置打印样式，适合简历、作品集、技术文档导出。
- **自动恢复**：通过 `localStorage` 保存草稿，降低刷新或误关页面带来的损失。
- **文档质量分析**：统计字数、标题、列表、量化指标、链接、代码块和阅读时间，并输出改进建议。
- **AI 降级策略**：如果 `/api/ai-polish` 不可用，会使用本地规则生成优化建议。
- **CI 验证**：GitHub Actions 会运行 `npm test` 和 `npm run build`。

### 快速开始

```bash
npm install
npm run dev
```

### 常用命令

```bash
npm test
npm run build
npm run preview
```

### 项目结构

```text
cv-minify/
|-- src/components/ResumeEditor.jsx
|-- src/lib/documentQuality.js
|-- test/documentQuality.test.js
|-- vite.config.js
`-- package.json
```

---

## English

### Highlights

- **Local-first Markdown workspace** with no backend requirement.
- **Live preview** for edit, split, and preview workflows.
- **A4/PDF-friendly output** through print-focused styles.
- **Autosave recovery** via `localStorage`.
- **Document quality scoring** for headings, bullets, metrics, links, code blocks, and reading time.
- **Graceful AI fallback** when `/api/ai-polish` is unavailable.
- **CI coverage** for tests and production build.

### Scripts

```bash
npm run dev
npm test
npm run build
npm run preview
```

### Repository Topics

`markdown`, `react`, `vite`, `tailwindcss`, `pdf`, `resume`
