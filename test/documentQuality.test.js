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
