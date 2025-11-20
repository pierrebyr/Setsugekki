import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';

// Lazy load pages for better performance
const AlbumPage = lazy(() => import('./pages/AlbumPage').then(m => ({ default: m.AlbumPage })));
const TourPage = lazy(() => import('./pages/TourPage').then(m => ({ default: m.TourPage })));
const PressKitPage = lazy(() => import('./pages/PressKitPage').then(m => ({ default: m.PressKitPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-sumi">
    <div className="text-yuki font-serif animate-pulse">Chargement...</div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'album/:albumId',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AlbumPage />
          </Suspense>
        ),
      },
      {
        path: 'tour',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TourPage />
          </Suspense>
        ),
      },
      {
        path: 'press-kit',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PressKitPage />
          </Suspense>
        ),
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <GalleryPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
