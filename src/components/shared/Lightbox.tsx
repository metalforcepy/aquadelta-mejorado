import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

/**
 * Fullscreen lightbox/gallery overlay.
 *
 * Shows a Swiper carousel of barrio images with pagination dots
 * and prev/next navigation arrows (ChevronLeft/ChevronRight).
 * Close via X button, click outside, or Escape key.
 * AnimatePresence orchestrates enter/exit animations.
 */
export default function Lightbox({ images, isOpen, onClose, title }: LightboxProps) {

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll while lightbox is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-azul/95"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title ? `Galería: ${title}` : "Galería de imágenes"}
        >
          {/* Close button — top-right corner */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-azul/60 p-3 text-tiza transition-colors hover:bg-turquesa hover:text-azul"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Title — top-center */}
          {title && (
            <h3 className="absolute top-4 left-1/2 -translate-x-1/2 font-titulares text-xl tracking-[0.15em] text-tiza uppercase sm:text-2xl">
              {title}
            </h3>
          )}

          {/* Swiper carousel — stop click propagation so clicks inside don't close */}
          <div
            className="relative w-full max-w-5xl px-4 sm:px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation arrows — wired via CSS class selectors, not refs.
                 React refs are null during render, so Swiper cannot discover them.
                 Class selectors let Swiper query the DOM after mount. */}
            <button
              type="button"
              className="lightbox-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 text-tiza transition-colors hover:bg-azul/40 rounded-full p-2"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              type="button"
              className="lightbox-next absolute right-0 top-1/2 z-10 -translate-y-1/2 text-tiza transition-colors hover:bg-azul/40 rounded-full p-2"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".lightbox-prev",
                nextEl: ".lightbox-next",
              }}
            >
              {images.map((src) => (
                <SwiperSlide key={src}>
                  <img
                    src={src}
                    alt={title ?? "Imagen del barrio"}
                    className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
