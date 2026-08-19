import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
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

interface AmenitySlice {
  id: string;
  key: string;
  tagline: string;
  descKey: string;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
}

export default function AmenitiesSection() {
  const { t } = useTranslation();

  const AMENITIES_SLICES: AmenitySlice[] = [
    {
      id: "costanera",
      key: "nav.costanera",
      tagline: "PLAYA & RÍO",
      descKey: "costanera.body",
      heroImage: COSTANERA_HERO,
      gallery: [COSTANERA_HERO, ...COSTANERA_CAROUSEL, COSTANERA_PLANO],
    },
    {
      id: "deportes",
      key: "nav.deportes",
      tagline: "DEPORTE",
      descKey: "deportes.body",
      heroImage: DEPORTES_HERO,
      gallery: [DEPORTES_HERO, ...DEPORTES_CAROUSEL, DEPORTES_PLANO],
    },
    {
      id: "comercial",
      key: "nav.comercial",
      tagline: "COMUNIDAD",
      descKey: "comercial.body",
      heroImage: COMERCIAL_HERO,
      gallery: [COMERCIAL_HERO, COMERCIAL_ESCUELA],
    },
    {
      id: "paseoCentral",
      key: "nav.paseoCentral",
      tagline: "FAMILIA",
      descKey: "paseoCentral.body",
      heroImage: PASEO_CENTRAL_IMAGES[0] || COSTANERA_HERO,
      gallery: PASEO_CENTRAL_IMAGES,
    },
    {
      id: "galeria",
      key: "nav.galeria",
      tagline: "NATURALEZA",
      descKey: "galeria.title",
      heroImage: GALERIA_RENDERS[0] || COSTANERA_HERO,
      gallery: GALERIA_RENDERS.slice(0, 6),
    },
  ];

  const [activeSlice, setActiveSlice] = useState<string>("costanera");
  
  // Estado para el modal de galería interactiva
  const [modalGallery, setModalGallery] = useState<{
    isOpen: boolean;
    title: string;
    images: ImageAsset[];
    currentIndex: number;
  }>({
    isOpen: false,
    title: "",
    images: [],
    currentIndex: 0,
  });

  const openGallery = (slice: AmenitySlice, startIndex: number = 0) => {
    setModalGallery({
      isOpen: true,
      title: t(slice.key),
      images: slice.gallery,
      currentIndex: startIndex,
    });
  };

  const nextImage = () => {
    setModalGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const prevImage = () => {
    setModalGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <SectionWrapper
      id="amenities"
      className="relative py-20 lg:py-28 bg-[#002f4d] text-white overflow-hidden w-full"
    >
      {/* Resplandores ambientales de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#88DBDF]/10 rounded-full blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[400px] bg-[#E5B263]/10 rounded-full blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Cabecera Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#88DBDF]/15 border border-[#88DBDF]/30 text-[#88DBDF] text-xs uppercase tracking-[0.25em] font-semibold mb-4 backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>Masterplan & Amenities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-titulares text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[0.16em] uppercase text-[#D9D9D6]"
          >
            Todo lo que imaginás, en un solo lugar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 font-destacados text-2xl sm:text-3xl text-[#E5B263] font-normal"
          >
            Descubrí cada espacio y experiencia de Aquadelta
          </motion.p>
        </div>

        {/* 2. Columnas Verticales Interactivas (Acordeón Fotográfico) */}
        <div className="w-full flex flex-col md:flex-row gap-2.5 sm:gap-3 h-[560px] sm:h-[600px] lg:h-[640px]">
          {AMENITIES_SLICES.map((slice) => {
            const isExpanded = activeSlice === slice.id;

            return (
              <motion.div
                key={slice.id}
                onClick={() => setActiveSlice(slice.id)}
                layout
                transition={{
                  layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`relative h-full rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group select-none border border-white/10 transition-all duration-500 shadow-xl ${
                  isExpanded
                    ? "flex-[3.5] ring-2 ring-[#E5B263]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    : "flex-1 hover:flex-[1.2] opacity-75 hover:opacity-100"
                }`}
              >
                {/* Imagen Vertical de Fondo */}
                <img
                  src={slice.heroImage.src}
                  alt={slice.heroImage.alt || slice.tagline}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Degradado para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Contenido cuando la columna está cerrada */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 ${
                    isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div className="[writing-mode:vertical-rl] md:rotate-180 flex items-center gap-2">
                    <span className="font-textos text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
                      {slice.tagline}
                    </span>
                  </div>
                </div>

                {/* Contenido cuando la columna está ABIERTA / EXPANDIDA */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-10"
                    >
                      {/* Badge superior */}
                      <div className="flex items-center justify-between">
                        <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#88DBDF] text-xs font-bold tracking-widest uppercase">
                          {slice.tagline}
                        </span>

                        {/* Botón para abrir el visor */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(slice, 0);
                          }}
                          className="p-2.5 rounded-full bg-white/10 hover:bg-[#E5B263] text-white hover:text-[#002f4d] backdrop-blur-md border border-white/20 transition-all duration-300 active:scale-95 shadow-lg"
                          title="Ver imágenes en tamaño completo"
                        >
                          <Maximize2 size={16} />
                        </button>
                      </div>

                      {/* Tarjeta de información inferior */}
                      <div className="bg-black/50 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/15 max-w-lg">
                        <h3 className="font-titulares text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mb-2">
                          {t(slice.key)}
                        </h3>
                        <p className="font-textos text-xs sm:text-sm text-[#D9D9D6]/90 leading-relaxed font-light mb-4">
                          {t(slice.descKey)}
                        </p>

                        {/* Botón interactivo para abrir la galería real */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(slice, 0);
                          }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5B263] hover:bg-[#D4A152] text-[#003452] text-xs uppercase tracking-wider font-bold shadow-md transition-all active:scale-95"
                        >
                          <Images size={14} />
                          <span>Ver galería ({slice.gallery.length} fotos)</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Modal / Lightbox Interactivo con Carrusel Real de Imágenes */}
        <AnimatePresence>
          {modalGallery.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalGallery((prev) => ({ ...prev, isOpen: false }))}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 select-none"
            >
              {/* Barra Superior del Modal */}
              <div className="w-full max-w-6xl flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <h4 className="font-titulares text-lg sm:text-xl text-white uppercase tracking-wider">
                    {modalGallery.title}
                  </h4>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs text-[#88DBDF]">
                    {modalGallery.currentIndex + 1} / {modalGallery.images.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setModalGallery((prev) => ({ ...prev, isOpen: false }))}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Imagen Principal con Flechas de Navegación */}
              <div 
                className="relative w-full max-w-5xl h-[65vh] flex items-center justify-center my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Flecha Anterior */}
                {modalGallery.images.length > 1 && (
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-[#E5B263] text-white hover:text-[#002f4d] border border-white/20 backdrop-blur-md transition-all active:scale-90"
                    title="Anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {/* Imagen activa con animación suave */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={modalGallery.images[modalGallery.currentIndex]?.src}
                    src={modalGallery.images[modalGallery.currentIndex]?.src}
                    alt={modalGallery.images[modalGallery.currentIndex]?.alt || modalGallery.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </AnimatePresence>

                {/* Flecha Siguiente */}
                {modalGallery.images.length > 1 && (
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-[#E5B263] text-white hover:text-[#002f4d] border border-white/20 backdrop-blur-md transition-all active:scale-90"
                    title="Siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Tira de Miniaturas Inferior */}
              {modalGallery.images.length > 1 && (
                <div
                  className="w-full max-w-2xl flex items-center justify-center gap-2.5 overflow-x-auto p-2 no-scrollbar z-20"
                  onClick={(e) => e.stopPropagation()}
                >
                  {modalGallery.images.map((img, idx) => (
                    <button
                      key={img.src + idx}
                      onClick={() => setModalGallery((prev) => ({ ...prev, currentIndex: idx }))}
                      className={`relative flex-shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all ${
                        idx === modalGallery.currentIndex
                          ? "border-[#E5B263] scale-105 shadow-[0_0_12px_rgba(229,178,99,0.8)]"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SectionWrapper>
  );
}