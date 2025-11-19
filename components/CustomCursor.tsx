import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if:
    // 1. User has a fine pointer (not touch)
    // 2. User hasn't set prefers-reduced-motion
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const hasPointerFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const shouldEnable = hasHover && hasPointerFine && !prefersReducedMotion;
    setIsEnabled(shouldEnable);

    if (shouldEnable) {
      document.documentElement.classList.add('custom-cursor-enabled');
    }

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for pointers or buttons
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setHovering(!!isClickable);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
    // Note: isVisible removed from dependencies to fix infinite re-render bug
  }, [isEnabled, cursorX, cursorY]);

  // Don't render cursor if not enabled
  if (!isEnabled) return null;

  return (
    <>
      {/* Main dot - Always exact position */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Outer ring - Delayed spring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovering ? 1.5 : 1,
          opacity: isVisible ? (hovering ? 0.8 : 0.3) : 0,
          backgroundColor: hovering ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)',
          borderColor: hovering ? 'transparent' : 'white',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};
