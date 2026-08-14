import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  background?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  background,
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 45 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldReduceMotion ? 0.3 : 0.85, 
        ease: [0.22, 1, 0.36, 1] // Curva suave tipo Boa Vista Village
      } 
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: background }}
    >
      {children}
    </motion.section>
  );
}