export function analyzeDocumentQuality(markdown = "") {
  const text = String(markdown);
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const headings = (text.match(/^#{1,6}\s+/gm) || []).length;
  const bullets = (text.match(/^\s*[-*]\s+/gm) || []).length;
  const metrics = (text.match(/\b\d+(?:\.\d+)?%|\b\d+\s*(?:ms|s|hours|days|users|requests|stars)\b/gi) || []).length;

  const warnings = [];
  if (headings < 2) warnings.push("Add clear section headings.");
  if (bullets < 3) warnings.push("Use bullets for scan-friendly experience entries.");
  if (metrics === 0) warnings.push("Add measurable impact such as percentages, latency, scale, or users.");
  if (text.length > 6000) warnings.push("Consider splitting a long document before exporting.");

  return {
    chars: text.length,
    words,
    headings,
    bullets,
    metrics,
    score: Math.max(0, 100 - warnings.length * 18),
    warnings
  };
}
