export function analyzeDocumentQuality(markdown = "") {
  const text = String(markdown);
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const headings = (text.match(/^#{1,6}\s+/gm) || []).length;
  const bullets = (text.match(/^\s*[-*]\s+/gm) || []).length;
  const metrics = (text.match(/\b\d+(?:\.\d+)?%|\b\d+\s*(?:ms|s|hours|days|users|requests|stars)\b/gi) || []).length;
  const links = (text.match(/\[[^\]]+\]\([^)]+\)/g) || []).length;
  const codeBlocks = (text.match(/```[\s\S]*?```/g) || []).length;
  const tables = (text.match(/^\s*\|.+\|\s*$/gm) || []).length;
  const tasks = (text.match(/^\s*[-*]\s+\[[ xX]\]\s+/gm) || []).length;
  const readingMinutes = Math.max(1, Math.ceil(words / 220));

  const warnings = [];
  if (headings < 2) warnings.push("Add clear section headings.");
  if (bullets < 3) warnings.push("Use bullets for scan-friendly experience entries.");
  if (metrics === 0) warnings.push("Add measurable impact such as percentages, latency, scale, or users.");
  if (words > 80 && links === 0) warnings.push("Add at least one source, portfolio, or project link.");
  if (text.length > 6000) warnings.push("Consider splitting a long document before exporting.");

  const strengths = [];
  if (headings >= 2) strengths.push("Clear section structure.");
  if (bullets >= 3) strengths.push("Readable bullet formatting.");
  if (metrics > 0) strengths.push("Includes measurable impact.");
  if (links > 0) strengths.push("Includes outbound references.");
  if (codeBlocks > 0) strengths.push("Includes technical examples.");
  if (tables > 0) strengths.push("Uses tables for comparison or structured data.");
  if (tasks > 0) strengths.push("Includes actionable task tracking.");

  return {
    chars: text.length,
    words,
    headings,
    bullets,
    metrics,
    links,
    codeBlocks,
    tables,
    tasks,
    readingMinutes,
    score: Math.max(0, 100 - warnings.length * 18),
    warnings,
    strengths
  };
}
