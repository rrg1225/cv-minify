# cv-minify

[![CI](https://github.com/rrg1225/cv-minify/actions/workflows/ci.yml/badge.svg)](https://github.com/rrg1225/cv-minify/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Markdown](https://img.shields.io/badge/Markdown-Workspace-111827?logo=markdown)

cv-minify is a lightweight Markdown workspace for local writing, live preview, document quality scoring, and A4/PDF-friendly output. It is suitable for resumes, project briefs, technical notes, and portfolio documents.

> Resume and interview brief: [PORTFOLIO.md](PORTFOLIO.md)
> Enterprise architecture: [docs/ENTERPRISE_ARCHITECTURE.md](docs/ENTERPRISE_ARCHITECTURE.md)

## Features

- Local-first Markdown editing with instant preview.
- Edit, split, and preview-only modes.
- A4-friendly print styles for PDF export.
- Autosave with `localStorage`.
- Independent preview window for second-screen workflows.
- Document quality analysis for headings, bullets, metrics, links, code blocks, and reading time.
- Local fallback suggestions when `/api/ai-polish` is unavailable.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

```bash
npm test
npm run build
npm run preview
```

## Architecture

```text
React editor
  -> Markdown parser
  -> HTML preview
  -> document quality analyzer
  -> print/PDF workflow
```

Key files:

| Path | Purpose |
| --- | --- |
| `src/components/ResumeEditor.jsx` | Main workspace UI |
| `src/lib/documentQuality.js` | Document scoring and warnings |
| `src/index.css` | Global and print styles |
| `vite.config.js` | Vite configuration |

## Export Tips

1. Use preview mode to inspect page breaks.
2. Press `Ctrl + P`.
3. Choose "Save as PDF".
4. Enable background graphics.
5. Use A4 paper and minimal margins.

## Quality Gates

- `npm test` covers document-quality scoring behavior.
- `npm run build` verifies the production Vite bundle.
- Print styles are kept in source control so PDF output remains reproducible.

## Roadmap

- Add import/export presets for resume, design doc, and incident review formats.
- Add optional local-only AI polishing adapters with provider isolation.
- Add visual regression checks for A4 print layout.

## License

MIT

## Enterprise Readiness

This repository now includes contribution guidelines, a security policy, operational runbook notes, PR review gates, and automated readiness checks. See [docs/ENTERPRISE_READINESS.md](docs/ENTERPRISE_READINESS.md) and [docs/OPERATIONS.md](docs/OPERATIONS.md).
