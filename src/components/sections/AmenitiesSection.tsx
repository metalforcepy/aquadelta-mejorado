import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../shared/SectionWrapper";
import {
  COSTANERA_HERO,
  COSTANERA_CAROUSEL,
  COSTANERA_PLANO,
  DEPORTES_HERO,
  DEPORTES_CAROUSEL,
  DEPORTES_PLANO,
  COMERCIAL_HERO,
  COMERCIAL_ESCUELA,
  PASEO_CENTRAL_IMAGES,
  GALERIA_RENDERS,
} from "../../data/content";
import type { ImageAsset } from "../../types";

interface AmenityCategory {
  id: string;
  num: string;
  key: string;
  descKey: string;
  images: ImageAsset[];
}

export default function AmenitiesSection() {
  const { t } = useTranslation();

  const AMENITIES_DATA: AmenityCategory[] = [
    {
      id: "costanera",
      num: "01",
      key: "nav.costanera",
      descKey: "costanera.body",
      images: [COSTANERA_HERO, ...COSTANERA_CAROUSEL, COSTANERA_PLANO],
    },
    {
      id: "deportes",
      num: "02",
      key: "nav.deportes",
      descKey: "deportes.body",
      images: [DEPORTES_HERO, ...DEPORTES_CAROUSEL, DEPORTES_PLANO],
    },
    {
      id: "comercial",
      num: "03",
      key: "nav.comercial",
      descKey: "comercial.body",
      images: [COMERCIAL_HERO, COMERCIAL_ESCUELA],
    },
    {
      id: "paseoCentral",
      num: "04",
      key: "nav.paseoCentral",
      descKey: "paseoCentral.body",
      images: PASEO_CENTRAL_IMAGES,
    },
    {
      id: "galeria",
      num: "05",
      key: "nav.galeria",
      descKey: "galeria.title",
      images: GALERIA_RENDERS.slice(0, 6),
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("costanera");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const currentCategory =
    AMENITIES_DATA.find((c) => c.id === activeCategory) || AMENITIES_DATA[0];
  const currentImage =
    currentCategory.images[activeImageIndex] || currentCategory.images[0];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveImageIndex(0);
  };

  return (
    <SectionWrapper
      id="amenities"
      className="relative py-20 md:py-28 bg-[#005587] text-[#D9D9D6] overflow-hidden"
    >
      {/* Resplandor ambiental de fondo sutil */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#88DBDF]/10 rounded-full blur-[150px]" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Minimalista & Editorial */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >


          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['VANITAS'] text-3xl sm:text-4xl lg:text-5xl tracking-[0.2em] text-[#D9D9D6] uppercase"
          >
            {t("nav.amenities")}
          </motion.h2>
        </div>

        {/* Barra de Navegación Segmentada (Píldoras Flotantes de Lujo) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-xl overflow-x-auto max-w-full no-scrollbar">
            {AMENITIES_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs font-['Lota_Grotesque'] uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-[#005587] font-semibold"
                      : "text-[#D9D9D6]/80 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? "text-[#005587]/70" : "text-[#88DBDF]/70"}`}>
                    {cat.num}
                  </span>
                  <span>{t(cat.key)}</span>

                  {isActive && (
                    <motion.div
                      layoutId="amenityActiveTab"
                      className="absolute inset-0 bg-[#88DBDF] rounded-full shadow-[0_0_20px_rgba(136,219,223,0.45)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Visor Panorámico de los Renders */}
        <div className="relative rounded-3xl overflow-hidden bg-black/40 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.src}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || t(currentCategory.key)}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Degradados sutiles para proteger la legibilidad sin tapar la vista */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block" />
              </motion.div>
            </AnimatePresence>

            {/* Contador de fotos */}
            <div className="absolute top-5 right-5 z-20">
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-['Lota_Grotesque'] tracking-widest text-[#D9D9D6]">
                {activeImageIndex + 1} / {currentCategory.images.length}
              </span>
            </div>

            {/* Tarjeta de Información: Limpia, directa y sofisticada */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:max-w-lg z-20">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="p-6 sm:p-7 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl"
              >
                <h3 className="font-['VANITAS'] text-2xl sm:text-3xl text-white tracking-wider uppercase mb-2">
                  {t(currentCategory.key)}
                </h3>
                <p className="font-['Lota_Grotesque'] text-sm sm:text-base text-[#D9D9D6]/90 font-light leading-relaxed">
                  {t(currentCategory.descKey)}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Carrusel de Miniaturas Inferior */}
          {currentCategory.images.length > 1 && (
            <div className="p-4 sm:p-5 bg-[#002b45]/95 border-t border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-0.5">
                {currentCategory.images.map((imgItem, idx) => {
                  const isSelected = idx === activeImageIndex;
                  return (
                    <button
                      key={imgItem.src + idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-[#88DBDF] shadow-[0_0_12px_rgba(136,219,223,0.5)] scale-105"
                          : "border-white/20 opacity-50 hover:opacity-90 hover:border-white/40"
                      }`}
                    >
                      <img
                        src={imgItem.src}
                        alt={imgItem.alt || `Vista ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#88DBDF]/15" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </SectionWrapper>
  );
}