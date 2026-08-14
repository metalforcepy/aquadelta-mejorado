import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import { PASEO_CENTRAL_IMAGES } from "../../data/content";

export default function PaseoCentralSection() {
  const { t } = useTranslation();
  const mainImage = PASEO_CENTRAL_IMAGES[0]; // PASEO CENTRAL - PEATON 01
  const corte01 = PASEO_CENTRAL_IMAGES[1];   // CORTE 01
  const corte02 = PASEO_CENTRAL_IMAGES[2];   // CORTE 02

  // Accordion state: which technical cuts are expanded
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const cortes = [
    { image: corte01, label: "Corte 01" },
    { image: corte02, label: "Corte 02" },
  ].filter((c) => c.image); // only if image data exists

  return (
    <SectionWrapper
      id="paseo-central"
      background="#D9D9D6"
      className="relative py-20 lg:py-32"
    >
      {/* Turquesa 15% opacity overlay on tiza base.
          SectionWrapper.background maps to backgroundColor (solid only),
          so the gradient effect is achieved with an absolute-positioned div. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(136, 219, 223, 0.15)" }}
        aria-hidden="true"
      />

      {/* All content above the overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl">
              {t('paseoCentral.title')}
            </h2>
            {t('paseoCentral.highlight') && (
              <p className="mt-4 font-destacados text-2xl text-turquesa sm:text-3xl lg:text-4xl">
                {t('paseoCentral.highlight')}
              </p>
            )}
          </div>

          {/* Body text */}
          <div className="mx-auto mb-16 max-w-3xl">
            <p className="font-textos text-lg leading-relaxed text-azul/80">
              {t('paseoCentral.body')}
            </p>
          </div>
        </div>

        {/* Full-width main image */}
        {mainImage && (
          <div className="mb-16">
            <LazyImage
              src={mainImage.src}
              alt={mainImage.alt}
              className="w-full object-cover max-h-[70vh]"
            />
          </div>
        )}

        {/* Technical cuts — expandable accordion */}
        {cortes.length > 0 && (
          <div className="mx-auto max-w-[1200px] px-6">
            <h3 className="mb-8 text-center font-titulares text-xl tracking-[0.15em] text-azul/60 uppercase">
              Cortes técnicos
            </h3>

            <div className="mx-auto max-w-3xl space-y-4">
              {cortes.map((corte, i) => {
                const isOpen = expanded.has(i);
                return (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg border border-azul/10 bg-tiza/50"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left font-textos text-lg font-semibold text-azul transition-colors hover:bg-turquesa/10"
                      aria-expanded={isOpen}
                    >
                      <span>{corte.label}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-turquesa flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-turquesa flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <LazyImage
                          src={corte.image.src}
                          alt={corte.image.alt}
                          className="w-full rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
