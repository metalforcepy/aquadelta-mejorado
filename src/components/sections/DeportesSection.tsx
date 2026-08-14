import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import Carousel from "../shared/Carousel";
import { DEPORTES_HERO, DEPORTES_PLANO, DEPORTES_CAROUSEL } from "../../data/content";

export default function DeportesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const heroImage = DEPORTES_HERO;
  const planoImage = DEPORTES_PLANO;

  // Parallax: hero image moves at 30% of scroll speed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <SectionWrapper
      id="deportes"
      background="#005587"
      className="py-0 overflow-hidden"
    >
      <div ref={containerRef}>
        {/* ── Parallax Hero Image ── */}
        {heroImage && (
          <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
            <motion.div
              className="absolute inset-0 h-[120%] -top-[10%]"
              style={{ y: parallaxY }}
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-azul via-azul/40 to-transparent" />
          </div>
        )}

        {/* ── Text Content ── */}
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-32">
          <div className="text-center">
            <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-tiza uppercase sm:text-4xl lg:text-5xl">
              {t('deportes.title')}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <p className="font-textos text-lg leading-relaxed text-tiza/80">
              {t('deportes.body')}
            </p>
          </div>
        </div>

        {/* ── Swiper Carousel: 4 slides, autoplay 5s, dots ── */}
        {DEPORTES_CAROUSEL && DEPORTES_CAROUSEL.length > 0 && (
          <div className="mx-auto max-w-[1200px] px-6 pb-20">
            <Carousel
              slides={DEPORTES_CAROUSEL}
              autoplay={5000}
              showDots
              slidesPerView={1}
              slidesPerViewDesktop={3}
            />
          </div>
        )}

        {/* ── Plano ── */}
        {planoImage && (
          <div className="mx-auto max-w-[1200px] px-6 pb-20 lg:pb-32">
            <LazyImage
              src={planoImage.src}
              alt={planoImage.alt}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
