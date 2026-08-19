import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Plane, 
  ShieldCheck, 
  ExternalLink,
  Clock
} from "lucide-react";
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
      background="#D9D9D6"
      className="relative py-20 lg:py-32 overflow-hidden bg-[#D9D9D6] text-[#0c3a54] w-full"
    >
      {/* Resplandores ambientales sobre fondo claro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-20 w-[600px] h-[500px] bg-white/70 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 w-[550px] h-[450px] bg-[#E5B263]/15 rounded-full blur-[130px]"
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
            {/* Badge de Categoría */}


            {/* Título Principal */}
            <h2 className="font-titulares text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.16em] uppercase text-[#0c3a54] mb-6 leading-tight">
              Ubicación Estratégica
            </h2>

            {/* Párrafos descriptivos */}
            <div className="space-y-4 font-textos text-sm sm:text-base text-[#0c3a54]/90 font-light leading-relaxed mb-8">
              <p>
                <strong className="text-[#0c3a54] font-semibold">Aquadelta</strong> se encuentra en{" "}
                <span className="text-[#0c3a54] font-semibold">Limpio</span>, dentro de{" "}
                <strong className="text-[#0c3a54] font-semibold">Distrito Norte</strong> y a solo{" "}
                <span className="font-semibold text-[#0c3a54]">30 minutos</span> del eje corporativo de Asunción.
              </p>
              <p>
                Una ubicación conectada con el{" "}
                <span className="text-[#0c3a54] font-medium">Aeropuerto Internacional</span>, el{" "}
                <span className="text-[#0c3a54] font-medium">Puente Remanso</span> y los principales servicios de la zona.
              </p>
            </div>

            {/* Rectángulos en Azul (#0c3a54) */}
            <div className="space-y-3.5 mb-8">
              {keyConnections.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#0c3a54] border border-white/10 shadow-[0_10px_25px_rgba(12,58,84,0.22)] transition-all duration-300 hover:bg-[#0c3a54]/90 hover:scale-[1.02]"
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

            {/* Botón CTA */}
            <div>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E5B263] hover:bg-[#D4A152] text-[#003452] px-9 py-4 font-textos text-xs sm:text-sm uppercase tracking-wider font-bold shadow-xl shadow-[#E5B263]/30 transition-all duration-300 hover:scale-105 active:scale-95 text-center group"
              >
                <Navigation size={16} className="transition-transform group-hover:-translate-y-0.5" />
                <span>Cómo llegar</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </motion.div>

          {/* 2. Columna Derecha: Imagen de Mapa (/aquamap.jpeg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl p-3 sm:p-4 bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_25px_60px_rgba(12,58,84,0.14)]">
              <div className="relative overflow-hidden rounded-2xl w-full h-[450px] sm:h-[500px] lg:h-[550px] bg-[#0c3a54] shadow-inner group">
                
                {/* Imagen del mapa desde public/ */}
                <img
                  src="/aquamap.jpeg"
                  alt="Mapa de ubicación de Aquadelta"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Sombra suave de contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

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
                    <span>Abrir en Google Maps</span>
                    <ExternalLink size={13} className="text-[#E5B263]" />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  );
}