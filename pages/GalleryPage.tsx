import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';
import { fadeInUpVariants, easeOut } from '../animations';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  date: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=400&auto=format&fit=crop',
    title: 'Concert au Blue Note',
    date: 'Octobre 2024',
    location: 'Tokyo'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=400&auto=format&fit=crop',
    title: 'Session d\'enregistrement',
    date: 'Septembre 2024',
    location: 'Studio'
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop',
    title: 'Live Session - First Frost',
    date: 'Août 2024',
    location: 'Cotton Club'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop',
    title: 'Backstage Tokyo Jazz',
    date: 'Juillet 2024',
    location: 'Tokyo'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1490750967868-58cb75062ed0?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1490750967868-58cb75062ed0?q=80&w=400&auto=format&fit=crop',
    title: 'Shooting Album',
    date: 'Juin 2024',
    location: 'Kyoto'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=400&auto=format&fit=crop',
    title: 'Winter Session',
    date: 'Mai 2024',
    location: 'Hokkaido'
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400&auto=format&fit=crop',
    title: 'Making Of - Fuyu no Shirabe',
    date: 'Avril 2024',
    location: 'Studio'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=400&auto=format&fit=crop',
    title: 'Portrait Misaki',
    date: 'Mars 2024',
    location: 'Tokyo'
  }
];

export const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = galleryItems.filter(
    item => filter === 'all' || item.type === filter
  );

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-sumi text-yuki pt-36 pb-32">
      <div className="max-w-7xl mx-auto px-6">
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
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Galerie</h1>
          <p className="text-gray-400 font-serif italic">Photos et vidéos du trio</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          {(['all', 'image', 'video'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-xs uppercase tracking-widest transition-colors ${
                filter === f
                  ? 'bg-white text-sumi'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'
              }`}
            >
              {f === 'all' ? 'Tout' : f === 'image' ? 'Photos' : 'Vidéos'}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="aspect-square overflow-hidden relative group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <OptimizedImage
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-sm font-serif">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
                onClick={closeLightbox}
                aria-label="Fermer"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-6 text-white/70 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                aria-label="Précédent"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                className="absolute right-6 text-white/70 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                aria-label="Suivant"
              >
                <ChevronRight size={48} />
              </button>

              {/* Content */}
              <div
                className="max-w-5xl max-h-[80vh] w-full mx-6"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredItems[selectedIndex].type === 'image' ? (
                  <img
                    src={filteredItems[selectedIndex].src}
                    alt={filteredItems[selectedIndex].title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={filteredItems[selectedIndex].src}
                      title={filteredItems[selectedIndex].title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Caption */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-serif mb-2">
                    {filteredItems[selectedIndex].title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {filteredItems[selectedIndex].date}
                    {filteredItems[selectedIndex].location &&
                      ` • ${filteredItems[selectedIndex].location}`}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
