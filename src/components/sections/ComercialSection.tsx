import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import LazyImage from "../shared/LazyImage";
import { COMERCIAL_HERO, COMERCIAL_ESCUELA } from "../../data/content";

export default function ComercialSection() {
  const { t } = useTranslation();
  const mainImage = COMERCIAL_HERO;      // COMERCIO - PERSPECTIVA 01
  const secondaryImage = COMERCIAL_ESCUELA; // COMERCIO - PEATON ESCUELA 01

  return (
    <SectionWrapper
      id="zona-comercial"
      background="#D9D9D6"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* ── Main Two-Column Layout: image left + text right ── */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Main image — left column on desktop */}
          {mainImage && (
            <div className="w-full lg:w-1/2">
              <LazyImage
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Text — right column on desktop */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl">
              {t("comercial.title")}
            </h2>

            <div className="mt-10">
              <p className="font-textos text-lg leading-relaxed text-azul/80">
                {t("comercial.body")}
              </p>
            </div>

            {/* Secondary image with caption */}
            {secondaryImage && (
              <div className="mt-12">
                <LazyImage
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="mt-4 text-center font-textos text-sm font-semibold text-azul/60">
                  Escuela integrada al predio
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
