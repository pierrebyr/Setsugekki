import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById(SectionId.ABOUT);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.HERO} ref={containerRef} className="relative h-screen w-full overflow-hidden bg-sumi text-yuki">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop" 
          alt="Tokyo Night Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sumi via-transparent to-sumi/50 z-20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center pointer-events-none">
        
        <div className="flex flex-row-reverse items-center gap-8 md:gap-24 p-8">
           {/* Vertical Kanji Title - Fixed Alignment */}
           <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 4 }} 
            className="flex space-x-6 md:space-x-12 overflow-hidden py-2"
           >
             <div className="flex flex-col space-y-8 md:space-y-16 text-5xl md:text-9xl font-serif font-bold leading-none text-white mix-blend-overlay opacity-90 filter drop-shadow-2xl">
                <motion.span 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 4.5, duration: 1 }}
                >雪</motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 4.7, duration: 1 }}
                >月</motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 40 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 4.9, duration: 1 }}
                >花</motion.span>
             </div>
           </motion.div>

           {/* English Title & Description */}
           <div className="text-right md:text-right pr-4 border-r border-white/20 py-12 flex flex-col justify-center">
             <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5.2, duration: 0.8 }}
                className="text-xs md:text-sm tracking-[0.5em] uppercase font-sans text-gray-400 mb-6"
             >
               Tokyo Contemporary Trio
             </motion.h2>
             <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 5.4, duration: 0.8 }}
                className="text-4xl md:text-7xl font-serif font-light tracking-tight mb-8"
             >
               Setsugekka
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.8, duration: 1 }}
                className="font-serif italic text-gray-400 text-sm md:text-lg max-w-[240px] ml-auto leading-loose"
             >
               "Neige, Lune, Fleurs."<br/>
               La beauté éphémère des choses.
             </motion.p>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 cursor-pointer pointer-events-auto group"
        onClick={handleScrollDown}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">Découvrir</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
      </motion.div>
    </section>
  );
};