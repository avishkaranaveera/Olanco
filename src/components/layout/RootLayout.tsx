import { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';

import { Seo } from '@/components/Seo';
import { BackToTop } from '@/components/layout/BackToTop';
import { ConstellationBackground } from '@/components/layout/ConstellationBackground';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { StickyMobileCta } from '@/components/layout/StickyMobileCta';
import { TopProgressBar } from '@/components/layout/TopProgressBar';
import { PageLoader } from '@/components/ui/PageLoader';
import { siteInfo } from '@/data/site';
import { localBusinessJsonLd } from '@/lib/structuredData';

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Seo
        title={`${siteInfo.name} — ${siteInfo.tagline}`}
        description={siteInfo.description}
        keywords={siteInfo.keywords}
        jsonLd={localBusinessJsonLd()}
      />
      <ConstellationBackground />
      <TopProgressBar />
      <Header />

      <main className="flex-1 pb-20 md:pb-0">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <StickyMobileCta />
      <ScrollRestoration />
    </div>
  );
}
