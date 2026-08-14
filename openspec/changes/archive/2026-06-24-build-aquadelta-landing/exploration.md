# Exploration: build-aquadelta-landing

> **Date**: 2026-06-24 | **Phase**: Explore | **Artifact store**: OpenSpec

## Executive Summary

Greenfield static landing page. Zero source files exist. All 86 font files (8 VANITAS + 14 Lota Grotesque + 42 Alt variants + 2 Silver South), 8 logos, 1 masterplan, and 41 render files (39 images + 1 video + 1 additional) are confirmed present. Total project weight: **553MB**, of which **229MB is a single .MOV file** that MUST be transcoded before production. No build system, no tests — pure vanilla HTML/CSS/JS. Ready for proposal.

---

## Current State

- **No source files exist** — `index.html`, `css/`, `js/` are absent. Pure greenfield.
- **`guia-desarrollo.md`** (392 lines) is the complete development specification: color palette (4 colors), typography (3 families), 9-section structure, animation specs, responsive breakpoints, and CSS starter code.
- **`openspec/config.yaml`** is initialized with schema `spec-driven`, testing disabled (`strict_tdd: false`), manual verification only.
- **`openspec/changes/archive/`** is empty. This is the first change.
- **`openspec/specs/`** is empty. No main specs to merge against.

---

## Asset Inventory

### Logos (`logos/`) — 8 files ✅

| File | Use |
|------|-----|
| `Logo AD Blanco.png` | Hero, footer, dark sections |
| `logo-blanco-horizontal.png` | Nav sticky, footer |
| `Raices_Aquadelta-01.png` | Light backgrounds |
| `Raices_Aquadelta-02.png` | Alt variant |
| `Raices_Aquadelta-03.png` | Alt variant |
| `Raices_Aquadelta-04.png` | Light sections |
| `Raices_Aquadelta-05.png` | General use |
| `isologo-aquadelta.png` | Favicon |

### Planta General (`planta-general/`) — 1 file ✅

| File | Use | Size |
|------|-----|------|
| `PLANTA GENERAL_02.png` | Section 2 "El Proyecto" | 40MB |

### Tipografías (`Tipografias/`) — 66 font files ✅

| Family | Files | Weights |
|--------|-------|---------|
| **VANITAS** | 8 .otf | Regular, Italic, Bold, BoldIt, Black, BlackIt, ExtraBold, ExtraBoldIt |
| **Lota Grotesque** | 14 .otf | Thin→Black (7 weights × regular + italic) |
| **Lota Grotesque Alt 1** | 14 .otf | Same as above, decorative variant |
| **Lota Grotesque Alt 2** | 14 .otf | Same as above, decorative variant |
| **Lota Grotesque Alt 3** | 14 .otf | Same as above, decorative variant |
| **Silver South Script** | 1 .ttf | Script |
| **Silver South Script Alt** | 1 .ttf | Script Alt |

### Renders (`Renders Aquadelta/`) — 41 files total

| Section / Folder | Count | Key Files | Size |
|------------------|-------|-----------|------|
| **Costanera/** | 4 | `COSTANERA - PERSPECTIVA 01.jpeg`, `COSTANERA - PERSPECTIVA 02.jpeg`, `COSTANERA - PESPECTIVA.jpeg` ⚠️, `Planta costanera.jpeg` | 11MB |
| **Barrio 1/** | 4 | `Barrio 1 - Pespectiva 01.png`, `Barrio 1 - Peaton 01.jpeg`, `Barrio 1 - Detalle 01.jpeg`, `PLANTA BARRIO 1.png` | 62MB |
| **Barrio 2/** | 5 | `Barrio 2 - perspectiva 01.jpeg`, `Barrio 2 - perspectiva 02.jpeg`, `Barrio 2 - Peaton 01.png`, `DETALLE BARRIO 02.jpeg`, `BARRIO 2 - PLANTA BARRIO 2.png` | 39MB |
| **Barrio 4/** ⚠️ | 4 | `BARRIO 3 - PERSPECTIVA 1.jpeg`, `BARRIO 3 - PERSPECTIVA 02.jpeg`, `BARRIO 3 - PEATON 01.jpeg`, `PLANTA BARRIO 03.png` | 46MB |
| **Paseo Central/** | 3 | `PASEO CENTRAL - PEATON 01.jpeg`, `CORTE 01.jpeg`, `CORTE 02.png` | 29MB |
| **Deportes/** | 7 | `DEPORTES - PERSPECTIVA 01.jpeg`, `DEPORTES - PERSPECTIVA 02.jpeg`, `DEPORTES - peaton 01.jpeg`, `DEPORTES - peaton 02.jpeg`, `DEPORTES - Peaton 03.jpeg`, `Detalle  Deportes.png` ⚠️, `PLANTA DEPORTES.jpeg` | 67MB |
| **Comercial/** | 3 | `COMERCIO - PERSPECTIVA 01.jpeg`, `COMERCIO - PEATON ESCUELA 01.jpeg`, `PLANTA ZONA COMERCIAL.jpeg` | 18MB |
| **Renders animados/** | 1 | `renders_animados_aquadelta.MOV` 🔴 | **229MB** |
| **Renders nuevos Aquadelta/** | 10 | 2× ChatGPT Image + 8× WhatsApp Image (mixed .png/.jpeg) | 7MB |

---

## Affected Areas

All new files — greenfield:

- `index.html` — Single-page document with 9 `<section>` elements
- `css/main.css` — All styling: CSS variables, reset, typography, layout, animations, responsive
- `js/main.js` — IntersectionObserver, Swiper.js init, nav toggle, smooth scroll, video lazy load
- `Renders Aquadelta/` → referenced in `src` attributes (read-only, assets exist)
- `logos/` → referenced in `src` attributes (read-only, assets exist)
- `Tipografias/` → referenced in `@font-face` declarations (read-only, assets exist)
- `planta-general/` → referenced in `src` attributes (read-only, assets exist)

---

## Technical Decisions Required

### 1. Build Tool: Vanilla vs Vite

| Approach | Pros | Cons | Effort |
|----------|------|------|--------|
| **Vanilla HTML/CSS/JS** | Zero setup, matches guide exactly, no build step, instant refresh | No minification, no bundling, manual optimization | Low |
| **Vite** | Hot reload, bundling, minification, code splitting, optimized builds | Extra config, overkill for a one-page site, adds dependency | Medium |

**Recommendation**: Go vanilla. The guide explicitly says "HTML, CSS, JS vanilla o framework. Sin backend, sin CMS." Vite adds complexity with no real benefit for a single-page site with no JavaScript-heavy logic. Keep it simple.

### 2. Carousel Library: Swiper.js ✅

The guide recommends Swiper.js explicitly. It's the industry standard for touch-friendly carousels, supports lazy loading, and has a CDN. Lucide is implied for carousels but Swiper.js is explicitly recommended in section 7 (Animaciones). The config.yaml already lists it as a dependency.

**Decision**: Swiper.js via CDN. No npm needed. Load from `unpkg.com` or `cdn.jsdelivr.net`.

### 3. Icon Library: Lucide vs Phosphor

| Library | Pros | Cons |
|---------|------|------|
| **Lucide Icons** | Lightweight, clean stroke style, web component or SVG sprite | Smaller icon set |
| **Phosphor Icons** | Larger set, 6 styles per icon, well-documented | Heavier |

**Recommendation**: Lucide Icons via CDN (web component or SVG sprite). Matches the "línea fina, stroke-width 1.5-2px, turquesa/tiza" style described in the guide. Lighter payload. `lucide.dev` has a CDN integration.

### 4. .MOV Video File (229MB) 🔴 CRITICAL

This is the single biggest risk. 229MB is unacceptable for a web landing page. Options:

| Approach | Pros | Cons |
|----------|------|------|
| **Transcode to WebM/MP4** (H.264, ~15-20MB) | Small, streamable, supported everywhere | Requires `ffmpeg` or Handbrake, one-time preprocessing step |
| **Use as-is with lazy load** | No preprocessing | 229MB download will kill page performance, even lazy-loaded |
| **Replace with static hero image** | Zero video weight, simpler | Loses the video appeal the client likely wants |

**Recommendation**: Transcode to MP4 (H.264) + WebM (VP9) for `<video>` tag with fallback. Target: 720p, ~15-20MB. Generate a poster image from the first frame for the `poster` attribute. This MUST be done BEFORE or as part of implementation. Document the transcoding step clearly.

### 5. Font Loading Strategy

Fonts are .otf/.ttf in subdirectories with spaces in filenames (e.g., `Vanitas-Bold/Vanitas Bold.otf`). The `@font-face` paths in the guide are simplified. Real paths need URL encoding or we rename files.

**Recommendation**: Use `@font-face` with the exact relative paths. Spaces in filenames work fine in CSS `url()` declarations with quotes. No renaming needed. Use `font-display: swap` for all faces to avoid FOIT.

---

## Risks and Gaps

### 🔴 Critical
- **229MB .MOV file** — must be transcoded. Implementation blocked or severely degraded without this.
- **40MB PLANTA GENERAL_02.png** — needs compression for web (target 500KB-1MB). Currently 40MB for a single image is excessive.

### 🟡 Medium
- **BARRIO 3/Barrio 4 naming confusion**: The folder is named `Barrio 4` but files use `BARRIO 3 -` prefix. Guide table references "Barrio 3". **PENDING CLARIFICATION**: confirm with stakeholder which naming to use in code and labels. Meanwhile, use "Barrio 3" as the visible label (matching the file prefix and guide) and reference the `Barrio 4/` folder path exactly.
- **No image optimizations exist**: Renders are raw .png/.jpeg files, some very large (62MB in Barrio 1). No WebP versions, no responsive image sets. This WILL affect page load (Lighthouse score). Solution: implement lazy loading (`loading="lazy"`) on all images, and consider adding a post-build image optimization step.
- **"COSTANERA - PESPECTIVA.jpeg"** — filename has a typo (missing 'R'). Must use exact filename in code. Consider renaming to fix the typo.
- **"Detalle  Deportes.png"** — double space in filename. Must use exact filename in code, or rename.
- **No data/metrics provided**: Guide explicitly notes "Sin datos numéricos" (no hectares, lot counts). Section "El Proyecto" will have placeholder badges that can be filled later.

### 🟢 Low
- **No backend, no forms, no CMS** — scope is well-defined and constrained.
- **Mobile hamburger menu** — simple to implement, no complex state management needed.
- **Smoother scroll** — IntersectionObserver is native, no library needed.

---

## Key Content Notes from guia-desarrollo.md

- **9 sections**: Hero → El Proyecto → La Costanera → Barrios → Paseo Central → Deportes → Zona Comercial → Galería/Video → Footer
- **4 colors**: `#005587` (azul profundo, dominant), `#D9D9D6` (tiza, base), `#88DBDF` (turquesa, accents), `#FF7F32` (naranja, CTAs)
- **3 fonts**: VANITAS (titles, uppercase, 4-6px letter-spacing), Lota Grotesque (body, Regular/SemiBold), Silver South Script (emotional highlights, 3-6 words max)
- **Slogan**: "Redescubrí la vida sobre el río"
- **Hero**: Video loop with `rgba(0,85,135,0.5)` overlay, or slideshow fallback (Costanera renders)
- **Animations**: Fade-in + translateY on scroll (IntersectionObserver), hover scale 1.03 on barrio cards, Swiper.js carousels with autoplay 5s
- **Responsive**: 3 breakpoints (< 768px, 768-1024px, > 1024px). Mobile: hamburger nav, single column grids, smaller titles
- **No map location**, no brochure PDF, no numeric data — guide explicitly excludes these

---

## Approaches

### Approach A: Vanilla HTML/CSS/JS + Swiper.js CDN + Lucide CDN (RECOMMENDED)

Build `index.html`, `css/main.css`, `js/main.js` with zero build tools. Load Swiper.js and Lucide Icons from CDN. Transcode video to MP4/WebM. Optimize PLANTA GENERAL_02.png. Use native IntersectionObserver for scroll animations.

- **Pros**: Matches guide exactly, zero build complexity, fast to implement, no toolchain lock-in
- **Cons**: No automatic image optimization, manual minification if needed, larger initial payload (mitigated by CDN + lazy loading)
- **Effort**: Medium (9 sections, ~600-800 lines of CSS, ~200 lines of JS)

### Approach B: Vite + PostCSS + npm

Set up a Vite project with CSS processing. Load Swiper.js and Lucide via npm.

- **Pros**: Hot reload during dev, automatic bundling, PostCSS for autoprefixing, minification
- **Cons**: Overkill for static page, adds 50+ MB of node_modules, requires build step, contradicts guide's vanilla-first philosophy
- **Effort**: Medium-High (same implementation + build config)

---

## Recommendation

**Approach A — Vanilla HTML/CSS/JS**. The guide is explicit about the stack. The project is a single-page marketing site with moderate interactivity (carousels, scroll animations, hover effects). No JavaScript-heavy logic justifies a build system. CDN dependencies (Swiper.js, Lucide) keep the codebase clean.

**Pre-implementation prerequisites** (should be Task 0 or part of setup):
1. Transcode `renders_animados_aquadelta.MOV` to MP4/WebM (~20MB target)
2. Generate a poster image from the video for `<video poster="">`
3. Compress `PLANTA GENERAL_02.png` (40MB → ~1MB) for web
4. Resolve BARRIO 3 naming with stakeholder (or decide to use "Barrio 3" label + "Barrio 4" folder path)

---

## Ready for Proposal

**Yes**. The scope is clear, all assets are confirmed present, and the guide provides exhaustive specifications. The only blocking question is BARRIO 3 naming — the rest can proceed with documented assumptions.
