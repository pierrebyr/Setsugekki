import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText, Image, Music, Mail } from 'lucide-react';
import { MEMBERS, PRESS_QUOTES } from '../constants';
import { OptimizedImage } from '../components/OptimizedImage';
import { fadeInUpVariants, easeOut } from '../animations';

export const PressKitPage = () => {
  const downloadItems = [
    {
      title: 'Biographie Complète',
      description: 'Historique du groupe, philosophie et parcours artistique',
      icon: FileText,
      format: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'Photos Presse HD',
      description: 'Pack de 10 photos haute résolution pour publication',
      icon: Image,
      format: 'ZIP',
      size: '45 MB'
    },
    {
      title: 'Logos & Assets',
      description: 'Logo en différents formats (SVG, PNG, EPS)',
      icon: Image,
      format: 'ZIP',
      size: '8 MB'
    },
    {
      title: 'Extraits Audio',
      description: 'Sélection de 3 morceaux en qualité presse',
      icon: Music,
      format: 'ZIP',
      size: '120 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-sumi pt-36 pb-32">
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
            className="inline-flex items-center gap-2 text-gray-600 hover:text-sumi transition-colors text-sm uppercase tracking-widest"
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
          className="mb-16 border-b border-sumi/10 pb-8"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gray-500 block mb-4">
            Ressources Média
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Press Kit</h1>
          <p className="text-gray-600 font-serif italic max-w-xl">
            Téléchargez tous les assets nécessaires pour vos articles, interviews et publications.
          </p>
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-serif mb-8">Téléchargements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-sumi/10 p-6 hover:border-vermilion/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <item.icon size={24} className="text-vermilion" />
                  <span className="text-xs text-gray-500">
                    {item.format} • {item.size}
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-2 group-hover:text-vermilion transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-sumi group-hover:text-vermilion transition-colors">
                  <Download size={14} />
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-serif mb-8">Biographie Courte</h2>
          <div className="bg-gray-50 p-8 border-l-4 border-vermilion">
            <p className="font-serif leading-loose text-gray-700">
              <strong>Setsugekka Trio</strong> (雪月花) est un trio de jazz contemporain formé à Tokyo en 2018.
              Composé de Misaki Horiguchi (piano), Kenta Tanaka (contrebasse) et Reina Yamashita (batterie),
              le groupe fusionne la tradition du jazz avec l'esthétique minimaliste japonaise. Leur nom,
              signifiant "Neige, Lune, Fleurs", évoque le concept bouddhiste de la beauté éphémère.
              Après deux albums acclamés par la critique, ils se préparent à sortir leur opus hivernal
              "Fuyu no Shirabe" fin 2025.
            </p>
          </div>
        </motion.div>

        {/* Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-serif mb-8">Les Musiciens</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {MEMBERS.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="aspect-square overflow-hidden mb-4 bg-gray-200">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <h3 className="font-serif text-lg">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Press Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-serif mb-8">Citations Presse</h2>

          <div className="space-y-6">
            {PRESS_QUOTES.map((quote, idx) => (
              <div key={idx} className="border-l-2 border-vermilion/50 pl-6 py-2">
                <p className="font-serif italic text-lg text-gray-700 mb-2">"{quote.quote}"</p>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  — {quote.source} {quote.rating && `• ${quote.rating}`}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...easeOut, delay: 0.6 }}
          className="bg-sumi text-yuki p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif mb-2">Contact Presse</h3>
              <p className="text-gray-400">Pour toute demande d'interview ou d'information complémentaire</p>
            </div>
            <a
              href="mailto:press@setsugekka.jp"
              className="inline-flex items-center gap-3 bg-white text-sumi px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
            >
              <Mail size={18} />
              press@setsugekka.jp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
