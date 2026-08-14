# visual-interactions Specification

## Purpose

Animations, scroll effects, carousels, hover states, and lazy-loading for the Aquadelta landing. Uses Framer Motion and Swiper.js.

## Requirements

### Requirement: Hero Background — Video Loop with Slideshow Fallback

The Hero MUST display a looping `<video>` from `public/video/` (transcoded MP4/WebM) with `autoplay loop muted playsinline` and `rgba(0,85,135,0.5)` overlay. If the video fails to load, a slideshow of Costanera renders SHALL activate — fading between PERSPECTIVA 01 and 02 every 6s.

#### Scenario: Video plays on page load

- GIVEN a modern browser with video support and the transcoded MP4 exists
- WHEN the page loads
- THEN the Hero background shows a looping muted video with azul overlay at 50% opacity
- AND the logo, title, slogan, and CTA are visible above the overlay

#### Scenario: Slideshow activates when video fails

- GIVEN the video file is missing (404)
- WHEN the `<video>` `error` event fires
- THEN a slideshow of Costanera renders fades every 6s with the same overlay and Hero text

### Requirement: Scroll-Triggered Section Animations

Every section (except Nav/Footer) MUST animate on viewport entry via Framer Motion `useInView`: `opacity` 0→1, `translateY` 30px→0, `duration: 0.6`. Each section triggers once on first viewport entry.

#### Scenario: Section fades in on scroll

- GIVEN the page is scrolled past Hero
- WHEN "El Proyecto" top edge enters the viewport (≥10%)
- THEN the section animates opacity 0→1, translateY 30→0 over 0.6s
- AND re-scrolling past does NOT re-trigger

### Requirement: Parallax Section Heroes

Costanera and Deportes MUST display full-width parallax hero images via Framer Motion `useScroll` + `useTransform` — moving at ~30% of scroll speed.

#### Scenario: Parallax moves slower than scroll

- GIVEN Costanera hero is visible
- WHEN the user scrolls down 300px
- THEN the background image translates ~90px (30% rate)

### Requirement: Barrio Card Hover Effects

Each barrio card MUST scale to `1.03` on hover with a 300ms transition. Simultaneously, the overlay behind the barrio name SHALL darken (e.g., `background-color` opacity increase). The interaction MUST respect `prefers-reduced-motion`.

#### Scenario: Card reacts on hover

- GIVEN the Barrios section is visible on desktop
- WHEN the user hovers over Barrio 1 card
- THEN the card scales to 1.03 over 300ms
- AND the text overlay intensifies
- AND at `prefers-reduced-motion: reduce`, the scale animation is disabled

### Requirement: Swiper.js Carousels

Three Swiper.js carousels MUST exist: Costanera gallery (2 slides: PERSPECTIVA 02 + PESPECTIVA), Deportes masonry (4 slides: PERSPECTIVA 02, peaton 01, peaton 02, Detalle), Galería (up to 10 Renders nuevos). All carousels SHALL autoplay every 5 seconds, show pagination dots, support touch-swipe, and loop continuously.

#### Scenario: Carousel autoplays with dots

- GIVEN the Deportes section is in viewport
- WHEN the Swiper instance initializes
- THEN slides advance every 5 seconds
- AND pagination dots reflect the current slide index
- AND touch-dragging on mobile navigates slides

### Requirement: Lazy Loading and Smooth Scroll

All `<img>` elements below the fold MUST use `loading="lazy"`. The video element in the Galería section SHALL lazy-load — requesting the source only when the section is within 200px of the viewport. The HTML root MUST set `scroll-behavior: smooth` for internal navigation.

#### Scenario: Below-fold images defer loading

- GIVEN the page loads and user has not scrolled
- WHEN inspecting network requests
- THEN only Hero section images are fetched initially
- AND Barrios section images load only when scrolled near

### Requirement: Navigation Backdrop Blur and Shrink on Scroll

The sticky nav MUST apply `backdrop-filter: blur(12px)` and reduce in height from 72px to 56px after scrolling past 100px from top. The transition SHALL be 300ms.

#### Scenario: Nav shrinks after scroll threshold

- GIVEN the page is scrolled to Hero (scrollY < 100px)
- WHEN the user scrolls down past 100px
- THEN the nav height transitions from 72px to 56px over 300ms
- AND backdrop-blur (12px) activates
