import { useState, useEffect, Suspense, lazy } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { CustomCursor } from './CustomCursor';
import { Preloader } from './Preloader';
import { AnimatePresence } from 'framer-motion';

const Footer = lazy(() => import('./Footer').then(m => ({ default: m.Footer })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-sumi">
    <div className="text-yuki font-serif animate-pulse">Chargement...</div>
  </div>
);

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show preloader on first visit to home page
    if (hasLoaded || location.pathname !== '/') {
      setIsLoading(false);
    }
  }, [hasLoaded, location.pathname]);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
  };

  return (
    <div className="bg-sumi min-h-screen selection:bg-white/20 selection:text-white relative">
      {/* Global Film Grain Overlay */}
      <div className="bg-noise"></div>

      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
};
