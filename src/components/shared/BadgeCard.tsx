import { motion, useReducedMotion } from "framer-motion";

interface BadgeCardProps {
  name: string;
  image: string;
  href?: string;
  onClick?: () => void;
}

/**
 * Barrio card with hover scale + overlay intensify.
 *
 * Clicking opens the lightbox gallery for that barrio.
 * Hover effects are disabled when prefers-reduced-motion is active.
 */
export default function BadgeCard({ name, image, onClick }: BadgeCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReduced ? undefined : { scale: 1.03 }}
      onClick={onClick}
      className="group relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
    >
      {/* Background image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay — intensifies on hover */}
      <div className="absolute inset-0 bg-azul/40 transition-opacity duration-300 group-hover:bg-azul/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
        <h3 className="font-titulares text-2xl text-white tracking-[0.2em] uppercase">
          {name}
        </h3>
        <span className="mt-2 inline-block rounded-full bg-turquesa px-4 py-1 font-textos text-sm font-semibold text-azul">
          Ver más
        </span>
      </div>
    </motion.div>
  );
}
