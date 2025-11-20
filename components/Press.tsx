import { SectionId } from '../types';
import { PRESS_QUOTES, NEWS_ITEMS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const Press: React.FC = () => {
  return (
    <section id={SectionId.PRESS} className="py-32 px-6 bg-paper text-sumi relative overflow-hidden">
      {/* Subtle paper texture pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 border-b border-sumi/10 pb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gray-500 block mb-4">News & Reviews</span>
          <h2 className="text-5xl md:text-6xl font-serif text-sumi">Reconnaissance</h2>
        </motion.div>

        {/* Press Quotes */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {PRESS_QUOTES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col justify-between h-full border-l-2 border-vermilion/50 pl-6 py-2"
            >
              <div>
                <div className="text-vermilion mb-4 text-lg tracking-widest">{item.rating}</div>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-gray-800 mb-6">
                  "{item.quote}"
                </p>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">— {item.source}</p>
            </motion.div>
          ))}
        </div>

        {/* News Section */}
        <div className="mt-32">
          <h3 className="text-3xl font-serif mb-12 flex items-center gap-4">
             <span className="w-2 h-2 bg-sumi rounded-full"></span>
             Actualité 2025
          </h3>

          <div className="grid lg:grid-cols-2 gap-16">
            {NEWS_ITEMS.map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden mb-6 relative bg-gray-200">
                  <OptimizedImage
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sumi">
                    {news.category}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 font-mono">{news.date}</span>
                  <h4 className="text-2xl md:text-3xl font-serif group-hover:text-vermilion transition-colors duration-300">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mt-2 font-serif text-sm md:text-base">
                    {news.content}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-sumi transition-colors">
                    <span>Lire l'article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};