# Aquadelta — Resumen del Proyecto

> **Landing page one-page** para desarrollo inmobiliario frente al río.
> **Slogan:** *Redescubrí la vida sobre el río*
> Generado el 24 de junio de 2026 con SDD (Spec-Driven Development).

---

## 🛠️ Stack Técnico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Runtime** | React | 18.3 |
| **Bundler** | Vite | 6.0 |
| **Lenguaje** | TypeScript | 5.7 |
| **CSS** | Tailwind CSS | 4.0 |
| **Animaciones** | Framer Motion | 11.15 |
| **Carruseles** | Swiper.js | 11.1 |
| **Íconos** | Lucide React | 0.468 |
| **Optimización** | Sharp | 0.33 (imágenes), ffmpeg (video) |

---

## 🎨 Diseño

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Azul profundo | `#005587` | Fondos oscuros, nav, footer, secciones impares |
| Tiza | `#D9D9D6` | Fondo base, secciones pares (NUNCA blanco puro) |
| Turquesa | `#88DBDF` | Acentos, botones, hover, badges |
| Naranja | `#FF7F32` | CTAs principales, urgencia |

### Tipografía
| Jerarquía | Fuente | Peso |
|-----------|--------|------|
| Títulos (H1, H2) | **VANITAS** | Bold / ExtraBold |
| Textos, botones | **Lota Grotesque** | Regular / SemiBold |
| Frases destacadas | **Silver South Script** | Regular |

### Breakpoints Responsive
- **Mobile**: < 768px (hamburguesa, 1 columna, títulos 2.5rem)
- **Tablet**: 768–1024px
- **Desktop**: > 1024px (nav horizontal, 3 columnas, títulos 3-5rem)

---

## 📁 Estructura del Proyecto

```
aquadelta/
├── index.html                          # Entry point, meta tags, favicon
├── package.json                        # Dependencias y scripts
├── tsconfig.json
├── vite.config.ts
├── RESUME.md                           # Este archivo
├── guia-desarrollo.md                  # Guía original de diseño (392 líneas)
│
├── src/
│   ├── main.tsx                        # createRoot, imports globales
│   ├── App.tsx                         # Composición de 9 secciones (React.lazy)
│   ├── index.css                       # Tema Tailwind 4 (@theme con colores, fuentes)
│   ├── types.ts                        # Tipos compartidos (SectionId, ImageAsset, etc.)
│   ├── vite-env.d.ts
│   │
│   ├── data/
│   │   └── content.ts                  # TODO el contenido: textos, imágenes, nav, footer
│   │
│   ├── styles/
│   │   └── fonts.css                   # @font-face: VANITAS, Lota Grotesque, Silver South
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx                 # Sticky nav, blur, hamburguesa mobile, scroll activo
│   │   │   └── Footer.tsx              # Logo, links, slogan, copyright
│   │   │
│   │   ├── shared/
│   │   │   ├── SectionWrapper.tsx      # Framer Motion fade-in + translateY al scroll
│   │   │   ├── LazyImage.tsx           # Imagen con lazy loading (archivos originales)
│   │   │   ├── VideoBackground.tsx     # Video loop con overlay + slideshow fallback
│   │   │   ├── Carousel.tsx            # Swiper.js: dots, autoplay, flechas opcionales
│   │   │   ├── BadgeCard.tsx           # Tarjeta con hover scale + overlay + "Ver más"
│   │   │   └── Lightbox.tsx            # Galería fullscreen (Swiper + flechas + Escape)
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.tsx         # Video bg, logo, AQUADELTA, slogan, CTA naranja
│   │       ├── ProjectSection.tsx      # 2 columnas: texto + masterplan
│   │       ├── CostaneraSection.tsx    # Parallax, carrusel 2 slides, plano
│   │       ├── BarriosSection.tsx      # Grid 3 tarjetas + lightbox galería
│   │       ├── PaseoCentralSection.tsx # Full-width, overlay turquesa, acordeón cortes
│   │       ├── DeportesSection.tsx     # Parallax, carrusel 4 slides, plano
│   │       ├── ComercialSection.tsx    # 2 columnas: imagen + texto + escuela
│   │       └── GallerySection.tsx      # Video HTML5 + carrusel renders nuevos
│   │
│   └── (24 archivos fuente en total)
│
├── public/
│   ├── Renders Aquadelta/ → ../Renders Aquadelta/    # Symlink a renders originales
│   ├── logos/ → ../logos/                            # Symlink a logos
│   ├── planta-general/ → ../planta-general/           # Symlink a masterplan
│   ├── Tipografias/ → ../Tipografias/                 # Symlink a fuentes
│   └── video/                                         # Video transcodificado (MP4 + WebM)
│
├── scripts/
│   ├── transcode-video.sh             # ffmpeg: MOV → MP4 (h264) + WebM (vp9) + poster
│   └── optimize-images.mjs            # Sharp: no-op (se usan originales vía symlinks)
│
├── openspec/                           # Artefactos SDD (OpenSpec)
│   └── changes/build-aquadelta-landing/
│       ├── proposal.md                 # Propuesta del cambio
│       ├── exploration.md              # Exploración inicial
│       ├── design.md                   # Diseño técnico y arquitectura
│       ├── tasks.md                    # 29 tareas de implementación
│       ├── verify-report.md            # Reporte de verificación final (PASS)
│       └── specs/
│           ├── landing-page/spec.md    # 6 requisitos, 7 escenarios
│           ├── visual-interactions/    # 7 requisitos, 8 escenarios
│           └── media-assets/spec.md    # 5 requisitos, 6 escenarios
│
├── Renders Aquadelta/                  # Renders originales (9 carpetas)
├── logos/                              # 8 logos (color, blanco, isologo)
├── Tipografias/                        # 66 archivos de fuente (3 familias)
└── planta-general/                     # Masterplan
```

---

## 📄 Las 9 Secciones

| # | ID | Sección | Fondo | Contenido clave |
|---|-----|---------|-------|-----------------|
| 1 | `hero` | Hero | Video + overlay azul | Logo blanco, "AQUADELTA", slogan, CTA naranja |
| 2 | `el-proyecto` | El Proyecto | Tiza | Texto + masterplan 2 columnas |
| 3 | `la-costanera` | La Costanera | Azul profundo | Parallax + carrusel + plano |
| 4 | `barrios` | Barrios | Tiza | 3 tarjetas con lightbox |
| 5 | `paseo-central` | Paseo Central | Tiza + turquesa 15% | Full-width + acordeón cortes |
| 6 | `deportes` | Deportes | Azul profundo | Parallax + carrusel + plano |
| 7 | `zona-comercial` | Zona Comercial | Tiza | Imagen + texto + escuela |
| 8 | `galeria` | Galería / Video | Azul profundo | Video HTML5 + carrusel renders |
| 9 | `footer` | Footer | Azul sólido | Logo, links, slogan, copyright |

---

## 🚀 Comandos

```bash
# Desarrollo
npm run dev          # Vite dev server con hot reload

# Build
npm run build        # tsc + vite build (prebuild: transcodifica video si no existe)

# Preview
npm run preview      # Servir build de producción localmente

# Solo transcodificar video
bash scripts/transcode-video.sh
```

---

## 🎬 Pipeline de Assets

### Video
- **Fuente**: `Renders Aquadelta/Renders animados/renders_animados_aquadelta.MOV` (229MB)
- **Salida**: MP4 h264 1080p (~15MB) + WebM vp9 (~11MB) en `public/video/`
- **Idempotente**: si los archivos ya existen, no re-transcodifica
- **Fallback**: si el video falla, el Hero hace slideshow de renders de Costanera

### Imágenes
- Se sirven los archivos **originales** (sin compresión) vía symlinks en `public/`
- Lazy loading nativo (`loading="lazy"`) en todas las imágenes
- Sin srcset — los originales tienen la máxima calidad

### Fuentes
- Symlink `public/Tipografias/` → `Tipografias/`
- `@font-face` con `font-display: swap` para evitar FOIT
- 3 familias: VANITAS, Lota Grotesque, Silver South Script

---

## 🧩 Decisiones Técnicas Clave

1. **React + Vite + Tailwind 4** — stack moderno, hot reload, CSS-first theme
2. **Framer Motion `useInView`** — animaciones scroll sin IntersectionObserver manual
3. **Swiper Navigation con selectores CSS** — más confiable que refs de React (refs son null durante init)
4. **`React.lazy()` por sección** — code splitting, bundle inicial mínimo
5. **Contenido estático en `content.ts`** — cero runtime cost, tipado completo
6. **Imágenes originales vía symlinks** — calidad máxima, sin pipeline de compresión
7. **`prefers-reduced-motion`** — respetado en todas las animaciones
8. **Barrio 3/Barrio 4** — carpeta fuente es `Barrio 4/`, label visible es "Barrio 3"

---

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Archivos fuente (src/) | 24 |
| Secciones | 9 |
| Componentes compartidos | 6 |
| Tareas implementadas | 29/29 |
| Spec scenarios compliant | 35/36 |
| Build time | ~2.4s |
| TypeScript errors | 0 |
| Dependencias runtime | 5 (react, react-dom, framer-motion, swiper, lucide-react) |
| Dev dependencies | 5 (vite, tailwindcss, typescript, sharp, plugins) |
| Sin backend | ✅ |
| Sin CMS | ✅ |
| Sin formularios | ✅ |

---

## 🔗 Repositorio

**GitHub**: https://github.com/Kodeparaguay/Aquadelta.git

---

*Proyecto generado con SDD (Spec-Driven Development) usando Gentle AI.*
*24 de junio de 2026*
