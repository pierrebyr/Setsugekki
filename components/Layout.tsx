import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { CustomCursor } from './CustomCursor';
import { AnimatePresence } from 'framer-motion';

const Footer = lazy(() => import('./Footer').then(m => ({ default: m.Footer })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-sumi">
    <div className="text-yuki font-serif animate-pulse">Chargement...</div>
  </div>
);

export const Layout = () => {
  return (
    <div className="bg-sumi min-h-screen selection:bg-white/20 selection:text-white relative">
      {/* Global Film Grain Overlay */}
      <div className="bg-noise"></div>

      <CustomCursor />

      <Navigation />

      <main className="relative z-0">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </AnimatePresence>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};
