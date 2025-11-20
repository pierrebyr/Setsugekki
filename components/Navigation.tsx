import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SectionId } from '../types';
import { cn } from '../utils';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MenuItem {
  label: string;
  href: string;
  isSection?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Histoire', href: `/#${SectionId.ABOUT}`, isSection: true },
  { label: 'Musique', href: `/#${SectionId.MUSIC}`, isSection: true },
  { label: 'Concerts', href: '/tour' },
  { label: 'Galerie', href: '/gallery' },
  { label: 'Presse', href: '/press-kit' },
  { label: 'Contact', href: `/#${SectionId.CONTACT}`, isSection: true }
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isSection?: boolean) => {
    setIsOpen(false);

    if (isSection) {
      const sectionId = href.replace('/#', '');

      if (location.pathname !== '/') {
        // Navigate to home then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const element = document.getElementById(SectionId.HERO);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out px-6 md:px-12 py-6 flex justify-between items-center",
        scrolled || isOpen ? "bg-sumi/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
      )} role="navigation" aria-label="Navigation principale">
        <button
          onClick={handleLogoClick}
          className="relative z-50 group"
          aria-label="Retour à l'accueil"
        >
          <h1 className="text-2xl font-serif font-bold tracking-[0.2em] text-yuki group-hover:opacity-70 transition-opacity">
            雪月花
          </h1>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12 text-xs font-sans tracking-[0.2em] uppercase text-gray-300">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href, item.isSection)}
              className="hover:text-white relative group overflow-hidden py-1"
              aria-label={`Aller à ${item.label}`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-yuki hover:opacity-70 transition-opacity" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-sumi z-40 flex flex-col items-center justify-center space-y-12"
          >
            {MENU_ITEMS.map((item, idx) => (
              <motion.button
                key={item.href}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.5 }}
                onClick={() => handleNavClick(item.href, item.isSection)}
                className="text-3xl font-serif tracking-[0.2em] text-yuki hover:text-gray-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
