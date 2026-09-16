import { useMemo, useState } from 'react';

import { Seo } from '@/components/Seo';
import { illustrationBySlug } from '@/components/illustrations/illustrationMap';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { categories } from '@/data/products';
import { gallerySeo } from '@/data/routeMeta';
import { cn } from '@/lib/cn';

interface GalleryItem {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = categories.flatMap((category) =>
  [category.image, ...category.gallery].map((image, index) => ({
    id: `${category.slug}-${index}`,
    categorySlug: category.slug,
    categoryName: category.name,
    title: `${category.name} – project ${index + 1}`,
    image,
  })),
);

const filters = [
  { slug: 'all', name: 'All work' },
  ...categories.map((c) => ({ slug: c.slug, name: c.name })),
];

export function GalleryPage() {
  const [active, setActive] = useState('all');

  const visibleItems = useMemo(
    () =>
      active === 'all' ? galleryItems : galleryItems.filter((item) => item.categorySlug === active),
    [active],
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <Seo {...gallerySeo()} />

      <SectionHeading
        eyebrow="Our work"
        title="Recent projects"
        description="A look at doors, windows and joinery we've built and installed for clients."
      />

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
        {filters.map((filter) => (
          <button
            key={filter.slug}
            type="button"
            role="tab"
            aria-selected={active === filter.slug}
            onClick={() => setActive(filter.slug)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              active === filter.slug
                ? 'bg-brand-700 border-brand-700 text-cream-50'
                : 'border-brand-300 text-brand-700 hover:bg-brand-100 dark:border-brand-600 dark:text-cream-100 dark:hover:bg-brand-800',
            )}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, index) => {
          const category = categories.find((c) => c.slug === item.categorySlug);
          const Illustration = category ? illustrationBySlug[category.illustration] : undefined;

          return (
            <Reveal key={item.id} delay={(index % 6) * 50}>
              <figure className="space-y-2">
                {Illustration ? (
                  <SmartImage
                    src={item.image}
                    alt={item.title}
                    fallback={Illustration}
                    className="aspect-[4/3] w-full rounded-lg shadow-sm"
                  />
                ) : null}
                <figcaption className="text-brand-700/70 dark:text-cream-100/70 text-sm">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
