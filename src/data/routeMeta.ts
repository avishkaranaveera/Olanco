import type { ProductCategory } from './products.ts';
import { categories } from './products.ts';
import { faqs, siteInfo } from './site.ts';
import {
  breadcrumbJsonLd,
  categoryJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from '../lib/structuredData.ts';
import type { SeoInput } from '../lib/seoHead.ts';

/**
 * One function per route, each returning the exact props its page passes to
 * `<Seo>`. This is the single source of truth for page metadata: every page
 * component spreads `{...xSeo()}` into its `<Seo>` call, and
 * `scripts/postbuild-seo.ts` calls the same functions to bake identical tags
 * into each route's static HTML at build time — so what a crawler sees and
 * what React renders after hydration can never drift apart.
 *
 * `withLocalBusiness` mirrors what happens live in the browser: RootLayout's
 * own `<Seo jsonLd={localBusinessJsonLd()}>` and the active page's `<Seo>`
 * both render `<Helmet>` at once, and react-helmet-async merges their
 * `<script type="application/ld+json">` tags together. The static build has
 * no such second Helmet pass, so each function here merges it in directly.
 */
function withLocalBusiness(jsonLd?: object | object[]): object[] {
  const extra = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return [localBusinessJsonLd(), ...extra];
}

export function homeSeo(): SeoInput {
  return {
    title: `${siteInfo.name} — Wooden Doors, Windows & Custom Joinery in ${siteInfo.city}`,
    description: `${siteInfo.description} Serving ${siteInfo.city} and across ${siteInfo.country}.`,
    keywords: siteInfo.keywords,
    path: '/',
    jsonLd: withLocalBusiness(faqJsonLd(faqs)),
  };
}

export function aboutSeo(): SeoInput {
  return {
    title: 'About Us',
    description: `The story behind ${siteInfo.name}, a family-run joinery workshop in ${siteInfo.city} building solid timber doors, windows and furniture since ${siteInfo.foundedYear}.`,
    keywords: `about ${siteInfo.name}, joinery workshop history, carpentry business ${siteInfo.city}`,
    path: '/about',
    jsonLd: withLocalBusiness(
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ),
  };
}

export function productsSeo(): SeoInput {
  return {
    title: 'Products',
    description: `Solid timber doors, windows, handrailing, pantry cupboards and custom wooden furniture, built to measure by ${siteInfo.name} in ${siteInfo.city}.`,
    keywords: categories.map((category) => category.keywords).join(', '),
    path: '/products',
    jsonLd: withLocalBusiness(
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
      ]),
    ),
  };
}

export function categorySeo(category: ProductCategory): SeoInput {
  return {
    title: category.name,
    description: `${category.description} Serving ${siteInfo.city}, ${siteInfo.country}.`,
    keywords: category.keywords,
    path: `/products/${category.slug}`,
    image: category.image,
    jsonLd: withLocalBusiness([
      categoryJsonLd(category),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: category.name, path: `/products/${category.slug}` },
      ]),
    ]),
  };
}

export function gallerySeo(): SeoInput {
  return {
    title: 'Gallery',
    description: `Photos of finished doors, windows, handrailing, pantry cupboards and custom furniture built by ${siteInfo.name}.`,
    keywords: `${siteInfo.name} gallery, joinery portfolio, wood furniture photos, finished projects`,
    path: '/gallery',
    jsonLd: withLocalBusiness(
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
      ]),
    ),
  };
}

export function awardsSeo(): SeoInput {
  return {
    title: 'Awards & Recognition',
    description: `Awards, certifications and recognition earned by ${siteInfo.name}.`,
    path: '/awards',
    jsonLd: withLocalBusiness(
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Awards', path: '/awards' },
      ]),
    ),
  };
}

export function contactSeo(): SeoInput {
  return {
    title: 'Contact & Free Quote',
    description: `Get a free quote from ${siteInfo.name} for wooden doors, windows, handrailing, pantry cupboards or custom furniture. Call, WhatsApp or email us.`,
    keywords: `contact ${siteInfo.name}, joinery quote, ${siteInfo.city} carpenter contact`,
    path: '/contact',
    jsonLd: withLocalBusiness(
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
    ),
  };
}

export function creditsSeo(): SeoInput {
  return {
    title: 'Photo & Video Credits',
    description:
      'License and attribution details for the placeholder photos and video used on this site.',
    path: '/credits',
    jsonLd: withLocalBusiness(),
  };
}

export function notFoundSeo(): SeoInput {
  return {
    title: 'Page Not Found',
    description: "This page doesn't exist.",
    path: '/404',
    jsonLd: withLocalBusiness(),
  };
}

/** Every statically-prerenderable route, in the shape `scripts/postbuild-seo.ts` needs. */
export function allRoutes(): Array<{ path: string; seo: SeoInput }> {
  return [
    { path: '/', seo: homeSeo() },
    { path: '/products', seo: productsSeo() },
    ...categories.map((category) => ({
      path: `/products/${category.slug}`,
      seo: categorySeo(category),
    })),
    { path: '/gallery', seo: gallerySeo() },
    { path: '/awards', seo: awardsSeo() },
    { path: '/about', seo: aboutSeo() },
    { path: '/contact', seo: contactSeo() },
    { path: '/credits', seo: creditsSeo() },
  ];
}
