import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, MessageCircle, MapPin, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import { PROJECT_MASTERPLAN } from "../../data/content";

interface Hotspot {
  id: string;
  label: string;
  description: string;
  top: string;
  left: string;
}

const MASTERPLAN_HOTSPOTS: Hotspot[] = [
  {
    id: "lotes",
    label: "Lotes Náuticos",
    description: "97 parcelas con salida directa al río y amarra propia.",
    top: "38%",
    left: "42%",
  },
  {
    id: "clubhouse",
    label: "Club House & Amenities",
    description: "Espacios gastronómicos, lounge social y piscinas infinitas.",
    top: "55%",
    left: "68%",
  },
  {
    id: "marina",
    label: "Marina & Amarras",
    description: "Calado profundo para embarcaciones deportivas y cruceros.",
    top: "70%",
    left: "32%",
  },
];

export default function ProjectSection() {
  const { t } = useTranslation();
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const keyFeatures = [
    "97 Lotes Náuticos Exclusivos",
    "Amarras Propias de Calado Profundo",
    "Laguna WaveTech & Playas",
    "Seguridad Integral 24/7",
  ];

  return (
    <SectionWrapper
      id="el-proyecto"
      background="#005587"
      className="relative py-20 lg:py-28 overflow-hidden text-white"
    >
      {/* Resplandores ambientales de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#88DBDF]/15 rounded-full blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[400px] bg-[#E5B263]/10 rounded-full blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Cabecera Editorial y Narrativa */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#88DBDF]/15 border border-[#88DBDF]/30 text-[#88DBDF] text-xs uppercase tracking-[0.25em] font-semibold mb-4 shadow-sm backdrop-blur-md"
          >
            <Compass size={14} />
            <span>Masterplan & Territorio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-titulares text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[0.16em] uppercase text-[#D9D9D6]"
          >
            {t("elProyecto.title")}
          </motion.h2>

          {/* Subtítulo en Amarillo / Dorado */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 font-destacados text-2xl sm:text-3xl text-[#E5B263] font-normal"
          >
            {t("elProyecto.highlight")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 font-textos text-sm sm:text-base lg:text-lg text-[#D9D9D6]/85 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t("elProyecto.body")}
          </motion.p>
        </div>

        {/* 2. Masterplan a Full-Width Panorámico Interactivo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-12"
        >
          <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#004068] flex items-center justify-center">
              
              {/* Imagen Masterplan Full Width */}
              <LazyImage
                src={PROJECT_MASTERPLAN.src}
                alt={t("elProyecto.imageAlt")}
                className="w-full h-full object-contain sm:object-cover transition-transform duration-700"
              />

              {/* Degradados sutiles */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Hotspots interactivos */}
              {MASTERPLAN_HOTSPOTS.map((spot) => (
                <div
                  key={spot.id}
                  className="absolute z-20"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)
                    }
                    className="group relative flex items-center justify-center focus:outline-none"
                    aria-label={`Ver información de ${spot.label}`}
                  >
                    <span className="absolute h-8 w-8 rounded-full bg-[#E5B263] opacity-75 animate-ping" />
                    <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[#005587] border-2 border-[#E5B263] text-white shadow-xl transition-transform duration-300 group-hover:scale-125">
                      <MapPin size={13} className="text-[#E5B263]" />
                    </span>
                  </button>

                  {/* Tooltip flotante */}
                  <AnimatePresence>
                    {activeHotspot?.id === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 sm:w-60 rounded-xl bg-[#002f4d]/95 backdrop-blur-md p-3.5 text-left shadow-2xl border border-[#E5B263]/50 z-30"
                      >
                        <div className="flex items-center gap-1.5 text-[#E5B263] mb-1">
                          <Sparkles size={13} />
                          <span className="font-textos text-xs font-bold uppercase tracking-wider">
                            {spot.label}
                          </span>
                        </div>
                        <p className="font-textos text-[11px] sm:text-xs text-[#D9D9D6] leading-snug">
                          {spot.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Badge Flotante Superior */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#002f4d]/85 backdrop-blur-md text-[#D9D9D6] text-[10px] sm:text-xs font-textos tracking-widest uppercase font-semibold border border-white/10 shadow-lg">
                  Planta General • Masterplan
                </span>
              </div>

              {/* Guía interactiva inferior */}
              <div className="absolute bottom-3 left-3 sm:left-4 z-10 flex items-center gap-2 bg-[#002f4d]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#E5B263] animate-pulse" />
                <span className="font-textos text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D9D9D6]/90">
                  Tocá los puntos para explorar
                </span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 3. Barra Inferior de Diferenciales + Botones CTA (Abajo del Masterplan) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 border-t border-white/10"
        >
          {/* Grid de Diferenciales clave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 size={16} className="text-[#88DBDF] shrink-0" />
                <span className="font-textos text-xs sm:text-sm text-[#D9D9D6] font-medium tracking-wide">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Botones de Acción (Amarillo/Dorado + Outline) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            {/* Botón Principal Amarillo/Dorado */}
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E5B263] hover:bg-[#D4A152] text-[#003452] px-7 py-3.5 font-textos text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-[#E5B263]/25 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              <Download size={16} />
              <span>Descargar Masterplan PDF</span>
            </a>

            {/* Botón Secundario Outline */}
            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 hover:border-[#E5B263] bg-white/[0.05] hover:bg-white/10 text-white px-6 py-3.5 font-textos text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 active:scale-95 text-center"
            >
              <MessageCircle size={16} className="text-[#E5B263]" />
              <span>Consultar Lotes</span>
            </a>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}