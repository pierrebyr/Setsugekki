import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import { cn } from '../utils';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MENU_ITEMS = [
    ['Histoire', SectionId.ABOUT],
    ['Philosophie', SectionId.PHILOSOPHY],
    ['Musique', SectionId.MUSIC],
    ['Presse', SectionId.PRESS],
    ['Concerts', SectionId.LIVE],
    ['Contact', SectionId.CONTACT]
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out px-6 md:px-12 py-6 flex justify-between items-center",
        scrolled || isOpen ? "bg-sumi/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
      )}>
        <div 
          className="relative z-50 cursor-pointer group" 
          onClick={() => scrollTo(SectionId.HERO)}
        >
          <h1 className="text-2xl font-serif font-bold tracking-[0.2em] text-yuki group-hover:opacity-70 transition-opacity">
            雪月花
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 lg:space-x-12 text-xs font-sans tracking-[0.2em] uppercase text-gray-300">
          {MENU_ITEMS.map(([label, id]) => (
            <button 
              key={id}
              onClick={() => scrollTo(id)}
              className="hover:text-white relative group overflow-hidden py-1"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50 text-yuki hover:opacity-70 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-sumi z-40 flex flex-col items-center justify-center space-y-12"
          >
            {MENU_ITEMS.map(([label, id], idx) => (
              <motion.button
                key={id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                onClick={() => scrollTo(id)}
                className="text-3xl font-serif tracking-[0.2em] text-yuki hover:text-gray-400 transition-colors"
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};