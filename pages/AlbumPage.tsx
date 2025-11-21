import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';
import { ALBUMS, SOCIAL_LINKS } from '../constants';
import { OptimizedImage } from '../components/OptimizedImage';
import { fadeInUpVariants, easeOut } from '../animations';

export const AlbumPage = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const albumIndex = albumId ? parseInt(albumId, 10) : 0;
  const album = ALBUMS[albumIndex];

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sumi text-yuki">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Album non trouvé</h1>
          <Link to="/" className="text-vermilion hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Album Cover */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={easeOut}
          >
            <div className="aspect-square overflow-hidden bg-gray-900 shadow-2xl">
              <OptimizedImage
                src={album.cover}
                alt={album.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Album Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ ...easeOut, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-bold text-vermilion uppercase tracking-widest mb-4">
              {album.year} • {album.label}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">{album.title}</h1>
            <p className="text-gray-400 font-serif leading-relaxed mb-8">
              {album.description}
            </p>

            {/* Streaming Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={SOCIAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 transition-colors text-sm uppercase tracking-widest"
              >
                <Play size={16} />
                Spotify
              </a>
              <a
                href={SOCIAL_LINKS.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 transition-colors text-sm uppercase tracking-widest"
              >
                <ExternalLink size={16} />
                Apple Music
              </a>
              <a
                href={SOCIAL_LINKS.bandcamp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 transition-colors text-sm uppercase tracking-widest"
              >
                <ExternalLink size={16} />
                Bandcamp
              </a>
            </div>

            {/* Tracklist */}
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                Tracklist ({album.trackCount} pistes)
              </h3>
              <ul className="space-y-4">
                {album.tracklist.map((track, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-white/10 hover:border-white/30 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 text-xs w-6">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
                      <span className="font-serif group-hover:text-white transition-colors">
                        {track.title}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Other Albums */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-32"
        >
          <h3 className="text-2xl font-serif mb-8">Autres Albums</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ALBUMS.filter((_, i) => i !== albumIndex).map((otherAlbum, i) => {
              const otherIndex = ALBUMS.findIndex(a => a.title === otherAlbum.title);
              return (
                <Link
                  key={i}
                  to={`/album/${otherIndex}`}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-gray-900 mb-4">
                    <OptimizedImage
                      src={otherAlbum.cover}
                      alt={otherAlbum.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <h4 className="font-serif text-lg group-hover:text-white transition-colors text-gray-300">
                    {otherAlbum.title}
                  </h4>
                  <p className="text-xs text-gray-500">{otherAlbum.year}</p>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
