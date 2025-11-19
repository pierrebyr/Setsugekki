import { Variants } from 'framer-motion';

// Hook to detect if user prefers reduced motion
export const usePrefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Helper to conditionally apply animation variants
export const getVariants = (variants: Variants, prefersReducedMotion: boolean): Variants => {
  if (prefersReducedMotion) {
    // Return static variants that don't animate
    const staticVariants: Variants = {};
    Object.keys(variants).forEach(key => {
      staticVariants[key] = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      };
    });
    return staticVariants;
  }
  return variants;
};

// Common animation variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Common transition configurations
export const easeOut = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
export const easeInOut = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };
export const spring = { type: 'spring', damping: 20, stiffness: 100 };
