# Enterprise Architecture

## Enterprise Positioning

cv-minify is a local-first authoring workspace. In an enterprise environment it can become a lightweight internal documentation editor for runbooks, project notes, interview briefs, and print-ready artifacts without forcing every workflow into a heavy CMS.

## Architecture Boundaries

- **Editor shell**: React UI for Markdown authoring, preview, templates, and export actions.
- **Rendering layer**: lightweight Markdown transformation with HTML escaping.
- **Persistence layer**: browser localStorage for local-first recovery.
- **Print layer**: print-specific CSS for A4/PDF output.
- **Integration boundary**: optional `/api/ai-polish` endpoint for future AI writing assistance.

## Enterprise Extension Path

1. Replace localStorage-only persistence with workspace-backed document storage.
2. Add version history, draft ownership, and review workflows.
3. Support SSO and workspace permissions for team use.
4. Add Markdown AST parsing when advanced syntax and plugins become requirements.
5. Add export workers for PDF generation, document templates, and accessibility checks.

## SLO and Observability

- **Availability target**: local-first editing should remain usable without network access.
- **Performance target**: keystroke-to-preview response under 50ms for ordinary documents.
- **Data durability target**: autosave must avoid losing local drafts on refresh.
- **Core dashboards for hosted mode**: save failures, export failures, AI polish latency, document size distribution.

## Security Model

- Escape HTML before rendering Markdown preview.
- Treat imported local files as untrusted content.
- Keep AI polish optional so sensitive documents are not sent to a model by default.
- Future hosted mode should add tenant isolation and document-level permissions.

## Interview-Level Design Rationale

The main tradeoff is local-first simplicity versus collaborative features. The current architecture optimizes reliability and speed for individual workflows, while the extension path shows how to evolve toward enterprise collaboration.
