import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import SectionWrapper from "../shared/SectionWrapper";
import { GALERIA_VIDEO, GALERIA_RENDERS } from "../../data/content";

import "swiper/css";
import "swiper/css/pagination";

/**
 * Galería — rediseñada (ajuste del cliente 12/10):
 * "TODO LO QUE IMAGINÁS, EN UN SOLO LUGAR" mostrando las imágenes
 * con el patrón de Aqualake (una imagen grande al centro y las laterales asomando).
 * El video institucional se conserva debajo.
 */
export default function GallerySection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Lazy-load del video cuando la sección está a 200px del viewport
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

  const slides = (GALERIA_RENDERS ?? []).map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <SectionWrapper id="galeria" background="#0c3a54" className="py-20 lg:py-28 overflow-hidden">
      <div ref={containerRef} className="mx-auto max-w-[1500px] px-4 sm:px-6">

        {/* ── Encabezado ── */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#88DBDF]/30 bg-white/[0.04] px-4 py-1.5 font-textos text-[10px] uppercase tracking-[0.3em] text-[#88DBDF] font-semibold mb-5">
            {t("galeria.badge", "Masterplan & Amenities")}
          </span>
          <h2 className="font-titulares text-3xl font-extrabold tracking-[0.16em] text-[#D9D9D6] uppercase sm:text-4xl lg:text-5xl">
            {t("galeria.title")}
          </h2>
          <p className="mt-4 font-textos text-lg text-[#88DBDF] sm:text-xl">
            {t("galeria.highlight")}
          </p>
        </div>

        {/* ── Carrusel tipo Aqualake: imagen grande al centro ── */}
        {slides.length > 0 && (
          <div
            className="relative -mx-4 sm:mx-0
                       [&_.swiper-slide]:opacity-45 [&_.swiper-slide]:scale-[0.92]
                       [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-500
                       [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide-active]:scale-100
                       [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination-bullet]:!bg-[#D9D9D6]
                       [&_.swiper-pagination-bullet-active]:!bg-[#E5B263]"
          >
            <Swiper
              modules={[Autoplay, Pagination, Keyboard]}
              centeredSlides
              loop
              keyboard={{ enabled: true }}
              spaceBetween={16}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              slidesPerView={1.08}
              breakpoints={{
                768: { slidesPerView: 1.2, spaceBetween: 24 },
                1024: { slidesPerView: 1.35, spaceBetween: 32 },
              }}
              className="!pb-12"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <figure className="overflow-hidden rounded-2xl lg:rounded-3xl border border-white/10 bg-[#001e33] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-[240px] w-full object-cover sm:h-[340px] lg:h-[520px]"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* ── Video institucional ── */}
        <div className="mx-auto mt-16 w-full lg:w-[70%]">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
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
              /* Placeholder (misma proporción) mientras carga el video */
              <div className="relative aspect-video w-full bg-azul/50">
                <img
                  src="/Renders Aquadelta/Costanera/COSTANERA - PERSPECTIVA 01.jpeg"
                  alt="Cargando video..."
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-textos text-sm text-tiza/40">Cargando video...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
