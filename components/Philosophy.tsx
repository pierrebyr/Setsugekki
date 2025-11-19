import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const paths = [
    {
      kanji: '誠実',
      romaji: 'Seijitsu',
      meaning: 'Intégrité',
      desc: 'Toujours jouer avec honnêteté émotionnelle, jamais pour impressionner.'
    },
    {
      kanji: '空間',
      romaji: 'Kūkan',
      meaning: 'Espace',
      desc: 'Le silence est aussi important que le son. Le concept de Ma (間).'
    },
    {
      kanji: '無常',
      romaji: 'Mujō',
      meaning: 'Impermanence',
      desc: 'Accepter que chaque performance est unique, éphémère et vivante.'
    }
  ];

  return (
    <section id={SectionId.PHILOSOPHY} className="relative py-40 bg-paper text-sumi overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="block text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Philosophie</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-sumi/90">三つの道</h2>
            <div className="w-12 h-[1px] bg-sumi/20 mx-auto my-6"></div>
            <p className="text-gray-500 font-serif italic tracking-wider">Mittsu no Michi</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 md:divide-x md:divide-sumi/10">
          {paths.map((path, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-12 h-48 flex items-center justify-center">
                 <span className="vertical-text text-7xl md:text-8xl font-serif text-sumi/10 group-hover:text-sumi/20 transition-colors duration-700 select-none">
                    {path.kanji}
                 </span>
                 
                 {/* Red Seal Effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-vermilion rounded-sm opacity-0 group-hover:opacity-60 transition-opacity duration-700 rotate-45" />
              </div>
              
              <h4 className="text-2xl font-serif font-bold mb-3 tracking-wide">{path.romaji}</h4>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-6">{path.meaning}</h5>
              
              <p className="text-sm md:text-base font-serif leading-loose text-gray-700 max-w-[240px] opacity-80">
                {path.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-40 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-600 leading-relaxed max-w-3xl mx-auto">
            "Le silence n'est pas une absence de son,<br/> mais une attente."
          </blockquote>
          <div className="mt-8 flex flex-col items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
            <span>Pas de playback</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Pas d'overdubs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};