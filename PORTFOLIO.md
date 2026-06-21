# Portfolio Brief: cv-minify

## Resume Bullets

- Built a local-first Markdown workspace with live preview, print-aware A4 export, localStorage recovery, and dual-screen preview workflows.
- Implemented safe lightweight Markdown rendering with HTML escaping and no heavyweight parser dependency.
- Designed a focused productivity UI for writing resumes, docs, notes, and PDF-ready content.

## What This Proves

- Frontend product design for authoring tools.
- Browser storage, print CSS, and responsive editor layout.
- Security-minded Markdown rendering tradeoffs.

## Verification

```bash
npm ci
npm run build
```

## Interview Talking Points

- Why local-first tools need autosave and predictable export behavior.
- How print CSS differs from ordinary responsive styling.
- Where a handcrafted Markdown parser is appropriate and where a full parser would be better.
