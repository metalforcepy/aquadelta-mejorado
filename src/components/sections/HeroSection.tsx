import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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

  // Barra de datos del hero: SIN iconos (ajuste del cliente 12/10)
  const HERO_METRICS = [
    { hasPlus: true, value: "200", labelKey: "hero.stats.hectareas", fallback: "Hectáreas" },
    { hasPlus: false, value: "9", labelKey: "hero.stats.barrios", fallback: "Barrios" },
    { hasPlus: false, value: "10", labelKey: "hero.stats.financiacion", fallback: "Años de Financiación" },
    { hasPlus: false, value: "30", labelKey: "hero.stats.ejeCorporativo", fallback: "Min del Eje Corporativo" },
    {
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
          className="font-titulares text-3xl sm:text-4xl lg:text-5xl text-[#D9D9D6] drop-shadow-md font-normal tracking-[0.06em]"
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

      {/* Barra de Estadísticas — contenedor semitransparente, sin iconos */}
      <div className="relative z-10 w-full px-4 pb-8 sm:pb-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-5xl rounded-3xl sm:rounded-full bg-[#002f4d]/35 backdrop-blur-2xl border border-white/20 ring-1 ring-inset ring-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] py-5 sm:py-6 px-6 sm:px-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 sm:gap-y-0 text-center items-center">
            {HERO_METRICS.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center px-3 ${
                  idx !== HERO_METRICS.length - 1
                    ? "lg:border-r lg:border-white/15"
                    : ""
                } ${
                  idx % 2 === 0 && idx === HERO_METRICS.length - 1
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                {/* Número / Valor */}
                <div className="flex items-center justify-center font-['VANITAS'] text-3xl sm:text-4xl font-bold tracking-tight text-white leading-none">
                  {item.hasPlus && (
                    <span className="text-[#88DBDF] mr-0.5 text-2xl font-light">+</span>
                  )}
                  <span>{item.value}</span>
                </div>

                {/* Etiqueta */}
                <span className="mt-2 font-['Lota_Grotesque'] text-[10px] sm:text-[11px] tracking-[0.18em] text-[#D9D9D6]/85 uppercase font-medium leading-tight">
                  {t(item.labelKey, item.fallback)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
