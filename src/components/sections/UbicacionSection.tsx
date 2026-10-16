import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, Compass, Plane, ShieldCheck, ExternalLink, Clock } from "lucide-react";
import SectionWrapper from "../shared/SectionWrapper";

export default function UbicacionSection() {
  const { t } = useTranslation();

  // Enlace directo de Google Maps
  const googleMapsDirectionsUrl = "https://maps.app.goo.gl/FsgpaG5vwWgyco1Y9";

  const keyConnections = [
    {
      icon: Clock,
      title: "30 MINUTOS",
      desc: "Del eje corporativo de Asunción",
    },
    {
      icon: Plane,
      title: "CONEXIÓN AÉREA",
      desc: "Aeropuerto Internacional Silvio Pettirossi",
    },
    {
      icon: ShieldCheck,
      title: "DISTRITO NORTE",
      desc: "Puente Remanso & principales accesos fluviales",
    },
  ];

  return (
    <SectionWrapper
      id="ubicacion"
      background="#0c3a54"
      className="relative py-20 lg:py-32 overflow-hidden bg-[#0c3a54] text-white w-full"
    >
      {/* Resplandores ambientales sobre el azul */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[500px] bg-[#88DBDF]/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 w-[550px] h-[450px] bg-[#001e33] rounded-full blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* 1. Columna Izquierda: Información Editorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-10 bg-[#88DBDF]" />
              <span className="font-textos text-[10px] uppercase tracking-[0.5em] text-[#88DBDF] font-bold">
                {t("ubicacion.eyebrow", "Distrito Norte")}
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="font-titulares text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.16em] uppercase text-[#D9D9D6] mb-6 leading-tight">
              {t("ubicacion.title")}
            </h2>

            {/* Párrafos descriptivos */}
            <div className="space-y-4 font-textos text-sm sm:text-base text-[#D9D9D6]/85 font-light leading-relaxed mb-8">
              <p>
                <strong className="text-white font-semibold">Aquadelta</strong> se encuentra en{" "}
                <span className="text-white font-semibold">Limpio</span>, dentro de{" "}
                <strong className="text-white font-semibold">Distrito Norte</strong> y a solo{" "}
                <span className="font-semibold text-white">30 minutos</span> del eje corporativo de Asunción.
              </p>
              <p>
                Una ubicación conectada con el{" "}
                <span className="text-white font-medium">Aeropuerto Internacional</span>, el{" "}
                <span className="text-white font-medium">Puente Remanso</span> y los principales servicios de la zona.
              </p>
            </div>

            {/* Tarjetas de conexiones en vidrio sobre azul */}
            <div className="space-y-3.5">
              {keyConnections.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/12 shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white/[0.1] hover:scale-[1.02]"
                  >
                    <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#88DBDF] shrink-0 shadow-inner">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="block font-titulares text-xs sm:text-sm uppercase tracking-wider text-white font-bold mb-0.5">
                        {item.title}
                      </span>
                      <span className="block font-textos text-xs text-[#D9D9D6]/85 font-light">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* 2. Columna Derecha: Imagen de Mapa integrada al azul (sin marco blanco) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-3xl h-[450px] sm:h-[500px] lg:h-[550px] bg-[#0c3a54] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] group">

              {/* Imagen del mapa desde public/ */}
              <img
                src="/aquamap.jpeg"
                alt={t("ubicacion.mapAlt", "Mapa de ubicación de Aquadelta")}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Sombra suave de contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3a54]/70 via-transparent to-[#0c3a54]/20 pointer-events-none" />

              {/* Badge Flotante Superior */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c3a54]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-textos tracking-widest uppercase font-bold border border-white/20 shadow-lg">
                  <MapPin size={13} className="text-[#E5B263]" />
                  <span>Aquadelta Barrio Cerrado • Limpio</span>
                </div>
              </div>

              {/* Botón Flotante Inferior para abrir en Google Maps */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c3a54] hover:bg-[#0c3a54]/90 text-white text-xs font-textos font-medium tracking-wide shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
                >
                  <Compass size={14} className="text-[#E5B263]" />
                  <span>{t("ubicacion.mapsCta", "Abrir en Google Maps")}</span>
                  <ExternalLink size={13} className="text-[#E5B263]" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}
