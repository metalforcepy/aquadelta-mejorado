# media-assets Specification

## Purpose

Pre-build asset pipeline: video transcoding, image optimization, font loading declarations, logo variant mapping, and BARRIO 3 naming resolution.

## Requirements

### Requirement: Video Transcode Pipeline

The 229MB source file `Renders Aquadelta/Renders animados/renders_animados_aquadelta.MOV` MUST be transcoded before the first production build into two output files placed in `public/video/`:
- MP4 (H.264/AAC, 720p, ≤15MB target)
- WebM (VP9/Opus, 720p, ≤8MB target)

A poster image (first frame, 1280×720 WebP) MUST also be generated. The source .MOV SHALL remain untouched and read-only.

#### Scenario: Transcode produces expected outputs

- GIVEN ffmpeg is installed and the .MOV source is at the expected path
- WHEN the transcode script runs
- THEN `public/video/hero.mp4` exists and is ≤15MB
- AND `public/video/hero.webm` exists and is ≤8MB
- AND `public/video/hero-poster.webp` exists at 720p

#### Scenario: Build proceeds without transcode outputs

- GIVEN `public/video/hero.mp4` does NOT exist
- WHEN `npm run build` runs
- THEN the build SHALL still succeed (video path resolves at runtime, fallback to slideshow)

### Requirement: Image Optimization for Responsive Delivery

All 41 render images (from `Renders Aquadelta/` subdirectories and `planta-general/`) MUST be processed into WebP format at three resolution widths: 400w, 800w, 1200w. Output files SHALL be placed in `public/images/` preserving the source folder structure. Each `<img>` tag in production MUST include `srcset` and `sizes` attributes for responsive delivery. Source files remain read-only.

#### Scenario: Responsive image delivers correct resolution

- GIVEN a barrio card image optimized to 400w/800w/1200w WebP variants
- WHEN the page loads on a 375px-wide mobile viewport with 2x DPR (750 CSS px effective)
- THEN the browser selects the 800w WebP variant from `srcset`
- AND the total image payload for the section is under 2MB

### Requirement: Font Loading with @font-face

CSS MUST declare `@font-face` rules for VANITAS (Bold, ExtraBold weights), Lota Grotesque (Regular, SemiBold weights), and Silver South Script (Regular). All rules MUST use `font-display: swap` and reference exact filenames from `Tipografias/` subdirectories (spaces in filenames quoted). Source font files (.otf/.ttf) remain untouched.

#### Scenario: Fonts load without blocking render

- GIVEN a slow network connection (3G)
- WHEN the page loads
- THEN text renders immediately in a fallback system font
- AND custom fonts swap in once downloaded without layout shift (FOUT, not FOIT)

### Requirement: BARRIO 3 Folder/Name Resolution

Image `src` attributes for barrio cards MUST reference the `Renders Aquadelta/Barrio 4/` directory path exactly (matching filesystem reality). Visible labels in the UI MUST display "Barrio 3" (matching `guia-desarrollo.md` and the `BARRIO 3 -` file prefix convention). This resolution SHALL be documented in a code comment at the barrio card component.

#### Scenario: Image loads from correct folder path

- GIVEN the Barrios section renders
- WHEN inspecting the Barrio 3 card's `<img src>`
- THEN the path contains `Renders Aquadelta/Barrio 4/BARRIO 3 - PERSPECTIVA 1.webp`
- AND the visible label reads "Barrio 3"

### Requirement: Logo Variant Mapping

Logos MUST be referenced from `logos/` with correct variant per context: white logos (`Logo AD Blanco.png`, `logo-blanco-horizontal.png`) for azul-background sections; color logos (`Raices_Aquadelta-01.png`, `Raices_Aquadelta-04.png`) for tiza-background sections. `isologo-aquadelta.png` MUST be set as the `<link rel="icon">` favicon.

#### Scenario: Favicon is set

- GIVEN the page loads in any browser
- WHEN inspecting `<head>`
- THEN a `<link rel="icon" href="logos/isologo-aquadelta.png">` element is present
