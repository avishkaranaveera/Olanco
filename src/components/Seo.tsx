import { Helmet } from 'react-helmet-async';

import { siteInfo } from '@/data/site';
import { buildSeoTags, type SeoInput } from '@/lib/seoHead';

/**
 * Sets the document title, meta description/keywords, canonical link, Open
 * Graph / Twitter card tags, and optional JSON-LD structured data for a
 * single route. This is a client-side SPA, so these tags normally only
 * update after the JS bundle runs — but `scripts/postbuild-seo.ts` bakes
 * the same tags (via the shared `buildSeoTags`) into each route's static
 * HTML at build time, so crawlers and link-preview bots that don't execute
 * JS still see the correct per-page title/description/image.
 */
export function Seo(props: SeoInput) {
  const { fullTitle, description, keywords, canonical, ogImage, jsonLdList } = buildSeoTags(props);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdList.map((entry, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
