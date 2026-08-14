# landing-page Specification

## Purpose

Core structure, navigation, color/typography enforcement, responsive layout, and verbatim content for the Aquadelta one-page landing.

## Requirements

### Requirement: Nine-Section Page Structure

The page MUST render 9 sequential `<section>` elements with unique `id` anchors: `#hero`, `#el-proyecto`, `#la-costanera`, `#barrios`, `#paseo-central`, `#deportes`, `#zona-comercial`, `#galeria`, and `#footer`.

Section background colors MUST alternate: Hero (gradient), El Proyecto (tiza `#D9D9D6`), La Costanera (azul `#005587`), Barrios (tiza), Paseo Central (turquesa 15% opacity over tiza), Deportes (azul), Zona Comercial (tiza), Galería (azul), Footer (azul solid).

#### Scenario: All 9 sections render with correct backgrounds

- GIVEN the page loads in a desktop browser
- WHEN the DOM is fully rendered
- THEN 9 `<section>` elements exist in order from Hero to Footer
- AND azul sections use tiza/white text; tiza sections use azul text

### Requirement: Sticky Navigation with Anchor Scrolling

The page MUST include a `<nav>` element fixed to the viewport top with `backdrop-filter: blur` and azul solid background. On desktop (>1024px), links render horizontally: El Proyecto, Costanera, Barrios, Paseo Central, Deportes, Comercial, Galería. On mobile (<768px), a hamburger toggle MUST show/hide the link list. All nav links MUST use `href="#anchor"` with `scroll-behavior: smooth`.

#### Scenario: Desktop nav scrolls to section

- GIVEN the page on desktop (>1024px)
- WHEN the user clicks "Barrios" in the sticky nav
- THEN the viewport scrolls smoothly to `#barrios`
- AND the nav remains fixed at top with backdrop-blur

#### Scenario: Mobile hamburger toggles menu

- GIVEN the page on mobile (<768px)
- WHEN the user taps the hamburger icon
- THEN the nav link list becomes visible
- WHEN the user taps a link
- THEN the menu closes AND scrolls to the target section

### Requirement: Color Palette and Typography Enforcement

The page MUST define 4 CSS custom properties (`--color-azul: #005587`, `--color-tiza: #D9D9D6`, `--color-turquesa: #88DBDF`, `--color-naranja: #FF7F32`). Naranja SHALL be used only for primary CTAs and badges — max 2 elements per section. The page MUST declare 3 `@font-face` rules with `font-display: swap`: VANITAS (Bold/ExtraBold, titles, uppercase, 4-6px letter-spacing), Lota Grotesque (Regular/SemiBold, body), Silver South Script (Regular, 3-6 word highlights, 1 per section max).

#### Scenario: No white backgrounds anywhere

- GIVEN any section or page background
- WHEN inspecting the computed background-color
- THEN no element uses `#FFFFFF` or `white` as its background
- AND the base page background is `--color-tiza`

### Requirement: Responsive Breakpoints

The layout MUST adapt at three breakpoints: mobile (<768px), tablet (768–1024px), desktop (>1024px). Grid-based sections (Barrios 3-col, Deportes masonry) MUST collapse to 1 column on mobile. Hero title: 5rem desktop → 2.5rem mobile. Section titles: 3rem desktop → 1.8rem mobile. Video: 70% width desktop → 100% mobile.

#### Scenario: Mobile grid collapses to single column

- GIVEN the page on mobile (<768px)
- WHEN the user scrolls to Barrios section
- THEN each barrio card occupies full viewport width, stacked vertically

### Requirement: Verbatim Text Content

All visible text in headings, body paragraphs, and Silver South highlights MUST match `guia-desarrollo.md` Section 6 verbatim. The slogan "Redescubrí la vida sobre el río" MUST appear in Hero and Footer.

#### Scenario: Hero text matches guide

- GIVEN the page loads
- WHEN inspecting Hero section text content
- THEN "AQUADELTA" is the H1, "Redescubrí la vida sobre el río" is the Silver South highlight
- AND the CTA button reads "Conocé el proyecto" in naranja

### Requirement: Logo Selection by Section Context

The Nav sticky bar MUST use `logo-blanco-horizontal.png`. The Hero MUST use `Logo AD Blanco.png` centered. Footer MUST use `logo-blanco-horizontal.png`. Light-background sections (tiza) SHOULD use `Raices_Aquadelta-01.png` or `Raices_Aquadelta-04.png`. Favicon MUST be `isologo-aquadelta.png`.

#### Scenario: Nav and footer use white horizontal logo

- GIVEN the page in any viewport
- THEN nav and footer `<img src>` both reference `logo-blanco-horizontal.png`
