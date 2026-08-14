import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import Carousel from "../shared/Carousel";
import { GALERIA_VIDEO, GALERIA_RENDERS } from "../../data/content";

export default function GallerySection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Lazy-load video when section is within 200px of viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const carouselSlides = (GALERIA_RENDERS ?? []).map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <SectionWrapper
      id="galeria"
      background="#005587"
      className="py-20 lg:py-32"
    >
      <div ref={containerRef} className="mx-auto max-w-[1200px] px-6">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-tiza uppercase sm:text-4xl lg:text-5xl">
            {t("galeria.title")}
          </h2>
          <p className="mt-4 font-destacados text-2xl text-turquesa sm:text-3xl lg:text-4xl">
            {t("galeria.highlight")}
          </p>
        </div>

        {/* ── Video Player ── */}
        <div className="mx-auto mb-20 w-full lg:w-[70%]">
          <div className="overflow-hidden rounded-lg shadow-xl shadow-black/30">
            {shouldLoadVideo ? (
              <video
                controls
                poster="/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 01.jpeg"
                preload="metadata"
                className="w-full"
              >
                <source src={GALERIA_VIDEO} type="video/mp4" />
                Tu navegador no soporta reproducción de video.
              </video>
            ) : (
              /* Placeholder (same height ratio) while lazy-loading */
              <div className="relative aspect-video w-full bg-azul/50">
                <img
                  src="/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 01.jpeg"
                  alt="Cargando video..."
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-textos text-sm text-tiza/40">
                    Cargando video...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Carousel Gallery ── */}
        {carouselSlides.length > 0 && (
          <div className="mx-auto">
            <Carousel
              slides={carouselSlides}
              autoplay={5000}
              showDots
              showArrows
              slidesPerView={1}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
