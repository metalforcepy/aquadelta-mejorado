import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "../shared/SectionWrapper";
import BadgeCard from "../shared/BadgeCard";
import Lightbox from "../shared/Lightbox";
import { BARRIOS } from "../../data/content";

export default function BarriosSection() {
  const { t } = useTranslation();
  const [openBarrio, setOpenBarrio] = useState<string | null>(null);

  // Barrio names from i18n
  const barrioNames: string[] = t('barrios.names', { returnObjects: true }) as string[];

  // Pre-compute image URLs using original paths under Renders Aquadelta/
  const barrioImagesMap = new Map(
    BARRIOS.map((b) => {
      const folder = `/Renders Aquadelta/${b.folderPath}`;
      const all = [b.image, ...(b.secondaryImages ?? [])];
      return [b.id, all.map((f) => `${folder}/${f}`)] as const;
    }),
  );

  const openBarrioData = openBarrio
    ? BARRIOS.find((b) => b.id === openBarrio)
    : null;
  const openBarrioImages = openBarrio ? barrioImagesMap.get(openBarrio) ?? [] : [];

  // Map barrio id to translated name
  const getBarrioName = (id: string, index: number) => barrioNames[index] ?? id;

  return (
    <SectionWrapper
      id="barrios"
      background="#D9D9D6"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="font-titulares text-3xl font-extrabold tracking-[0.2em] text-azul uppercase sm:text-4xl lg:text-5xl">
            {t('barrios.title')}
          </h2>
        </div>

        {/* Body intro — guia-desarrollo.md §6.4 verbatim */}
        <div className="mx-auto mb-16 max-w-3xl">
          <p className="font-textos text-lg leading-relaxed text-azul/80">
            {t('barrios.body')}
          </p>
        </div>

        {/* 3-card grid: 3 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BARRIOS.map((barrio, index) => {
            const mainImage = `/Renders Aquadelta/${barrio.folderPath}/${barrio.image}`;
            return (
              <BadgeCard
                key={barrio.id}
                name={getBarrioName(barrio.id, index)}
                image={mainImage}
                onClick={() => setOpenBarrio(barrio.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox overlay */}
      <Lightbox
        images={openBarrioImages}
        isOpen={openBarrio !== null}
        onClose={() => setOpenBarrio(null)}
        title={openBarrioData ? getBarrioName(openBarrioData.id, BARRIOS.findIndex(b => b.id === openBarrioData.id)) : undefined}
      />
    </SectionWrapper>
  );
}
