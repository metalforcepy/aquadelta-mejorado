import { Variants } from "framer-motion";

// Revelación suave tipo Real Estate de lujo
export const scrollRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 45,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.85, 
      ease: [0.22, 1, 0.36, 1], // Cubic bezier para movimiento natural
    } 
  }
};

// Contenedor escalonado para grids o grupos de elementos
export const staggerGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    }
  }
};