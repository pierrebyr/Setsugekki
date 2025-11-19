import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 px-6 bg-sumi text-yuki relative border-t border-white/10">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-24">
        
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <h2 className="text-5xl md:text-7xl font-serif mb-8">Contact</h2>
           <p className="text-lg font-serif text-gray-400 italic mb-12">
             Pour les demandes de booking, presse, ou collaboration.
           </p>

           <div className="space-y-12 mt-24">
             <div>
               <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Management</h4>
               <p className="text-2xl font-serif text-white mb-2">Blue Note Japan Productions</p>
               <p className="text-gray-400">Tokyo, Minato-ku</p>
             </div>

             <div>
               <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Booking Europe (2026)</h4>
               <p className="text-xl font-serif text-gray-200">TBA / En négociations</p>
             </div>

             <div className="pt-12 border-t border-white/10">
                <a href="mailto:contact@setsugekka.jp" className="group inline-flex items-center gap-4 text-3xl md:text-4xl font-serif hover:text-gray-300 transition-colors">
                  <span>contact@setsugekka.jp</span>
                  <ArrowUpRight className="opacity-50 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                </a>
             </div>
           </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 md:p-12 backdrop-blur-sm"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Nom Complet</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl"
                placeholder="Votre nom"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl"
                placeholder="votre@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Sujet</label>
              <select className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl appearance-none cursor-pointer">
                <option className="bg-sumi text-gray-400">Sélectionner un sujet</option>
                <option className="bg-sumi">Booking Concert</option>
                <option className="bg-sumi">Presse / Interview</option>
                <option className="bg-sumi">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white focus:border-white focus:outline-none transition-colors font-serif text-xl resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button className="w-full bg-white text-sumi py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gray-200 transition-colors mt-8">
              Envoyer le message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};