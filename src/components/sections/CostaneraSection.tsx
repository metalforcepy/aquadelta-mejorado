import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import Carousel from "../shared/Carousel";
import { COSTANERA_HERO, COSTANERA_PLANO, COSTANERA_CAROUSEL } from "../../data/content";

export default function CostaneraSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Parallax: image moves at 30% of scroll speed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <SectionWrapper
      id="la-costanera"
      background="#005587"
      className="py-0 overflow-hidden"
    >
      <div ref={containerRef}>
        {/* ── Parallax Hero Image ── */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <motion.div
            className="absolute inset-0 h-[120%] -top-[10%]"
            style={{ y: parallaxY }}
          >
            <img
              src={COSTANERA_HERO.src}
              alt={COSTANERA_HERO.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-azul via-azul/40 to-transparent" />
        </div>

        {/* ── Text Content ── */}
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-32">
          <div className="text-center">
            <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-tiza uppercase sm:text-4xl lg:text-5xl">
              {t('costanera.title')}
            </h2>
            {t('costanera.subtitle') && (
              <p className="mt-4 inline-block rounded-full border border-turquesa/30 bg-turquesa/10 px-6 py-2 font-textos text-sm font-semibold tracking-wider text-turquesa uppercase">
                {t('costanera.subtitle')}
              </p>
            )}
            {t('costanera.highlight') && (
              <p className="mt-4 font-destacados text-2xl text-turquesa sm:text-3xl lg:text-4xl">
                {t('costanera.highlight')}
              </p>
            )}
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            {t('costanera.body').split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="font-textos text-lg leading-relaxed text-tiza/80"
              >
                {paragraph.replace(/\n/g, " ")}
              </p>
            ))}
          </div>
        </div>

        {/* ── Carousel Gallery ── */}
        {COSTANERA_CAROUSEL && COSTANERA_CAROUSEL.length > 0 && (
          <div className="mx-auto max-w-[1200px] px-6 pb-20">
            <Carousel
              slides={COSTANERA_CAROUSEL}
              autoplay={5000}
              showDots
              slidesPerView={1}
            />
          </div>
        )}

        {/* ── Plano ── */}
        <div className="mx-auto max-w-[1200px] px-6 pb-20 lg:pb-32">
          <LazyImage
            src={COSTANERA_PLANO.src}
            alt={COSTANERA_PLANO.alt}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
