import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TrendingUp, Compass, Building2, ArrowUpRight, Sparkles } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";

export default function DistritoNorteSection() {
  const { t } = useTranslation();

  const metrics = [
    {
      icon: TrendingUp,
      stat: "+168%",
      label: "Crecimiento poblacional",
      desc: "En los últimos 30 años en el departamento y zona de influencia.",
      accent: "#88DBDF",
    },
    {
      icon: Compass,
      stat: "Estratégica",
      label: "Conectividad directa",
      desc: "Acceso ágil y fluido con el eje corporativo de Asunción.",
      accent: "#E5B263",
    },
    {
      icon: Building2,
      stat: "Constante",
      label: "Crecimiento comercial",
      desc: "Expansión sostenida de infraestructura, servicios y plusvalía.",
      accent: "#88DBDF",
    },
  ];

  return (
    <SectionWrapper
      id="distrito-norte"
      background="#0c3a54"
      className="relative py-20 lg:py-32 overflow-hidden text-white w-full"
    >
      {/* Resplandores ambientales de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#88DBDF]/10 rounded-full blur-[170px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-10 w-[550px] h-[450px] bg-[#E5B263]/10 rounded-full blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera Editorial */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">
          

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-titulares text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.16em] uppercase text-[#D9D9D6] leading-tight"
          >
            El crecimiento se mueve hacia Distrito Norte
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-destacados text-2xl sm:text-3xl text-[#E5B263] font-normal max-w-2xl mx-auto"
          >
            Una ubicación pensada para vivir hoy y proyectar el mañana
          </motion.p>
        </div>

        {/* 3 Columnas de Estadísticas y Crecimiento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * idx }}
                className="relative group rounded-3xl p-8 sm:p-10 bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Cabecera de Tarjeta: Ícono + Flecha decorativa */}
                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="h-12 w-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shadow-inner"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      borderColor: `${item.accent}30`,
                      color: item.accent,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div className="h-8 w-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Valor Principal / Stat */}
                <div>
                  <span 
                    className="block font-titulares text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2"
                    style={{ color: item.accent }}
                  >
                    {item.stat}
                  </span>

                  <h3 className="font-titulares text-base sm:text-lg uppercase tracking-wider text-white font-semibold mb-3">
                    {item.label}
                  </h3>

                  <p className="font-textos text-xs sm:text-sm text-[#D9D9D6]/80 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Línea de resplandor decorativa inferior */}
                <div
                  className="mt-8 h-1 w-full rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${item.accent} 0%, transparent 100%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}