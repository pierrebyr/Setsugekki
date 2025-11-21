import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Ticket, ChevronLeft, ChevronRight } from 'lucide-react';
import { TOUR_DATES } from '../constants';
import { fadeInUpVariants, easeOut } from '../animations';

export const TourPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 10)); // November 2025

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Parse tour dates to check if they fall on a specific day
  const getTourDateForDay = (day: number) => {
    return TOUR_DATES.find(tourDate => {
      const [dayStr, monthStr, yearStr] = tourDate.date.split(' ');
      const tourDay = parseInt(dayStr, 10);
      const tourMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(monthStr.slice(0, 3));
      const tourYear = parseInt(yearStr, 10);

      return tourDay === day &&
             tourMonth === currentMonth.getMonth() &&
             tourYear === currentMonth.getFullYear();
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Sold Out':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'Few Tickets':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-green-500/20 text-green-400 border-green-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-sumi text-yuki pt-36 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={easeOut}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={easeOut}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Tournée 2025-2026</h1>
          <p className="text-gray-400 font-serif italic">Calendrier complet des concerts</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.2 }}
            className="bg-white/5 p-8 backdrop-blur-sm"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-white/10 transition-colors"
                aria-label="Mois précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <h3 className="text-xl font-serif">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-white/10 transition-colors"
                aria-label="Mois suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map(day => (
                <div key={day} className="text-center text-xs text-gray-500 uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty cells for days before the first day of month */}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const tourDate = getTourDateForDay(day);

                return (
                  <div
                    key={day}
                    className={`aspect-square flex items-center justify-center text-sm rounded ${
                      tourDate
                        ? 'bg-vermilion text-white font-bold cursor-pointer hover:bg-vermilion/80 transition-colors'
                        : 'text-gray-400 hover:bg-white/5'
                    }`}
                    title={tourDate ? `${tourDate.venue}, ${tourDate.city}` : undefined}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tour Dates List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easeOut, delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
              <Calendar size={24} />
              Prochains Concerts
            </h3>

            <div className="space-y-6">
              {TOUR_DATES.map((tourDate, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-6 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">
                        {tourDate.date}
                      </span>
                      <h4 className="text-xl font-serif group-hover:text-white transition-colors">
                        {tourDate.venue}
                      </h4>
                    </div>
                    <span className={`px-3 py-1 text-xs uppercase tracking-widest border ${getStatusColor(tourDate.status)}`}>
                      {tourDate.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin size={14} />
                    {tourDate.city}, {tourDate.country}
                  </div>

                  {tourDate.status !== 'Sold Out' && (
                    <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-vermilion hover:text-white transition-colors">
                      <Ticket size={14} />
                      Réserver
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
