import { Link } from 'react-router';

import { SmartImage } from '@/components/ui/SmartImage';
import { illustrationBySlug } from '@/components/illustrations/illustrationMap';
import type { ProductCategory } from '@/data/products';

export function CategoryCard({ category }: { category: ProductCategory }) {
  const Fallback = illustrationBySlug[category.illustration];

  return (
    <Link
      to={`/products/${category.slug}`}
      className="group border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <SmartImage
          src={category.image}
          alt={category.name}
          fallback={Fallback}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <p className="text-brand-700/80 dark:text-cream-100/70 text-sm">{category.tagline}</p>
        <span className="text-brand-600 dark:text-brand-300 mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold">
          View range
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
