# Design: Build Aquadelta Landing Page

## Technical Approach

React 18+ SPA with Vite + Tailwind CSS 4. Nine-section single-page scroll. Framer Motion viewport animations, Swiper.js carousels, static content (no API). Pre-build scripts transcode video and optimize 41 renders. Verified by `npm run build` exit zero.

## Architecture Decisions

| Decision | Choice | Alternative | Rationale |
|----------|--------|-------------|-----------|
| **Component split** | Sections = containers (layout + composition); shared = presentational (props-only) | Monolithic section components with inline duplication | Reuse: 9 sections share scroll-animation wrapping, lazy images, carousels. Container/presentational prevents 9 copies of identical logic |
| **Content source** | `src/data/content.ts` — typed constants, tree-shaken import | JSON fetch at runtime | No API exists. Static import = zero runtime cost + full type safety |
| **Scroll animation** | Framer Motion `useInView({ once: true })` + variants | Custom IntersectionObserver | Already using Framer Motion for hover effects. Built-in `prefers-reduced-motion`, cleanup, no extra bundle |
| **Font loading** | `@font-face` in `src/styles/fonts.css` referencing `public/Tipografias/` | Import as ES modules via Vite | Source fonts stay read-only. Vite copies `public/` to build root unchanged. Pre-build script symlinks needed font files |
| **Image optimization** | Pre-build `scripts/optimize-images.js` (sharp) → WebP 400w/800w/1200w | Vite imagemin plugin at build-time | One-time processing avoids slowing every build; outputs stored in `public/images/` |
| **Code splitting** | `React.lazy()` per section + `<Suspense>` | Single bundle | 41 renders + video = large below-fold payload. Lazy sections reduce initial JS |

## Component Tree

```
App
├── Nav                 (sticky, backdrop-blur, height 72→56px on scroll >100px)
├── HeroSection         (VideoBackground: loop + overlay + slideshow fallback)
├── ProjectSection      (2-col: text + PLANTA GENERAL_02)
├── CostaneraSection    (parallax hero + Carousel[2])
├── BarriosSection      (3× BadgeCard grid)
├── PaseoCentralSection (full-width image + accordion tabs for CORTE 01/02)
├── DeportesSection     (parallax hero + Carousel[4] masonry)
├── ComercialSection    (2-col: image + text)
├── GallerySection      (video player + Carousel[~10])
└── Footer              (logo, links, slogan)
```

**Shared**: `SectionWrapper` (motion.section + useInView), `LazyImage` (srcset + loading=lazy), `VideoBackground` (video/fallback), `Carousel` (Swiper wrapper), `BadgeCard` (hover scale 1.03).

## Data Flow

```
content.ts (static import) → Section containers → Presentational components
```

`content.ts` exports: `NAV_ITEMS`, `SECTIONS: Record<SectionId, SectionContent>`, `BARRIOS: BarrioCard[]`.
`SectionContent`: `title`, `subtitle?`, `body`, `images: ImageAsset[]`, `carouselImages?: ImageAsset[]`.
`ImageAsset`: `src`, `alt`, `srcset?`, `sizes?`.

## File Structure

```
src/components/{layout,shared,sections}/  (16 .tsx files)
src/data/content.ts
src/styles/fonts.css     (@font-face for VANITAS Bold+ExtraBold, Lota Grotesque Regular+SemiBold, Silver South Script)
src/App.tsx, src/main.tsx
public/video/            (hero.mp4, hero.webm, hero-poster.webp)
public/images/           (optimized WebP, mirrored source folder structure)
scripts/transcode-video.sh, scripts/optimize-images.js
package.json, vite.config.ts, tailwind.config.ts, index.html
```

## Key Props

```ts
SectionWrapperProps  { id, background, children }
LazyImageProps       { src, alt, srcset?, sizes?, className? }
VideoBackgroundProps { mp4, webm, poster, fallbackImages[], overlay }
CarouselProps        { slides[], autoplay?, slidesPerView? }
BadgeCardProps       { name, image, href }
```

## Build Pipeline

1. **Pre-build** (`npm run prebuild`): ffmpeg MOV→MP4 (H.264 720p, ≤15MB) + WebM (VP9 720p, ≤8MB) + poster. Sharp processes 41 renders → WebP 400w/800w/1200w.
2. **Build** (`npm run build`): `vite build`. Succeeds even without `public/video/` (slideshow fallback at runtime).

## Animation Strategy

| Effect | Implementation |
|--------|---------------|
| Section reveal | `variants: { hidden: {o:0, y:30}, visible: {o:1, y:0, d:0.6} }` via `useInView({ once, margin:"-10%" })` |
| Parallax | `useScroll` → `useTransform` at 30% scroll rate on background y |
| Hover | `whileHover={{ scale: 1.03 }}` + overlay opacity, respects `prefers-reduced-motion` |
| Nav shrink | `useTransform(scrollY, [0,100], [72,56])` — height transition 300ms |
| Carousels | Swiper autoplay 5s, loop, dots, touch-swipe |

## Responsive

Tailwind 4 breakpoints: `sm` (768px), `lg` (1024px). Mobile-first.
- Grids: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Nav: `hidden lg:flex` (desktop) / `lg:hidden` hamburger (mobile)
- Hero title: `clamp(2.5rem, 5vw, 5rem)`
- Carousels: `slidesPerView={1}` mobile → `3` desktop
- Video: `w-full lg:w-[70%]`

## Performance

- `LazyImage`: `loading="lazy"` + `srcset`/`sizes` — browser defers below-fold
- `VideoBackground`: only mounts `<video>` when section is in viewport (±200px)
- Fonts: `font-display: swap` on all `@font-face` — FOUT not FOIT
- Code split: `React.lazy()` per section, Swiper tree-shaken (Pagination + Autoplay only)

## File Changes (24 new, 0 modified / deleted)

**Config (4)**: `package.json`, `vite.config.ts`, `tailwind.config.ts`, `index.html`
**Core (2)**: `src/main.tsx`, `src/App.tsx`
**Data/Styles (2)**: `src/data/content.ts`, `src/styles/fonts.css`
**Layout (3)**: `Nav.tsx`, `Footer.tsx`, `SectionWrapper.tsx`
**Shared (5)**: `LazyImage.tsx`, `VideoBackground.tsx`, `Carousel.tsx`, `BadgeCard.tsx`
**Sections (8)**: `HeroSection.tsx` through `GallerySection.tsx`
**Scripts (2)**: `transcode-video.sh`, `optimize-images.js`
**Assets**: `public/video/*`, `public/images/*` (pre-build outputs), `public/Tipografias/` (symlink)

## Testing

Build verification: `npm run build` exits zero. Manual browser check: all 9 sections render, nav anchors scroll, 3 carousels work, responsive breaks correctly, video shows or falls back. No unit/e2e framework per `config.yaml`.

## Open Questions

None — all decisions resolved.
