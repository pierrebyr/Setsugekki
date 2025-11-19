import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { AnimatePresence } from 'framer-motion';

// Lazy load heavy components for better performance
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Philosophy = lazy(() => import('./components/Philosophy').then(m => ({ default: m.Philosophy })));
const Discography = lazy(() => import('./components/Discography').then(m => ({ default: m.Discography })));
const TourDates = lazy(() => import('./components/TourDates').then(m => ({ default: m.TourDates })));
const Press = lazy(() => import('./components/Press').then(m => ({ default: m.Press })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-sumi">
    <div className="text-yuki font-serif animate-pulse">Chargement...</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="bg-sumi min-h-screen selection:bg-white/20 selection:text-white relative">
      {/* Global Film Grain Overlay */}
      <div className="bg-noise"></div>
      
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          
          <main className="relative z-0">
            <Hero />
            
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Philosophy />
              <Discography />
              <Press />
              <TourDates />
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
