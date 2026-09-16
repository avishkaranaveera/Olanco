import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import { RootLayout } from '@/components/layout/RootLayout';

// Each page is a separate chunk, fetched on navigation. RootLayout wraps the
// route <Outlet/> in <Suspense>, and <TopProgressBar/> shows while it loads.
const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ProductsPage = lazy(() =>
  import('@/pages/ProductsPage').then((m) => ({ default: m.ProductsPage })),
);
const ProductCategoryPage = lazy(() =>
  import('@/pages/ProductCategoryPage').then((m) => ({ default: m.ProductCategoryPage })),
);
const GalleryPage = lazy(() =>
  import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage })),
);
const AwardsPage = lazy(() =>
  import('@/pages/AwardsPage').then((m) => ({ default: m.AwardsPage })),
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);
const CreditsPage = lazy(() =>
  import('@/pages/CreditsPage').then((m) => ({ default: m.CreditsPage })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);

export const routes = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'products', Component: ProductsPage },
      { path: 'products/:slug', Component: ProductCategoryPage },
      { path: 'gallery', Component: GalleryPage },
      { path: 'awards', Component: AwardsPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'credits', Component: CreditsPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
];

export const router = createBrowserRouter(routes);
