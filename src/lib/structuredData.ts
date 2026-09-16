import type { ProductCategory } from '../data/products.ts';
import { siteInfo } from '../data/site.ts';

/** schema.org LocalBusiness — shown on every page so search engines can build a knowledge panel. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteInfo.legalName,
    alternateName: siteInfo.name,
    description: siteInfo.description,
    url: siteInfo.url,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.streetAddress,
      addressLocality: siteInfo.city,
      addressRegion: siteInfo.region,
      postalCode: siteInfo.postalCode,
      addressCountry: siteInfo.countryCode,
    },
    openingHours: 'Mo-Sa 08:00-17:30',
    image: `${siteInfo.url}/images/hero-workshop.jpg`,
  };
}

/** schema.org Product for a category listing page. */
export function categoryJsonLd(category: ProductCategory) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${category.name} – ${siteInfo.name}`,
    description: category.description,
    image: `${siteInfo.url}${category.image}`,
    brand: {
      '@type': 'Brand',
      name: siteInfo.name,
    },
    category: category.name,
  };
}

/** schema.org BreadcrumbList for a nested page. */
export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteInfo.url}${item.path}`,
    })),
  };
}

/** schema.org FAQPage for the on-page FAQ section. */
export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
