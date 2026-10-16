import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Images } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";
import Lightbox from "../shared/Lightbox";
import { BARRIOS, PROJECT_MASTERPLAN } from "../../data/content";

/**
 * Barrios — rediseñada (ajuste del cliente 12/10):
 * al hacer clic en un barrio se resalta ese barrio sobre la planta general
 * y se muestra su ficha (nombre + descripción + renders).
 */
export default function BarriosSection() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(BARRIOS[0]?.id ?? "");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const names: string[] = (t("barrios.names", { returnObjects: true }) as string[]) ?? [];
  const descriptions: string[] = (t("barrios.descriptions", { returnObjects: true }) as string[]) ?? [];

  const activeIndex = Math.max(0, BARRIOS.findIndex((b) => b.id === activeId));
  const active = BARRIOS[activeIndex];
  const activeImages = active
    ? [active.image, ...(active.secondaryImages ?? [])].map(
        (f) => `/Renders Aquadelta/${active.folderPath}/${f}`,
      )
    : [];

  const nameOf = (id: string) => names[BARRIOS.findIndex((b) => b.id === id)] ?? id;
  const descOf = (id: string) => descriptions[BARRIOS.findIndex((b) => b.id === id)] ?? "";

  return (
    <SectionWrapper id="barrios" background="#D9D9D6" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl">
            {t("barrios.title")}
          </h2>
          <p className="mt-6 font-textos text-base sm:text-lg leading-relaxed text-azul/80">
            {t("barrios.body")}
          </p>
        </div>

        {/* Planta general con el barrio resaltado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full overflow-x-auto no-scrollbar rounded-3xl border border-azul/15 bg-[#0c3a54] shadow-[0_25px_60px_rgba(12,58,84,0.25)]"
        >
          <div className="relative w-full min-w-[760px] sm:min-w-full">
            <img
              src={PROJECT_MASTERPLAN.src}
              alt={t("barrios.planAlt", "Planta general de Aquadelta")}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-[#0c3a54]/35 pointer-events-none" />

            {/* Hotspots de los barrios habilitados */}
            {BARRIOS.map((barrio, index) => {
              const isActive = barrio.id === activeId;
              if (!barrio.planHotspot) return null;
              return (
                <button
                  key={barrio.id}
                  type="button"
                  onClick={() => setActiveId(barrio.id)}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    top: `${barrio.planHotspot.top}%`,
                    left: `${barrio.planHotspot.left}%`,
                  }}
                  aria-label={nameOf(barrio.id)}
                >
                  {isActive && (
                    <>
                      <span className="absolute -inset-6 rounded-full border-2 border-[#E5B263] animate-ping pointer-events-none" />
                      <span className="absolute -inset-7 rounded-full border border-white/40 pointer-events-none" />
                    </>
                  )}
                  <span
                    className={`relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full font-titulares text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 ${
                      isActive
                        ? "bg-[#E5B263] text-[#002f4d] scale-110 shadow-[0_0_20px_rgba(229,178,99,0.9)]"
                        : "bg-[#002f4d]/90 text-white border border-[#E5B263]/70 group-hover:scale-110"
                    }`}
                  >
                    {index + 1}
                  </span>
                </button>
              );
            })}

            {/* Chip con el nombre del barrio activo */}
            {active && (
              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#002f4d]/90 backdrop-blur-md border border-white/20 px-4 py-2 font-textos text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D9D9D6]">
                  <span className="h-2 w-2 rounded-full bg-[#E5B263] animate-pulse" />
                  {nameOf(active.id)}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Ficha + tarjetas */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Ficha del barrio activo */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white/70 border border-azul/10 p-7 sm:p-8 shadow-[0_18px_40px_rgba(12,58,84,0.12)]">
            <div>
              <span className="font-textos text-[10px] font-bold uppercase tracking-[0.35em] text-[#005587]">
                {t("barrios.badge", "Barrio habilitado")}
              </span>
              <h3 className="mt-3 font-titulares text-2xl sm:text-3xl uppercase tracking-[0.14em] text-azul">
                {active ? nameOf(active.id) : ""}
              </h3>
              <p className="mt-4 font-textos text-sm sm:text-base text-azul/80 font-light leading-relaxed">
                {active ? descOf(active.id) : ""}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-azul hover:bg-[#0c3a54]/90 text-white px-6 py-3 font-textos text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Images size={15} className="text-[#88DBDF]" />
                <span>{t("barrios.verFotos", "Ver renders")}</span>
              </button>
            </div>
          </div>

          {/* Tarjetas de los 3 barrios */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BARRIOS.map((barrio, index) => {
              const isActive = barrio.id === activeId;
              return (
                <button
                  key={barrio.id}
                  type="button"
                  onClick={() => setActiveId(barrio.id)}
                  className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#E5B263] shadow-[0_18px_40px_rgba(12,58,84,0.28)] scale-[1.02]"
                      : "border-azul/10 hover:border-[#E5B263]/60"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0c3a54]">
                    <img
                      src={`/Renders Aquadelta/${barrio.folderPath}/${barrio.image}`}
                      alt={nameOf(barrio.id)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c3a54]/85 via-[#0c3a54]/10 to-transparent" />
                    <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#002f4d]/90 border border-[#E5B263]/70 font-titulares text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="font-titulares text-base sm:text-lg uppercase tracking-[0.14em] text-white">
                      {nameOf(barrio.id)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox de renders del barrio activo */}
      <Lightbox
        images={activeImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={active ? nameOf(active.id) : undefined}
      />
    </SectionWrapper>
  );
}
