import { Instagram, Mail, Disc, ArrowUp, Music2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { Newsletter } from './Newsletter';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-gray-400 py-24 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 mb-12">
        
        <div className="md:col-span-5">
           <h3 className="text-4xl font-serif text-white mb-6 tracking-wide">雪月花</h3>
           <p className="text-sm leading-loose font-light max-w-xs text-gray-500 mb-8">
             Setsugekka Trio.<br/>
             Une exploration du jazz contemporain à travers l'esthétique japonaise de l'impermanence.
           </p>
           <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white transition-colors"
            aria-label="Retourner en haut de la page"
           >
             <ArrowUp size={14} />
             Retour en haut
           </button>
        </div>

        <div className="md:col-span-3">
          <Newsletter />
        </div>

        <div className="md:col-span-4 flex flex-col md:flex-row justify-end items-start md:items-center h-full gap-8">
          <div className="flex flex-col gap-4 mr-8">
            <h4 className="text-xs uppercase tracking-widest text-gray-600 mb-2">Streaming</h4>
            <a 
              href={SOCIAL_LINKS.spotify} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Music2 size={16} />
              Spotify
            </a>
            <a 
              href={SOCIAL_LINKS.appleMusic} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Music2 size={16} />
              Apple Music
            </a>
            <a 
              href={SOCIAL_LINKS.bandcamp} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              <Disc size={16} />
              Bandcamp
            </a>
          </div>

          <div className="flex gap-4">
             <a 
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-sumi hover:border-white transition-all duration-300 group"
             >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
             </a>
             <a 
              href={SOCIAL_LINKS.email}
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-sumi hover:border-white transition-all duration-300 group"
             >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
             </a>
             <a 
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-sumi hover:border-white transition-all duration-300 group"
             >
                <Music2 size={20} className="group-hover:scale-110 transition-transform" />
             </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-700">
        <p>&copy; 2025 Setsugekka Trio. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-500">Privacy Policy</a>
          <a href="#" className="hover:text-gray-500">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};
