import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Compass, CalendarCheck, Clock, TrendingUp } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";
import VideoBackground from "../shared/VideoBackground";
import { HERO_LOGO } from "../../data/content";

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToContactOrProject = () => {
    const el = document.getElementById("el-proyecto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const HERO_METRICS = [
    {
      icon: MapPin,
      hasPlus: true,
      value: "200",
      labelKey: "hero.stats.hectareas",
      fallback: "Hectáreas",
    },
    {
      icon: Compass,
      hasPlus: false,
      value: "9",
      labelKey: "hero.stats.barrios",
      fallback: "Barrios",
    },
    {
      icon: CalendarCheck,
      hasPlus: false,
      value: "10",
      labelKey: "hero.stats.financiacion",
      fallback: "Años de Financiación",
    },
    {
      icon: Clock,
      hasPlus: false,
      value: "30",
      labelKey: "hero.stats.ejeCorporativo",
      fallback: "Min del Eje Corporativo",
    },
    {
      icon: TrendingUp,
      hasPlus: false,
      // Valor dinámico traducido (ALTA / HIGH / ALTA)
      value: t("hero.stats.plusvaliaValue", "ALTA"),
      labelKey: "hero.stats.plusvalia",
      fallback: "Plusvalía",
    },
  ];

  return (
    <SectionWrapper
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#005587]"
    >
      {/* Video de fondo con overlay suave */}
      <VideoBackground
        mp4="/video/hero.mp4"
        webm="/video/hero.webm"
        poster="/video/hero-poster.webp"
        fallbackImages={[
          "/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 01.jpeg",
          "/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 02.jpeg",
        ]}
        overlay="rgba(0, 50, 80, 0.45)"
      />

      {/* Espaciador superior */}
      <div className="h-20" />

      {/* Centro: Logo + Slogan + Botón CTA */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center my-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={HERO_LOGO}
          alt={t("hero.logoAlt", "Aquadelta")}
          className="h-auto w-40 sm:w-52 lg:w-64 drop-shadow-lg"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-['Silver_South_Script'] text-3xl sm:text-4xl lg:text-5xl text-[#D9D9D6] drop-shadow-md font-normal"
        >
          {t("brand.slogan", "Redescubrí la vida sobre el río")}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          onClick={scrollToContactOrProject}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[#E5B263] hover:bg-[#D4A152] px-9 py-3.5 font-['Lota_Grotesque'] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#003452] shadow-[0_4px_20px_rgba(229,178,99,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(229,178,99,0.5)]"
        >
          {t("hero.cta", "Quiero más info")}
        </motion.button>
      </div>

      {/* Barra de Estadísticas Ultra Transparente (Glassmorphism Sutil) */}
      <div className="relative z-10 w-full px-4 pb-8 sm:pb-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-3xl sm:rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.25)] py-4 sm:py-5 px-6 sm:px-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 sm:gap-y-0 text-center items-center">
            {HERO_METRICS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center px-3 ${
                    idx !== HERO_METRICS.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  } ${
                    idx % 2 === 0 && idx === HERO_METRICS.length - 1
                      ? "col-span-2 sm:col-span-1"
                      : ""
                  }`}
                >
                  {/* Ícono sutil translúcido */}
                  <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center mb-1.5 text-[#88DBDF]">
                    <IconComponent size={18} strokeWidth={1.8} />
                  </div>

                  {/* Número / Valor */}
                  <div className="flex items-center justify-center font-['VANITAS'] text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none">
                    {item.hasPlus && (
                      <span className="text-[#88DBDF] mr-0.5 text-xl font-light">
                        +
                      </span>
                    )}
                    <span>{item.value}</span>
                  </div>

                  {/* Etiqueta */}
                  <span className="mt-1 font-['Lota_Grotesque'] text-[10px] sm:text-[11px] tracking-[0.14em] text-[#D9D9D6]/85 uppercase font-medium leading-tight">
                    {t(item.labelKey, item.fallback)}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}