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

test("reports links, code blocks, reading time, and strengths", () => {
  const result = analyzeDocumentQuality(`# Project

## Impact
* Reduced p95 latency by 120 ms for 5000 users
* Published the case study at [Portfolio](https://example.com)
* Added a regression test

\`\`\`js
console.log("verified")
\`\`\`
`);

  assert.equal(result.links, 1);
  assert.equal(result.codeBlocks, 1);
  assert.equal(result.readingMinutes, 1);
  assert.ok(result.strengths.includes("Includes outbound references."));
  assert.ok(result.strengths.includes("Includes technical examples."));
});
