import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, MessageCircle, Sparkles, CheckCircle2, Compass } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import { PROJECT_MASTERPLAN } from "../../data/content";

interface AmenityHotspot {
  id: number;
  label: string;
  category: string;
  description: string;
  top: number;  // % vertical exacto
  left: number; // % horizontal exacto
}

const AMENITIES_LIST: AmenityHotspot[] = [
  {
    id: 1,
    label: "Campus Educativo",
    category: "Educación",
    description: "Infraestructura educativa integrada dentro del predio.",
    top: 23,
    left: 92.5,
  },
  {
    id: 2,
    label: "Paseo Comercial",
    category: "Comercios",
    description: "Locales comerciales y gastronómicos sobre el acceso.",
    top: 31.5,
    left: 92.8,
  },
  {
    id: 3,
    label: "Área Deportiva",
    category: "Deportes",
    description: "Canchas de tenis, pádel, fútbol y polideportivo.",
    top: 22.8,
    left: 82.8,
  },
  {
    id: 4,
    label: "Barrio Navegantes",
    category: "Residencial",
    description: "Sector residencial consolidado con lotes náuticos.",
    top: 50.5,
    left: 57.0,
  },
  {
    id: 5,
    label: "Laguna WaveTech",
    category: "Vida náutica",
    description: "Laguna cristalina con tecnología de olas y playas de arena blanca.",
    top: 49.8,
    left: 44.0,
  },
  {
    id: 6,
    label: "Barrio Veleros",
    category: "Residencial",
    description: "Lotes con amarras y salida directa al circuito náutico.",
    top: 70.5,
    left: 47.6,
  },
  {
    id: 7,
    label: "Zona Intermedia",
    category: "Residencial",
    description: "Sector exclusivo con espejos de agua y senderos.",
    top: 75.2,
    left: 17.5,
  },
  {
    id: 8,
    label: "Barrio Regatas",
    category: "Residencial",
    description: "Lotes sobre laguna interna con muelles y visuales directas.",
    top: 69.5,
    left: 6,
  },
  {
    id: 9,
    label: "Club House Náutico",
    category: "Vida náutica",
    description: "Restaurante, lounge social y piscinas de borde infinito.",
    top: 65.0,
    left: 9.2,
  },
  {
    id: 10,
    label: "Riacho San Francisco",
    category: "Vida náutica",
    description: "Salida directa de navegación continua al Río Paraguay.",
    top: 52.5,
    left: 7.0,
  },
  {
    id: 11,
    label: "Guardería Náutica",
    category: "Vida náutica",
    description: "Hangar techado para guarda y bajada de embarcaciones.",
    top: 37.5,
    left: 14.0,
  },
  {
    id: 12,
    label: "Barrio Regatas Norte",
    category: "Residencial",
    description: "Penínsulas residenciales rodeadas de agua y vegetación.",
    top: 48.5,
    left: 17.0,
  },
];

export default function ProjectSection() {
  const { t } = useTranslation();
  const [activeSpot, setActiveSpot] = useState<AmenityHotspot | null>(null);

  const keyFeatures = [
    "97 Lotes Náuticos Exclusivos",
    "Amarras Propias de Calado Profundo",
    "Laguna WaveTech & Playas",
    "Seguridad Integral 24/7",
  ];

  return (
    <SectionWrapper
      id="el-proyecto"
      background="#0c3a54"
      className="relative py-12 lg:py-20 overflow-hidden text-white w-full"
    >
      {/* Resplandores ambientales de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#001e33]  blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[400px] bg-[#001e33] blur-[140px]"
      />

      {/* 1. Cabecera Editorial */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 mb-8 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#001e33] border border-[#88DBDF]/30 text-[#88DBDF] text-xs uppercase tracking-[0.25em] font-semibold mb-4 backdrop-blur-md"
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
          className="mt-3 font-textos text-sm sm:text-base lg:text-lg text-[#D9D9D6]/85 font-light leading-relaxed max-w-2xl mx-auto"
        >
          {t("elProyecto.body")}
        </motion.p>
      </div>

      {/* 2. MAPA A PANTALLA COMPLETA (FULL-WIDTH 100%) */}
      <div className="w-full relative px-2 sm:px-4 lg:px-6 mb-8">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#001e33] border border-white/10 shadow-2xl">
          
          {/* Scroll horizontal automático en móvil para proteger el render */}
          <div className="relative w-full overflow-x-auto no-scrollbar">
            <div className="relative w-full min-w-[760px] sm:min-w-full">
              
              {/* Imagen del mapa que ocupa todo el ancho */}
              <LazyImage
                src={PROJECT_MASTERPLAN.src}
                alt={t("elProyecto.imageAlt")}
                className="w-full h-auto block select-none pointer-events-none"
              />

              {/* Sombra de contraste */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* 12 HOTSPOTS NUMERADOS */}
              {AMENITIES_LIST.map((item) => {
                const isSelected = activeSpot?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ top: `${item.top}%`, left: `${item.left}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSpot(isSelected ? null : item)}
                      className="group relative flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-125"
                      aria-label={`Punto ${item.id}: ${item.label}`}
                    >
                      {isSelected && (
                        <span className="absolute -inset-2 rounded-full bg-[#E5B263]/50 animate-ping pointer-events-none" />
                      )}

                      <span
                        className={`relative flex h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 items-center justify-center rounded-full border border-[#E5B263] bg-[#001e33] font-['VANITAS'] text-[9px] sm:text-[11px] lg:text-xs font-bold text-white shadow-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-[#E5B263] text-[#002f4d] border-white scale-110 shadow-[0_0_15px_rgba(229,178,99,0.9)]"
                            : "group-hover:border-white group-hover:bg-[#004068]"
                        }`}
                      >
                        {item.id}
                      </span>
                    </button>

                    {/* Tooltip Card descriptivo */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-48 sm:w-56 rounded-xl bg-[#00273f]/95 backdrop-blur-md p-3 text-left shadow-2xl border border-[#E5B263]/60 z-30 pointer-events-none"
                        >
                          <div className="flex items-center gap-1.5 text-[#E5B263] mb-1">
                            <Sparkles size={12} />
                            <span className="font-textos text-xs font-bold uppercase tracking-wider">
                              {item.id}. {item.label}
                            </span>
                          </div>
                          <p className="font-textos text-[11px] text-[#D9D9D6]/90 leading-snug">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Badge Superior */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#002f4d]/85 backdrop-blur-md text-[#D9D9D6] text-[9px] sm:text-xs font-textos tracking-widest uppercase font-semibold border border-white/10 shadow-lg">
                  Planta General • Masterplan
                </span>
              </div>

              {/* Indicador inferior */}
              <div className="absolute bottom-3 left-3 sm:left-4 z-10 flex items-center gap-2 bg-[#002f4d]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#E5B263] animate-pulse" />
                <span className="font-textos text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D9D9D6]/90">
                  Tocá un número para ver el detalle
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* 3. BARRA INFERIOR DE AMENITIES RESPONSIVE */}
        <div className="w-full mt-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {AMENITIES_LIST.map((amenity) => {
              const isCurrent = activeSpot?.id === amenity.id;
              return (
                <button
                  key={amenity.id}
                  onClick={() => setActiveSpot(isCurrent ? null : amenity)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isCurrent
                      ? "bg-white/15 border border-[#E5B263]/70 scale-105"
                      : "bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all ${
                      isCurrent
                        ? "border-white bg-[#E5B263] text-[#002f4d]"
                        : "border-[#E5B263]/80 bg-[#0c3a54] text-white"
                    }`}
                  >
                    {amenity.id}
                  </span>
                  <span
                    className={`font-textos text-[11px] sm:text-xs whitespace-nowrap transition-colors ${
                      isCurrent ? "text-[#E5B263] font-semibold" : "text-[#D9D9D6]"
                    }`}
                  >
                    {amenity.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Barra de Diferenciales + Botones CTA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10"
        >


          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full shrink-0 mx-auto">
  <a
    href="#contacto"
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#E5B263] hover:bg-[#D4A152] text-[#003452] px-7 py-3.5 font-textos text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-[#E5B263]/25 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
  >
    <Download size={16} />
    <span>Descargar Masterplan PDF</span>
  </a>

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