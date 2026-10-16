import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, Compass, Building2 } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";

/**
 * Distrito Norte — rediseñada (ajuste del cliente 12/10):
 * foto de fondo + la frase "INVERTÍ EN LA CIUDAD DONDE TODO ESTÁ MIGRANDO"
 * y los 3 datos, sin subtítulo en amarillo.
 */
export default function DistritoNorteSection() {
  const { t } = useTranslation();

  const metrics = [
    {
      icon: TrendingUp,
      stat: "+168%",
      label: "Crecimiento poblacional",
      desc: "En los últimos 30 años en el departamento y zona de influencia.",
    },
    {
      icon: Compass,
      stat: "Estratégica",
      label: "Conectividad directa",
      desc: "Acceso ágil y fluido con el eje corporativo de Asunción.",
    },
    {
      icon: Building2,
      stat: "Constante",
      label: "Crecimiento comercial",
      desc: "Expansión sostenida de infraestructura, servicios y plusvalía.",
    },
  ];

  return (
    <SectionWrapper
      id="distrito-norte"
      background="#0c3a54"
      className="relative py-24 lg:py-36 overflow-hidden text-white w-full"
    >
      {/* Foto de fondo del entorno del proyecto */}
      <img
        src="/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 02.jpeg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#0c3a54]/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0c3a54] via-[#0c3a54]/60 to-[#0c3a54]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Cabecera — solo la frase */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="font-titulares text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-[0.12em] uppercase text-[#D9D9D6] leading-tight"
          >
            {t("distritoNorte.title")}
          </motion.h2>
        </div>

        {/* 3 Columnas de Estadísticas y Crecimiento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={`flex flex-col items-center text-center px-4 ${
                  idx !== metrics.length - 1 ? "md:border-r md:border-white/15" : ""
                }`}
              >
                <div className="mb-5 text-[#88DBDF]">
                  <Icon size={30} strokeWidth={1.3} />
                </div>

                <span className="font-titulares text-3xl sm:text-4xl text-[#D9D9D6] mb-2 leading-none">
                  {item.stat}
                </span>

                <span className="font-textos text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white font-bold mb-3">
                  {item.label}
                </span>

                <p className="font-textos text-sm text-[#D9D9D6]/75 font-light leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
