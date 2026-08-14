import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarouselProps {
  slides: { src: string; alt: string }[];
  autoplay?: number;
  showDots?: boolean;
  showArrows?: boolean;
  slidesPerView?: number;
  slidesPerViewDesktop?: number;
}

export default function Carousel({
  slides,
  autoplay = 5000,
  showDots = true,
  showArrows = false,
  slidesPerView = 1,
  slidesPerViewDesktop,
}: CarouselProps) {
  return (
    <div className="relative">
      {/* Navigation arrows — only rendered when showArrows is true.
           Wired via CSS class selectors so Swiper discovers them after DOM mount. */}
      {showArrows && (
        <>
          <button
            type="button"
            className="carousel-prev absolute -left-2 top-1/2 z-10 -translate-y-1/2 text-tiza transition-colors hover:bg-tiza/10 rounded-full p-2 sm:-left-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>
          <button
            type="button"
            className="carousel-next absolute -right-2 top-1/2 z-10 -translate-y-1/2 text-tiza transition-colors hover:bg-tiza/10 rounded-full p-2 sm:-right-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-10 w-10 sm:h-12 sm:w-12" />
          </button>
        </>
      )}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop
        autoplay={{ delay: autoplay, disableOnInteraction: false }}
        pagination={showDots ? { clickable: true } : false}
        navigation={
          showArrows
            ? {
                prevEl: ".carousel-prev",
                nextEl: ".carousel-next",
              }
            : false
        }
        breakpoints={{
          768: { slidesPerView: Math.min(slidesPerView, 2) },
          1024: { slidesPerView: slidesPerViewDesktop ?? Math.min(slidesPerView, 3) },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="h-full w-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
