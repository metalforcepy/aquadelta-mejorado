import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";

export default function UbicacionSection() {
  const { t } = useTranslation();

  return (
    <SectionWrapper
      id="ubicacion"
      background="#D9D9D6"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl">
            {t('ubicacion.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-textos text-lg leading-relaxed text-azul/80">
            {t('ubicacion.body')}
          </p>
        </div>

        {/* Google Maps embed */}
        <div className="overflow-hidden rounded-lg shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=Aquadelta+Asunción+Paraguay&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "0.5rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Aquadelta"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
