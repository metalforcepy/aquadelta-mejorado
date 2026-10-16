// ── Section identifiers ──
export type SectionId = 'hero' | 'el-proyecto' | 'ubicacion' | 'barrios' | 'amenities' | 'noticias';

// ── Image assets ──
export interface ImageAsset {
  src: string;
  alt: string;
  srcset?: string;
  sizes?: string;
}

// ── Navigation ──
export interface NavItem {
  id: string;
  label: string;
}

// ── Badges ──
export interface BadgeData {
  value: string;
  label: string;
  icon: string; // Lucide icon name — resolved at render time
}

// ── Section content ──
export interface SectionContent {
  id: SectionId;
  title: string;
  subtitle?: string;
  body: string;
  highlight?: string;
  images: ImageAsset[];
  carouselImages?: ImageAsset[];
  badges?: BadgeData[];
  cta?: {
    label: string;
    href: string;
  };
}

// ── Barrio card ──
export interface BarrioCardData {
  id: string;
  /** Visible label shown in UI */
  label: string;
  /** Actual filesystem folder path under Renders Aquadelta/ */
  folderPath: string;
  image: string;
  secondaryImages: string[];
  /** Posición (%) del barrio sobre la planta general, para resaltarlo al hacer clic */
  planHotspot?: { top: number; left: number };
}
