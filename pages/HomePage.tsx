import { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';

const About = lazy(() => import('../components/About').then(m => ({ default: m.About })));
const Philosophy = lazy(() => import('../components/Philosophy').then(m => ({ default: m.Philosophy })));
const Discography = lazy(() => import('../components/Discography').then(m => ({ default: m.Discography })));
const TourDates = lazy(() => import('../components/TourDates').then(m => ({ default: m.TourDates })));
const Press = lazy(() => import('../components/Press').then(m => ({ default: m.Press })));
const Contact = lazy(() => import('../components/Contact').then(m => ({ default: m.Contact })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-sumi">
    <div className="text-yuki font-serif animate-pulse">Chargement...</div>
  </div>
);

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Philosophy />
        <Discography />
        <Press />
        <TourDates />
        <Contact />
      </Suspense>
    </>
  );
};
