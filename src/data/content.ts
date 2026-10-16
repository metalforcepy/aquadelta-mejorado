// ========================================
// Aquadelta — Static Data (images, numbers, paths only)
// Text strings moved to src/i18n/locales/
// ========================================
import type { BarrioCardData, ImageAsset } from "../types";

const img = (name: string, folder: string, alt: string): ImageAsset => ({
  src: `/Renders Aquadelta/${folder}/${name}`,
  alt,
});

// Navigation anchor IDs solicitados por el cliente (5 secciones principales)
export const NAV_HREFS = [
  "#el-proyecto",
  "#ubicacion",
  "#barrios",
  "#amenities",
  "#noticias",
];

export const NAV_KEY_MAP: Record<string, string> = {
  "#el-proyecto": "nav.elProyecto",
  "#ubicacion": "nav.ubicacion",
  "#barrios": "nav.barrios",
  "#amenities": "nav.amenities",
  "#noticias": "nav.noticias",
};

// Idiomas disponibles para el selector en el Navbar
export const SUPPORTED_LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
] as const;

// Hero
export const HERO_LOGO = "/logos/Logo AD Blanco.png";

// Project
export const PROJECT_MASTERPLAN: ImageAsset = {
  src: "/planta-general/PLANTA GENERAL_02.png",
  alt: "",
};
export const PROJECT_STATS = ["+200 ha", "3.9 ha", "Marina", "20 min"];

// Barrios
export const BARRIOS: BarrioCardData[] = [
  { 
    id: "barrio-1", 
    label: "", 
    folderPath: "Barrio 1", 
    image: "Barrio 1 - Pespectiva 01.png", 
    secondaryImages: ["Barrio 1 - Peaton 01.jpeg", "Barrio 1 - Detalle 01.jpeg"],
    // Coordenadas sobre /planta-general/PLANTA GENERAL_02.png (mismas del hotspot 4)
    planHotspot: { top: 50.5, left: 57.0 },
  },
  { 
    id: "barrio-2", 
    label: "", 
    folderPath: "Barrio 2", 
    image: "Barrio 2 - perspectiva 01.jpeg", 
    secondaryImages: ["Barrio 2 - Peaton 01.png", "DETALLE BARRIO 02.jpeg"],
    planHotspot: { top: 70.5, left: 47.6 },
  },
  { 
    id: "barrio-3", 
    label: "", 
    folderPath: "Barrio 4", 
    image: "BARRIO 3 - PERSPECTIVA 1.jpeg", 
    secondaryImages: ["BARRIO 3 - PEATON 01.jpeg", "BARRIO 3 - PERSPECTIVA 02.jpeg"],
    planHotspot: { top: 69.5, left: 6 },
  },
];

// ========================================
// AMENITIES (Agrupación de áreas)
// ========================================

// Costanera
export const COSTANERA_HERO = img("COSTANERA - PERSPECTIVA 01.jpeg", "Costanera", "Vista perspectiva de la costanera");
export const COSTANERA_PLANO = img("Planta costanera.jpeg", "Costanera", "Plano de la costanera");
export const COSTANERA_CAROUSEL = [
  img("COSTANERA - PERSPECTIVA 02.jpeg", "Costanera", "Perspectiva costanera 02"),
  img("COSTANERA - PESPECTIVA.jpeg", "Costanera", "Perspectiva costanera"),
];

// Paseo Central
export const PASEO_CENTRAL_IMAGES = [
  img("PASEO CENTRAL - PEATON 01.jpeg", "Paseo Central", "Paseo central peatonal"),
  img("CORTE 01.jpeg", "Paseo Central", "Corte técnico 01"),
  img("CORTE 02.png", "Paseo Central", "Corte técnico 02"),
];

// Deportes
export const DEPORTES_HERO = img("DEPORTES - PERSPECTIVA 01.jpeg", "Deportes", "Vista general área deportiva");
export const DEPORTES_PLANO = img("PLANTA DEPORTES.jpeg", "Deportes", "Plano área deportiva");
export const DEPORTES_CAROUSEL = [
  img("DEPORTES - PERSPECTIVA 02.jpeg", "Deportes", "Perspectiva deportes 02"),
  img("DEPORTES - peaton 01.jpeg", "Deportes", "Peatonal deportes 01"),
  img("DEPORTES - peaton 02.jpeg", "Deportes", "Peatonal deportes 02"),
  img("Detalle  Deportes.png", "Deportes", "Detalle área deportiva"),
];

// Comercial
export const COMERCIAL_HERO = img("COMERCIO - PERSPECTIVA 01.jpeg", "Comercial", "Vista zona comercial");
export const COMERCIAL_ESCUELA = img("COMERCIO - PEATON ESCUELA 01.jpeg", "Comercial", "Peatonal escuela integrada");

// Galería / Video
export const GALERIA_VIDEO = "/Renders Aquadelta/Renders animados/renders_animados_aquadelta.MOV";
export const GALERIA_RENDERS = [
  img("ChatGPT Image 8 may 2026, 05_10_30 p.m..png", "Renders nuevos Aquadelta", "Render nuevo"),
  img("ChatGPT Image 8 may 2026, 05_15_29 p.m. (1).png", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.09.jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.10 (1).jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.10 (2).jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.10.jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.11 (1).jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.11 (2).jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.11.jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
  img("WhatsApp Image 2026-04-21 at 09.40.12.jpeg", "Renders nuevos Aquadelta", "Render nuevo"),
];

// Logos
export const NAV_LOGO = "/logos/logo-blanco-horizontal.png";
export const FOOTER_LOGO = "/logos/logo-blanco-horizontal.png";