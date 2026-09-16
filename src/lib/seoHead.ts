import { siteInfo } from '../data/site.ts';

export interface SeoInput {
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

export interface SeoTags {
  fullTitle: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage: string;
  jsonLdList: object[];
}

/**
 * Pure data builder for a page's SEO tags — shared by the client-side
 * `<Seo>` component (src/components/Seo.tsx) and the build-time
 * `scripts/postbuild-seo.ts` script, so the tags a crawler sees in the static
 * HTML and the tags React sets after hydration are always identical.
 */
export function buildSeoTags({
  title,
  description,
  keywords,
  path = '/',
  image,
  jsonLd,
}: SeoInput): SeoTags {
  const fullTitle = path === '/' ? title : `${title} | ${siteInfo.name}`;
  const canonical = `${siteInfo.url}${path}`;
  const ogImage = `${siteInfo.url}${image ?? '/images/hero-workshop.jpg'}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return { fullTitle, description, keywords, canonical, ogImage, jsonLdList };
}
