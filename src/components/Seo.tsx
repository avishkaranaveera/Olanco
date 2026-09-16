import { Helmet } from 'react-helmet-async';

import { siteInfo } from '@/data/site';

interface SeoProps {
  title: string;
  description: string;
  /** Comma-separated keywords for this specific page. */
  keywords?: string;
  /** Path starting with "/", e.g. "/products/doors". Defaults to "/". */
  path?: string;
  /** Public path to a social preview image, e.g. "/images/hero-workshop.jpg". */
  image?: string;
  /** Extra JSON-LD structured data object(s) for this page. */
  jsonLd?: object | object[];
}

/**
 * Sets the document title, meta description/keywords, canonical link, Open
 * Graph / Twitter card tags, and optional JSON-LD structured data for a
 * single route. This is a client-side SPA, so these tags update after the
 * JS bundle runs — modern crawlers (Googlebot) render JS, but for a
 * fully static fallback, prerendering or a server-rendered framework
 * would be the next step.
 */
export function Seo({ title, description, keywords, path = '/', image, jsonLd }: SeoProps) {
  const fullTitle = path === '/' ? title : `${title} | ${siteInfo.name}`;
  const url = `${siteInfo.url}${path}`;
  const ogImage = `${siteInfo.url}${image ?? '/images/hero-workshop.jpg'}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

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
