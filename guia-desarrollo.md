# Aquadelta — Guía de Desarrollo Frontend

> **Slogan:** *Redescubrí la vida sobre el río*
>
> **Objetivo:** Landing page one-page para desarrollo inmobiliario frente al río. Solo frontend visual.

---

## 🎨 1. Paleta de Colores

| Nombre | Hex | RGB | Pantone | Uso principal |
|--------|-----|-----|---------|---------------|
| **Azul profundo** | `#005587` | 0, 85, 135 | 7962 C | Fondos oscuros, navegación, footer |
| **Tiza** | `#D9D9D6` | 217, 217, 214 | Cool Gray 1 C | Fondo base de la página (NUNCA `#FFFFFF`) |
| **Turquesa** | `#88DBDF` | 136, 219, 223 | 318 C | Acentos, botones CTA, hover, secciones destacadas |
| **Naranja** | `#FF7F32` | 255, 127, 50 | 1575 C | CTAs fuertes, badges, precios, urgencia |

### Reglas
- **Azul profundo** es el color dominante. Nav, títulos grandes, footer.
- **Tiza** como fondo base. Reemplaza al blanco. Cálido y suave, evoca lo ribereño.
- **Turquesa** para interactividad: botones, links, hovers, fondos de tarjetas.
- **Naranja** como acento de alto contraste. Solo para CTAs principales ("Consultar", "Reservar") y badges. Usar con moderación — 1 o 2 elementos por sección máxima.

### Degradados
- Hero: `Azul profundo` a `Tiza` (vertical)
- Secciones alternadas: `Tiza` (pares) / `Azul profundo` (impares)
- Secciones sobre azul: texto en Tiza o blanco.
- Secciones sobre Tiza: texto en Azul profundo.

---

## ✍️ 2. Tipografía

Tenemos el set completo disponible en `Tipografias/`. Si bien no hay guía de marca que dicte reglas, usamos criterio consistente:

| Jerarquía | Fuente | Peso | Uso |
|-----------|--------|------|-----|
| **Titulares** | **VANITAS** | Bold / ExtraBold | H1, H2, títulos de sección, hero |
| **Textos** | **Lota Grotesque** | Regular / Semi Bold | Párrafos, menú, botones, datos |
| **Destacados** | **Silver South Script** | Regular | Frases emotivas, testimonios, tags |

### Reglas
- VANITAS en mayúsculas con tracking amplio (`letter-spacing: 4-6px`). Solo para títulos principales.
- Lota Grotesque Alt 1, 2, 3 disponibles como variantes estilísticas si se quiere variar. La estándar (sin Alt) para body.
- Silver South: frases de 3-6 palabras. Una por sección máximo.
- Tamaños:
  - Hero título: `4rem - 6rem` VANITAS Bold
  - Section título: `2.5rem - 3.5rem` VANITAS ExtraBold
  - Body: `1rem - 1.125rem` Lota Grotesque Regular
  - Destacados: `1.5rem - 2.5rem` Silver South

### Archivos de fuente disponibles
- **VANITAS:** Regular, Italic, Bold, Bold Italic, Black, Black Italic, ExtraBold, ExtraBold Italic
- **Lota Grotesque:** Thin a Black (7 pesos + itálicas) + Alt 1, Alt 2, Alt 3
- **Silver South:** Script + Script Alt

---

## 🔷 3. Iconografía

No hay set de iconos definido por la marca para Aquadelta. Tenemos libertad creativa.

### Estilo propuesto
- **Línea fina** (stroke-width: 1.5-2px) en **Turquesa** (`#88DBDF`) o **Tiza** (`#D9D9D6`) según fondo.
- **Forma:** Círculos o rectángulos redondeados con borde, sin relleno (outline style).
- Consistente con la estética limpia y moderna de los renders.

### Iconos necesarios (elegir de Lucide, Phosphor o Heroicons)

| Concepto | Icono | Sección |
|----------|-------|---------|
| Río / Agua | `waves` | Costanera |
| Casa / Barrio | `home`, `building` | Barrios |
| Tienda | `store`, `shopping-bag` | Comercial |
| Deportes | `trophy`, `dumbbell` | Deportes |
| Parque / Árbol | `tree-pine`, `leaf` | Paseo Central |
| Mapa / Plano | `map` | Masterplan |
| Video | `play-circle` | Renders animados |

---

## 🖼️ 4. Logos

Disponibles en `logos/`:

| Archivo | Variante | Cuándo usar |
|---------|----------|-------------|
| `Raices_Aquadelta-01.png` | Full color | Sobre fondo Tiza o claro |
| `Raices_Aquadelta-02.png` | Variante color | Alternativo claro |
| `Raices_Aquadelta-03.png` | Variante color | Alternativo |
| `Raices_Aquadelta-04.png` | Variante | Sobre fondos claros |
| `Raices_Aquadelta-05.png` | Variante | Uso general |
| `Logo AD Blanco.png` | Blanco | Hero, footer, secciones oscuras |
| `logo-blanco-horizontal.png` | Blanco horizontal | Nav sticky, footer |
| `isologo-aquadelta.png` | Isologo | Favicon, watermark |

### Reglas
- No estirar. Mantener proporción.
- Header: `logo-blanco-horizontal.png`, ~45px alto.
- Hero: `Logo AD Blanco.png` centrado sobre el degradado.
- Footer: `logo-blanco-horizontal.png`.
- Favicon: `isologo-aquadelta.png`.

---

## 🏗️ 5. Estructura del Sitio

One-page de 9 secciones:

| # | Sección | Fondo | Contenido visual |
|---|---------|-------|------------------|
| 1 | **Hero** | Degradado Azul → Tiza | Video animado o render costanera + logo + slogan |
| 2 | **El Proyecto** | Tiza | Masterplan + datos generales |
| 3 | **La Costanera** | Azul profundo | Renders ribereños + texto |
| 4 | **Barrios** | Tiza | Grid de barrios con sus renders |
| 5 | **Paseo Central** | Turquesa claro | Render paseo + cortes |
| 6 | **Deportes** | Azul profundo | Renders deportivos |
| 7 | **Zona Comercial** | Tiza | Render comercio + escuela |
| 8 | **Galería / Video** | Azul profundo | Renders nuevos + video animado |
| 9 | **Footer** | Azul profundo sólido | Logo blanco + enlaces |

---

## 📄 6. Contenido por Sección

### 6.1 Hero
```
Logo: Logo AD Blanco.png centrado
Título (VANITAS Bold, 5rem): AQUADELTA
Frase destacada (Silver South, 2rem): Redescubrí la vida sobre el río
CTA: Botón Naranja "Conocé el proyecto" → scroll a #el-proyecto
```
- **Fondo:** Video loop `renders_animados_aquadelta.MOV` con overlay Azul profundo semitransparente.
- **Alternativa si no se usa video:** Slideshow con renders de Costanera (COSTANERA - PERSPECTIVA 01 + 02).
- Overlay: `rgba(0, 85, 135, 0.5)`.

### 6.2 El Proyecto
```
Título (VANITAS): EL PROYECTO
Frase destacada (Silver South): A orillas del río, una nueva forma de vivir
Body (Lota Grotesque): Aquadelta es un desarrollo inmobiliario que redefine
  la vida frente al río. Con barrios diseñados para la tranquilidad,
  espacios verdes, zona comercial y deportiva, y una costanera que invita
  a reconectar con la naturaleza.
```
- **Imagen principal:** `PLANTA GENERAL_02.png` (planta-general) a la derecha, en layout 2 columnas.
- Debajo del mapa, 4 badges con datos (si existen, sino omitir).
- Layout: texto izquierda, masterplan derecha (invertir en mobile).

### 6.3 La Costanera
```
Título (VANITAS): LA COSTANERA
Frase destacada (Silver South): El río como patio trasero
Body (Lota Grotesque): La costanera de Aquadelta es el punto de encuentro
  entre la naturaleza y la vida cotidiana. Un paseo ribereño donde
  caminar, andar en bici, o simplemente sentarse a ver el atardecer
  sobre el agua.
```
- **Hero de sección:** `COSTANERA - PERSPECTIVA 01.jpeg` a full-width con parallax.
- **Galería secundaria:** `COSTANERA - PERSPECTIVA 02.jpeg` + `COSTANERA - PESPECTIVA.jpeg` en carrusel de 2 slides.
- **Plano:** `Planta costanera.jpeg` al final como referencia.

### 6.4 Barrios
```
Título (VANITAS): BARRIOS
Body (Lota Grotesque): Tres barrios con identidad propia, cada uno
  diseñado para un estilo de vida diferente. Todos conectados por
  el paseo central y con acceso a la costanera.
```

**Grid de 3 tarjetas — una por barrio:**

| Barrio | Render principal | Secundarios |
|--------|-----------------|-------------|
| **Barrio 1** | `Barrio 1 - Pespectiva 01.png` | Peaton 01, Detalle 01 |
| **Barrio 2** | `Barrio 2 - perspectiva 01.jpeg` | Peaton 01, Detalle |
| **Barrio 3** | `BARRIO 3 - PERSPECTIVA 1.jpeg` | Peaton 01, Perspectiva 02 |

- Cada tarjeta: imagen de fondo + overlay con nombre del barrio en VANITAS + badge "Ver más" en Turquesa.
- Al hacer hover: overlay se intensifica, sutil zoom en la imagen.
- Mobile: stack vertical, una tarjeta por fila.

### 6.5 Paseo Central
```
Título (VANITAS): PASEO CENTRAL
Frase destacada (Silver South): El corazón de Aquadelta
Body (Lota Grotesque): Un boulevard arbolado que conecta todos los barrios.
  El paseo central es el eje vertebrador del proyecto: locales comerciales,
  espacios de descanso, y acceso directo a todos los amenities.
```
- **Imagen principal:** `PASEO CENTRAL - PEATON 01.jpeg` a full-width.
- **Cortes técnicos:** `CORTE 01.jpeg` + `CORTE 02.png` en acordeón o tabs debajo (para quien quiera ver detalles constructivos).
- Fondo: `#88DBDF` con opacidad 15% (turquesa muy suave) sobre base Tiza.

### 6.6 Deportes
```
Título (VANITAS): DEPORTES
Body (Lota Grotesque): Un área deportiva completa para todas las edades.
  Canchas, espacios de entrenamiento, y zonas de recreación al aire libre
  rodeadas de naturaleza.
```
- **Hero de sección:** `DEPORTES - PERSPECTIVA 01.jpeg` a full-width.
- **Galería:** 3-4 renders en grid masonry:
  - `DEPORTES - PERSPECTIVA 02.jpeg`
  - `DEPORTES - peaton 01.jpeg`
  - `DEPORTES - peaton 02.jpeg`
  - `Detalle Deportes.png`
- **Plano:** `PLANTA DEPORTES.jpeg` al final.

### 6.7 Zona Comercial
```
Título (VANITAS): ZONA COMERCIAL
Body (Lota Grotesque): Locales, escuela, y todo lo necesario para la
  vida diaria, integrado dentro del predio. La zona comercial de Aquadelta
  está pensada para que no tengas que salir del barrio para nada.
```
- **Imagen principal:** `COMERCIO - PERSPECTIVA 01.jpeg`.
- **Secundaria:** `COMERCIO - PEATON ESCUELA 01.jpeg` con caption "Escuela integrada al predio".
- Layout: imagen izquierda + texto derecha.

### 6.8 Galería / Video
```
Título (VANITAS): CONOCÉ AQUADELTA
Frase destacada (Silver South): Mirá el video
```
- **Video principal:** `renders_animados_aquadelta.MOV` embebido como `<video>` con controles. Poster image de un render de Costanera.
- **Galería de renders nuevos:** Los 10 archivos de `Renders nuevos Aquadelta/` en carrusel swipeable con dots.
- Fondo Azul profundo. Textos en Tiza.

### 6.9 Footer
```
Logo: logo-blanco-horizontal.png
Links: El Proyecto · Costanera · Barrios · Paseo Central · Deportes · Comercial · Galería
Slogan: Redescubrí la vida sobre el río (Silver South)
Copyright + año (Lota Grotesque)
```
- Fondo: Azul profundo sólido.

---

## 🎬 7. Dirección Visual y Animaciones

### Tono
- **Natural y moderno.** La paleta Azul + Turquesa evoca el río. El Naranja da calidez sin perder sofisticación.
- **Menos es más.** Aquadelta tiene muchos renders — usarlos estratégicamente, no saturar.
- **El río como protagonista.** La costanera y el agua deben estar presentes visualmente en todas las secciones (aunque sea como textura de fondo o acento de color).

### Animaciones
| Elemento | Efecto |
|----------|--------|
| Hero | Video loop de fondo con overlay. Si no, slideshow (fade, 6s) |
| Secciones | Fade-in + translateY(30px → 0) al scroll (IntersectionObserver) |
| Tarjetas de Barrios | Hover: escala 1.03 + overlay intensifica |
| Galerías | Carrusel táctil con dots + autoplay 5s (Swiper.js) |
| Nav | Sticky + backdrop-blur al scroll. Fondo Azul profundo sólido |
| Video | Lazy-load. Solo carga al hacer scroll cerca de la sección |

### Scroll
- `scroll-behavior: smooth` para nav interna.
- Flecha animada hacia abajo en hero.

---

## 📱 8. Responsive

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px – 1024px
- **Desktop:** > 1024px

### Ajustes
| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Hero título | 5rem | 2.5rem |
| Section título | 3rem | 1.8rem |
| Grid barrios | 3 columnas | 1 columna |
| Grid deportes (masonry) | 3 cols | 2 cols |
| Galería | 3 slides visibles | 1 slide, swipe |
| Video | 70% ancho | 100% ancho |
| Nav | Links horizontales | Hamburguesa |

---

## 📁 9. Assets

### Logos → `logos/`
```
Logo AD Blanco.png              → Hero / Footer / Secciones oscuras
logo-blanco-horizontal.png      → Nav sticky / Footer
Raices_Aquadelta-01.png         → Secciones sobre Tiza
Raices_Aquadelta-02.png         → Alternativo
Raices_Aquadelta-03.png         → Alternativo
Raices_Aquadelta-04.png         → Secciones claras
Raices_Aquadelta-05.png         → Uso general
isologo-aquadelta.png           → Favicon
```

### Planta General → `planta-general/`
```
PLANTA GENERAL_02.png           → Sección "El Proyecto"
```

### Renders → `Renders Aquadelta/`

| Carpeta | Archivos clave | Sección |
|---------|---------------|---------|
| **Costanera** | PERSPECTIVA 01, 02, PESPECTIVA, Planta | La Costanera |
| **Barrio 1** | Pespectiva 01, Peaton 01, Detalle 01 | Barrios |
| **Barrio 2** | Perspectiva 01, 02, Peaton 01, Detalle | Barrios |
| **Barrio 4** | PERSPECTIVA 1, 2, PEATON 01 | Barrios |
| **Paseo Central** | PEATON 01, CORTE 01, CORTE 02 | Paseo Central |
| **Deportes** | PERSPECTIVA 01, 02, peaton 01-03, Detalle, PLANTA | Deportes |
| **Comercial** | PERSPECTIVA 01, PEATON ESCUELA 01, PLANTA | Zona Comercial |
| **Renders animados** | `renders_animados_aquadelta.MOV` | Hero y/o Galería |
| **Renders nuevos** | 10 imágenes (ChatGPT + WhatsApp) | Galería |

### Tipografías → `Tipografias/`
```
VANITAS (8 archivos)            → Titulares
Lota Grotesque (14 archivos)    → Textos
Lota Grotesque Alt 1-3 (42 archivos) → Variantes decorativas
Silver South Script (2 archivos) → Destacados
```

---

## 🛠️ 10. Setup Técnico Frontend

### CSS Variables
```css
:root {
  --color-azul: #005587;
  --color-tiza: #D9D9D6;
  --color-turquesa: #88DBDF;
  --color-naranja: #FF7F32;
  --font-titulares: 'VANITAS', serif;
  --font-textos: 'Lota Grotesque', sans-serif;
  --font-destacados: 'Silver South Script', script;
  --max-width: 1200px;
  --nav-height: 72px;
}
```

### Carga de fuentes
```css
@font-face {
  font-family: 'VANITAS';
  src: url('../Tipografias/Vanitas-Bold/Vanitas Bold.otf') format('opentype');
  font-weight: 700;
  font-display: swap;
}
/* Registrar todos los pesos necesarios */
```

### Estructura de archivos
```
aquadelta/
├── index.html
├── css/main.css
├── js/main.js
├── Tipografias/       ← fonts (ya existen)
├── logos/             ← 8 logos (ya existen)
├── planta-general/    ← 1 masterplan (ya existe)
└── Renders Aquadelta/ ← todos los renders (ya existen)
    ├── Costanera/
    ├── Barrio 1/
    ├── Barrio 2/
    ├── Barrio 4/
    ├── Paseo Central/
    ├── Deportes/
    ├── Comercial/
    ├── Renders animados/
    └── Renders nuevos Aquadelta/
```

### Dependencias opcionales
- **Swiper.js** para carruseles y galerías táctiles.
- **IntersectionObserver** nativo para animaciones scroll (sin librería).
- **Lucide Icons** o **Phosphor Icons** para iconografía.

---

## ⚠️ 11. Notas

- **Sin ubicación de Maps.** Omitir sección de mapa. Si se consigue después, agregar entre El Proyecto y La Costanera.
- **Sin brochure PDF.** No hay documento descargable para este proyecto.
- **Sin datos numéricos.** No se proveyeron hectáreas, cantidades de lotes, etc. Si llegan después, agregar a "El Proyecto" como grid de números (estilo Aquaterra).
- **Sin amenidades escritas.** Deduje las secciones de los renders. Si hay una lista oficial, ajustar.

---

*Guía frontend generada el 24 de junio de 2026. Solo HTML, CSS, JS vanilla o framework. Sin backend, sin CMS, sin formularios.*
