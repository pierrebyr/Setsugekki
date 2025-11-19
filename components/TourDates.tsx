import React, { useState } from 'react';
import { TOUR_DATES } from '../constants';
import { SectionId } from '../types';
import { Ticket, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { fadeInUpVariants, easeOut } from '../animations';

export const TourDates: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [ticketLink, setTicketLink] = useState<string>('');

  const handleBooking = (city: string, link?: string) => {
    setSelectedCity(city);
    setTicketLink(link || '');
  };

  const closeModal = () => {
    setSelectedCity(null);
    setTicketLink('');
  };

  return (
    <section id={SectionId.LIVE} className="py-32 px-6 bg-yuki text-sumi min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          transition={easeOut}
          className="flex flex-col md:flex-row justify-between items-end mb-24"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-4">Tournée</h2>
            <p className="text-gray-500 font-serif italic text-lg">Winter Tour 2025 — "Fuyu no Shirabe"</p>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Next Show</p>
             <p className="text-xl font-serif">Tokyo, Japan</p>
          </div>
        </motion.div>
        
        <div className="border-t border-sumi">
          {TOUR_DATES.map((gig, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ ...easeOut, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-gray-300 hover:border-sumi transition-colors px-2 relative overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="md:w-1/5 mb-2 md:mb-0">
                 <div className="text-sm font-sans font-bold tracking-widest text-gray-400 group-hover:text-sumi transition-colors">
                   {gig.date}
                 </div>
              </div>

              <div className="md:w-2/5 mb-4 md:mb-0">
                 <div className="text-3xl md:text-4xl font-serif group-hover:translate-x-4 transition-transform duration-500 ease-out">
                   {gig.city}
                 </div>
                 <div className="text-sm text-gray-500 font-light mt-2 group-hover:translate-x-4 transition-transform duration-500 delay-75">{gig.venue}</div>
              </div>
              
              <div className="md:w-1/5 flex justify-start md:justify-end items-center mt-4 md:mt-0">
                 {gig.status === 'Sold Out' ? (
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-4 py-2 rounded-full cursor-not-allowed">
                     Complet
                   </span>
                 ) : (
                   <button 
                    onClick={() => handleBooking(gig.city, gig.ticketLink)}
                    className="group/btn flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-sumi text-white px-6 py-3 rounded-full hover:bg-vermilion transition-colors duration-300"
                    aria-label={`Réserver des billets pour ${gig.city}`}
                   >
                     <span>Billets</span>
                     <Ticket size={14} className="group-hover/btn:rotate-12 transition-transform" />
                   </button>
                 )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          transition={easeOut}
          className="mt-32 text-center"
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest max-w-md mx-auto leading-relaxed mb-8">
            Avertissement
          </p>
          <p className="text-lg font-serif text-gray-600 italic max-w-2xl mx-auto">
            "Pour préserver l'expérience du concert et le caractère éphémère de notre musique, nous demandons au public de ne pas filmer ni photographier durant la performance."
          </p>
        </motion.div>
      </div>

      {/* Ticket Modal */}
      <Modal isOpen={!!selectedCity} onClose={closeModal} title="Billetterie">
        <div className="space-y-6">
          <p className="text-lg font-serif">
            Vous souhaitez réserver des billets pour le concert à <strong className="text-white">{selectedCity}</strong>.
          </p>
          
          {ticketLink ? (
            <div className="space-y-4">
              <p className="text-gray-400">Vous allez être redirigé vers la plateforme de billetterie officielle.</p>
              <a
                href={ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-sumi px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
              >
                Accéder à la billetterie
                <ExternalLink size={18} />
              </a>
            </div>
          ) : (
            <p className="text-gray-400">
              Les billets ne sont pas encore en vente. Revenez bientôt ou contactez-nous pour plus d'informations.
            </p>
          )}
          
          <button
            onClick={closeModal}
            className="w-full mt-6 border border-gray-700 text-gray-300 px-6 py-3 rounded hover:bg-white/5 transition-colors"
          >
            Fermer
          </button>
        </div>
      </Modal>
    </section>
  );
};
