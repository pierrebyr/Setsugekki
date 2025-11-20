import { HISTORY, MEMBERS } from '../constants';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 px-6 md:px-12 bg-sumi text-yuki relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal/20 -skew-x-12 -z-0 pointer-events-none blur-3xl" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        
        {/* Intro Block */}
        <div className="grid md:grid-cols-12 gap-16 mb-40">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                <span className="text-xs tracking-[0.3em] uppercase text-gray-500 block mb-4">Formation & Histoire</span>
                <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                Hiver <br/>
                <span className="text-gray-600 text-4xl md:text-5xl italic font-light">2018</span>
                </h2>
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[1px] bg-white/20 mb-8" 
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-light leading-loose text-lg font-serif text-justify"
            >
              Le trio s'est formé presque par accident lors d'une nuit de décembre au Blue Note Tokyo. Misaki jouait un set solo, Kenta l'a rejointe, et Reina a emprunté la batterie. Ils ont joué jusqu'à 4h du matin sous la première neige de l'année.
              <br/><br/>
              <span className="text-white/80">« Comme la neige qui tombe, la lune qui change, et les fleurs qui s'ouvrent puis fanent, notre jazz est vivant, impermanent. »</span>
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="md:col-span-7 pl-0 md:pl-12 border-l border-white/5 relative">
            <div className="space-y-16">
              {HISTORY.map((event, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative pl-10"
                >
                  <span className="absolute left-[-5px] top-[0.6rem] w-2 h-2 rounded-full border border-gray-600 group-hover:bg-white group-hover:border-white transition-all duration-500" />
                  <div className="flex items-baseline gap-6 mb-2">
                    <span className="text-xs font-sans tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{event.year}</span>
                    <h4 className="font-serif text-2xl text-gray-200">{event.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed max-w-md group-hover:text-gray-300 transition-colors duration-500">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Members Block */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-4 mb-16 justify-center"
          >
             <div className="h-[1px] w-12 bg-gray-700" />
             <h3 className="text-sm tracking-[0.5em] uppercase text-gray-400">Les Musiciens</h3>
             <div className="h-[1px] w-12 bg-gray-700" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {MEMBERS.map((member, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="group relative cursor-none"
               >
                 <div className="aspect-[3/4] overflow-hidden mb-6 relative bg-gray-900">
                   <OptimizedImage
                     src={member.image}
                     alt={member.name}
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                   />
                   
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-sumi/80 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-end p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                         <p className="text-white/90 text-sm font-serif leading-relaxed italic mb-4 border-l-2 border-white/20 pl-4">
                           "{member.description}"
                         </p>
                      </div>
                   </div>
                 </div>
                 
                 <div className="text-center relative z-30">
                   <h3 className="text-xl font-serif tracking-wide group-hover:text-white transition-colors text-gray-300">{member.name}</h3>
                   <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-600 mt-2">{member.role}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};