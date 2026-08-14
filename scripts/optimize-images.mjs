#!/usr/bin/env node
// ──────────────────────────────────────────────────────────
// optimize-images.mjs — DISABLED
// Images are now served directly as originals via symlinks.
// No WebP optimization pipeline needed.
// Kept as a no-op so the prebuild script doesn't fail.
// ──────────────────────────────────────────────────────────

console.log("[optimize-images] Skipped — originals served directly (no WebP pipeline active).");
process.exit(0);
