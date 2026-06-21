import assert from "node:assert/strict";
import test from "node:test";
import { analyzeDocumentQuality } from "../src/lib/documentQuality.js";

test("scores structured resumes higher than sparse text", () => {
  const sparse = analyzeDocumentQuality("Short bio only.");
  const structured = analyzeDocumentQuality(`# Name

## Projects
* Reduced latency by 42%
* Served 1000 users
* Improved build time by 300 ms
`);

  assert.ok(structured.score > sparse.score);
  assert.equal(structured.headings, 2);
  assert.equal(structured.bullets, 3);
  assert.ok(structured.metrics >= 2);
});
