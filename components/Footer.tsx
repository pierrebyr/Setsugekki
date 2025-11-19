import React from 'react';
import { Instagram, Mail, Disc, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-gray-400 py-24 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 mb-12">
        
        <div className="md:col-span-5">
           <h3 className="text-4xl font-serif text-white mb-8 tracking-wide">雪月花</h3>
           <p className="text-sm leading-loose font-light max-w-xs text-gray-500 mb-12">
             Setsugekka Trio.<br/>
             Une exploration du jazz contemporain à travers l'esthétique japonaise de l'impermanence.
           </p>
           <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white transition-colors"
           >
             <ArrowUp size={14} />
             Retour en haut
           </button>
        </div>

        <div className="md:col-span-7 flex flex-col md:flex-row justify-end items-start md:items-center h-full">
          <div className="flex gap-4">
             {[Instagram, Mail, Disc].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-sumi hover:border-white transition-all duration-300 group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
             ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-700">
        <p>&copy; 2025 Setsugekka Trio.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-500">Privacy Policy</a>
          <a href="#" className="hover:text-gray-500">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};