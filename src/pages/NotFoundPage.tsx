import { Link } from 'react-router';

import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { notFoundSeo } from '@/data/routeMeta';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-24">
      <Seo {...notFoundSeo()} />
      <p className="text-brand-500 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-brand-700/80 dark:text-cream-100/70">
        The page you are looking for doesn&apos;t exist &mdash; it may have been moved or removed.
      </p>
      <ButtonLink to="/">Back to home</ButtonLink>
      <p className="text-brand-700/60 dark:text-cream-100/60 text-sm">
        Looking for a product?{' '}
        <Link
          to="/products"
          className="text-brand-600 dark:text-brand-300 font-medium hover:underline"
        >
          Browse our range
        </Link>
        .
      </p>
    </div>
  );
}
