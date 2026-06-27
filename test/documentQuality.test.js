import test from "node:test";
import assert from "node:assert/strict";
import { analyzeDocumentQuality } from "../src/lib/documentQuality.js";

test("scores structured markdown higher than sparse notes", () => {
  const sparse = analyzeDocumentQuality("quick note");
  const structured = analyzeDocumentQuality(`
# Project

## Impact
- Reduced latency by 42%
- Served 200 users
- Linked release notes

[Demo](https://example.com)
`);

  assert.ok(structured.score > sparse.score);
  assert.equal(structured.metrics >= 2, true);
  assert.equal(structured.links, 1);
});

test("detects tables and task lists", () => {
  const stats = analyzeDocumentQuality(`
## Launch checklist

| Area | Owner |
| --- | --- |
| API | Platform |

- [x] Add smoke tests
- [ ] Review rollout notes
`);

  assert.equal(stats.tables >= 3, true);
  assert.equal(stats.tasks, 2);
  assert.ok(stats.strengths.some((item) => item.includes("task")));
});
