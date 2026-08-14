# Tasks: Build Aquadelta Landing Page

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1,300 (24 new files, 0 modified) |
| 400-line budget risk | **High** — 3.25× threshold |
| Chained PRs recommended | **Yes** |
| Suggested split | PR 1 → PR 2 → PR 3 → PR 4 |
| Delivery strategy | stacked-to-main |
| Chain strategy | stacked-to-main |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: stacked-to-main
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold + asset pipeline + shared components + data + Nav/Footer | PR 1 (~450 lines) | Foundation: all section dependencies. Feature branch. |
| 2 | Hero + Project + Costanera sections | PR 2 (~250 lines) | Base: feature branch. First user-visible content. |
| 3 | Barrios + Paseo Central + Deportes + Comercial sections | PR 3 (~300 lines) | Base: PR 2 branch. Middle 4 sections. |
| 4 | Gallery + App assembly + polish | PR 4 (~300 lines) | Base: PR 3 branch. Final integration, index.html, main.tsx. |

---

## Phase 1: Project Scaffold

- [x] T001 Create `package.json` with react, react-dom, framer-motion, swiper, lucide-react, vite, tailwindcss, typescript dependencies
- [x] T002 Create `vite.config.ts` — React plugin, `@` alias to `src/`, build target es2020
- [x] T003 Create `src/index.css` — Tailwind 4 CSS-first theme: custom colors (`azul:#005587`, `tiza:#D9D9D6`, `turquesa:#88DBDF`, `naranja:#FF7F32`), font families, breakpoints at 768/1024 (Tailwind 4 uses CSS @theme, not JS config)
- [x] T004 Create `src/styles/fonts.css` — `@font-face` for VANITAS Bold+ExtraBold, Lota Grotesque Regular+SemiBold, Silver South Script Regular with `font-display:swap`, referencing `public/Tipografias/`
- [x] T005 Run `npm install` → verify buildable scaffold (`npm run build` exits zero)

## Phase 2: Asset Pipeline

- [x] T006 Create `scripts/transcode-video.sh` — ffmpeg: MOV→MP4 (H.264 720p ≤15MB) + WebM (VP9 720p ≤8MB) + poster frame (1280×720 WebP) → `public/video/`
- [x] T007 Create `scripts/optimize-images.mjs` — sharp: 41 renders → WebP 400w/800w/1200w → `public/images/` (preserves source folder structure)
- [x] T008 Symlink fonts from `Tipografias/` to `public/Tipografias/`. Run pre-build scripts. Verify: `public/video/hero.mp4` + `public/images/Costanera/` exist.

## Phase 3: Shared Components

- [x] T009 Create `src/components/shared/SectionWrapper.tsx` — Framer Motion `motion.section` with `useInView({once, margin:"-10%"})`, fade+translateY 30→0
- [x] T010 Create `src/components/shared/LazyImage.tsx` — `<img loading=lazy>` with `srcset`, `sizes`, alt. Props: `src`, `alt`, `srcset?`, `sizes?`, `className?`.
- [x] T011 Create `src/components/shared/VideoBackground.tsx` — `<video autoplay loop muted playsinline>` + `onError` slideshow fallback (Costanera 01/02, fade 6s). Props: `mp4`, `webm`, `poster`, `fallbackImages`, `overlay`.
- [x] T012 Create `src/components/shared/Carousel.tsx` — Swiper wrapper with Pagination+Autoplay (loop, 5s, dots, touch). Props: `slides`, `autoplay?`, `slidesPerView?`.
- [x] T013 Create `src/components/shared/BadgeCard.tsx` — hover scale 1.03, overlay intensify, respects `prefers-reduced-motion`. Props: `name`, `image`, `href`.
- [x] T014 Create `src/components/layout/Nav.tsx` — sticky, backdrop-blur, azul bg, height 72→56 on scroll>100px, desktop horizontal links, mobile hamburger (lucide `Menu`/`X`). Props: `items: {label, href}[]` + `logoSrc`.
- [x] T015 Create `src/components/layout/Footer.tsx` — azul solid, `logo-blanco-horizontal.png`, nav links, slogan "Redescubrí la vida sobre el río" in Silver South, copyright.

## Phase 4: Content Data

- [x] T016 Create `src/data/content.ts` — typed exports: `NAV_ITEMS`, `FOOTER_ITEMS`, `SECTIONS: Record<SectionId, SectionContent>`, `BARRIOS: BarrioCard[]`. All text verbatim from `guia-desarrollo.md` §6. `BarrioCard.image` uses `Renders Aquadelta/Barrio 4/` path with "Barrio 3" label (comment explaining mismatch).
- [x] T017 Create `src/types.ts` — `SectionId`, `SectionContent`, `ImageAsset`, `NavItem`, `BarrioCardData` types.

## Phase 5: Section Components

- [x] T018 Create `src/components/sections/HeroSection.tsx` — VideoBackground + centered logo (`Logo AD Blanco.png`) + H1 "AQUADELTA" (VANITAS Bold, clamp 2.5rem/5vw/5rem) + slogan + naranja CTA "Conocé el proyecto" → `#el-proyecto`.
- [x] T019 Create `src/components/sections/ProjectSection.tsx` — 2-col (text left, `PLANTA GENERAL_02` right, invert mobile). Title "EL PROYECTO", body, Silver South highlight. Background: tiza.
- [x] T020 Create `src/components/sections/CostaneraSection.tsx` — parallax hero (PERSPECTIVA 01), Carousel (2 slides: PERSPECTIVA 02 + PESPECTIVA), `Planta costanera.jpeg`. Background: azul.
- [x] T021 Create `src/components/sections/BarriosSection.tsx` — 3× BadgeCard grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`). Title "BARRIOS", body text. Background: tiza.
- [x] T022 Create `src/components/sections/PaseoCentralSection.tsx` — full-width `PASEO CENTRAL - PEATON 01`, accordion/tabs for CORTE 01/02. Background: turquesa 15% opacity over tiza.
- [x] T023 Create `src/components/sections/DeportesSection.tsx` — parallax hero (PERSPECTIVA 01), masonry grid (4 images), `PLANTA DEPORTES`. Background: azul.
- [x] T024 Create `src/components/sections/ComercialSection.tsx` — 2-col (image left, text right). PERSPECTIVA 01 + PEATON ESCUELA 01 with caption. Background: tiza.
- [x] T025 Create `src/components/sections/GallerySection.tsx` — video player (lazy-loaded when within 200px) + Carousel of 10 "Renders nuevos". Background: azul.

## Phase 6: App Assembly

- [x] T026 Create `src/App.tsx` — compose all sections in order wrapped in SectionWrapper + React.lazy/Suspense per section. PR 1 minimal: Nav + Footer + placeholder divs with section IDs for scroll. Full sections in later PRs.
- [x] T027 Create `src/main.tsx` — `createRoot` entry, import fonts.css + tailwind, render App.
- [x] T028 Create `index.html` — `<title>Aquadelta</title>`, meta viewport, `<link rel="icon" href="logos/isologo-aquadelta.png">`, `<div id="root">`.
- [x] T029 Verify: `npm run build` exits zero. Manual check: all 9 sections render, nav anchors scroll, carousels work, responsive breakpoints correct, video shows or falls back.
