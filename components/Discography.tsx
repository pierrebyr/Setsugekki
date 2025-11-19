import React, { useState } from 'react';
import { ALBUMS } from '../constants';
import { SectionId, Album } from '../types';
import { Play, Disc3, Headphones, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Discography: React.FC = () => {
  const [expandedAlbum, setExpandedAlbum] = useState<number | null>(null);

  const toggleAlbum = (index: number) => {
    setExpandedAlbum(expandedAlbum === index ? null : index);
  };

  return (
    <section id={SectionId.MUSIC} className="py-32 px-6 bg-[#0a0a0a] text-paper relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-5xl font-serif mb-4 text-white">Discographie</h2>
             <p className="text-gray-500 text-sm tracking-wider font-light">Écoute & Sorties</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:flex items-center gap-8 text-xs text-gray-600 uppercase tracking-widest"
          >
            <a href="#" className="hover:text-white transition-colors">Spotify</a>
            <a href="#" className="hover:text-white transition-colors">Apple Music</a>
            <a href="#" className="hover:text-white transition-colors">Bandcamp</a>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Featured / Latest Album Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:row-span-2 group cursor-pointer relative h-fit"
            onClick={() => toggleAlbum(2)}
          >
             <div className="relative aspect-square overflow-hidden bg-stone-900 mb-8 shadow-2xl">
                <img 
                   src={ALBUMS[2].cover} 
                   alt={ALBUMS[2].title} 
                   className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                   <ChevronDown className={`text-white transition-transform duration-300 ${expandedAlbum === 2 ? 'rotate-180' : ''}`} size={24} />
                </div>
             </div>
             
             <div className="flex justify-between items-start">
               <div>
                 <span className="text-xs font-bold text-vermilion uppercase tracking-widest mb-2 block">Sortie : {ALBUMS[2].year}</span>
                 <h3 className="text-3xl md:text-5xl font-serif mb-3 text-white">{ALBUMS[2].title}</h3>
                 <p className="text-gray-400 text-sm">{ALBUMS[2].label}</p>
               </div>
             </div>
             <p className="mt-6 text-gray-500 font-serif font-light leading-relaxed max-w-md">
                {ALBUMS[2].description}
             </p>

             <AnimatePresence>
              {expandedAlbum === 2 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-8 border-t border-white/10 pt-6"
                >
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Tracklist</h4>
                  <ul className="space-y-3">
                    {ALBUMS[2].tracklist.map((track, i) => (
                      <li key={i} className="flex justify-between text-sm font-serif text-gray-300 hover:text-white cursor-default">
                        <span><span className="text-gray-600 mr-4 text-xs">{i + 1 < 10 ? `0${i+1}` : i+1}</span> {track.title}</span>
                        <span className="text-gray-600 text-xs font-sans">{track.duration}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
             </AnimatePresence>
          </motion.div>

          {/* Other Albums List */}
          <div className="space-y-16 lg:pt-8">
             {ALBUMS.slice(0, 2).map((album, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col border-b border-white/5 pb-12 last:border-0"
                >
                  <div 
                    className="flex gap-6 md:gap-12 group cursor-pointer"
                    onClick={() => toggleAlbum(idx)}
                  >
                    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-gray-800 overflow-hidden relative shadow-lg">
                       <img src={album.cover} alt={album.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <div className="flex flex-col justify-center py-2 w-full">
                      <div className="flex justify-between items-start">
                         <h3 className="text-xl md:text-3xl font-serif mb-3 group-hover:text-white transition-colors text-gray-200">{album.title}</h3>
                         <ChevronDown size={20} className={`text-gray-600 transition-transform duration-300 ${expandedAlbum === idx ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-500 mb-4">
                        <span>{album.year}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full" />
                        <span>{album.trackCount} Pistes</span>
                      </div>
                      <p className="text-sm text-gray-500 font-light line-clamp-2 leading-relaxed max-w-xs group-hover:text-gray-400 transition-colors">
                        {album.description}
                      </p>
                      
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">
                        <Headphones size={14} />
                        <span>Détails</span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedAlbum === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6 pl-0 md:pl-[15rem]"
                      >
                        <ul className="space-y-2 bg-white/5 p-6 rounded-sm">
                          {album.tracklist.map((track, i) => (
                            <li key={i} className="flex justify-between text-xs md:text-sm font-serif text-gray-300">
                              <span><span className="text-gray-500 mr-4">{i + 1}.</span> {track.title}</span>
                              <span className="text-gray-500 font-sans">{track.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};