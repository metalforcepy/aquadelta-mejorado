# Proposal: Build Aquadelta Landing Page

## Intent

Build the complete Aquadelta real-estate landing page — a one-page, 9-section scroll site showcasing the riverfront development. Greenfield: zero source files exist. All assets (86 fonts, 8 logos, 41 renders) and content are provided in `guia-desarrollo.md` (392-line full specification). User has selected React 18+/Vite/Tailwind 4 over the vanilla approach explored earlier.

## Scope

### In Scope
- React 18+ app bootstrapped with Vite + Tailwind CSS 4
- 9 sections: Hero (video/slideshow fallback), El Proyecto, La Costanera, Barrios, Paseo Central, Deportes, Zona Comercial, Galería/Video, Footer
- Framer Motion: fade-in + translateY on scroll, parallax, hover scale (1.03)
- Swiper.js React: 3 carousels (Costanera, Deportes, Galería) — autoplay 5s, dots, touch-swipe
- Sticky nav with backdrop-blur, desktop horizontal links, mobile hamburger
- Responsive breakpoints: <768px, 768–1024px, >1024px
- Asset pre-processing: transcode 229MB `.MOV` to MP4/WebM (~20MB), optimize 41 renders to WebP + responsive srcset

### Out of Scope
- Backend, CMS, form handling, authentication
- Map, brochure PDF, analytics, SEO beyond basic `<title>`/`<meta>`
- Numeric data badges (no data provided; placeholder only)

## Capabilities

### New Capabilities
- `landing-page`: Full 9-section one-page scroll site — React components per section, Tailwind theme (4 colors, 3 fonts), responsive grid/layout, sticky nav with smooth-scroll anchors
- `visual-interactions`: Framer Motion viewport animations (fade + translateY), parallax on Costanera/Deportes hero images, Swiper.js carousels with lazy-loaded slides, hover effects on barrio cards
- `media-assets`: ffmpeg video transcode pipeline (MOV→MP4/WebM + poster), WebP image optimization with `srcset`/`sizes`, `@font-face` loading with `font-display: swap`

### Modified Capabilities
None — greenfield.

## Approach

**Stack**: React 18+ components (one per section), Vite bundler with `npm run build` verification, Tailwind CSS 4 with custom theme extending the 4-color palette (`#005587`, `#D9D9D6`, `#88DBDF`, `#FF7F32`) and 3 font families. Framer Motion `useInView`/`motion.div` for scroll animations. Swiper.js React components. Lucide React for inline SVG icons. All text content sourced verbatim from `guia-desarrollo.md`.

**Pre-build pipeline**: ffmpeg transcode → `public/video/`. sharp/cwebp in a one-time script → `public/images/`. Source assets in `logos/`, `Tipografias/`, `Renders Aquadelta/` remain read-only.

**BARRIO 3 naming**: use "Barrio 3" as visible label (matching file prefix and guide), reference `Barrio 4/` folder path exactly in `src` attributes.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/` | New | 9 section components + Nav, Footer, layout wrappers |
| `src/hooks/` | New | `useInView`, `useScrollProgress` custom hooks |
| `public/video/` | New | Transcoded MP4/WebM + poster image |
| `public/images/` | New | Optimized WebP renders with multiple resolutions |
| `package.json` | New | react, react-dom, framer-motion, swiper, lucide-react |
| `vite.config.ts` | New | React plugin, path aliases, build config |
| `tailwind.config.ts` | New | Custom colors, fonts, breakpoints (768, 1024) |
| `logos/`, `Tipografias/`, `Renders Aquadelta/` | Referenced | Read-only — never modified |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| 229MB .MOV tanks build and page load | High | ffmpeg → 720p MP4/WebM (~20MB) before first build |
| Raw renders total >300MB — 40MB masterplan alone | High | WebP conversion + lazy loading + `srcset`; target <2MB per image |
| BARRIO 3 folder/file name mismatch (Barrio 4/ folder, BARRIO 3 prefix) | Medium | Use exact folder path, visible label "Barrio 3" per guide |
| Tailwind CSS 4 breaking changes from v3 | Low | Pin to v4, reference official docs |
| Framer Motion bundle size impact | Low | Tree-shake: only import `motion`, `useInView`, `useScroll` |

## Rollback Plan

Delete `src/`, `public/video/`, `public/images/`, `package.json`, `vite.config.ts`, `tailwind.config.ts`, `node_modules/`. All source assets (logos, fonts, renders) are read-only and untouched. Repository returns to blank slate instantly.

## Dependencies

- Node.js ≥18, npm ≥9
- ffmpeg (system tool for video transcode)
- sharp or cwebp (for image optimization script)

## Success Criteria

- [ ] `npm run build` exits zero with no errors
- [ ] All 9 sections render content matching `guia-desarrollo.md` verbatim
- [ ] Nav anchor links scroll to correct section (`scroll-behavior: smooth`)
- [ ] Mobile hamburger opens/closes nav menu correctly
- [ ] 3 carousels display with dots, autoplay, and touch-swipe
- [ ] Video section plays transcoded MP4/WebM with poster fallback
- [ ] Scroll animations trigger on viewport entry (fade-in + translateY 30px→0)
- [ ] Hero CTA "Conocé el proyecto" scrolls to `#el-proyecto`
- [ ] Responsive: desktop 3-col grids collapse to 1-col on mobile
