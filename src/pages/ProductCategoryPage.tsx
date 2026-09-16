import { Navigate, useParams } from 'react-router';

import { Seo } from '@/components/Seo';
import { illustrationBySlug } from '@/components/illustrations/illustrationMap';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { categories, getCategory } from '@/data/products';
import { siteInfo } from '@/data/site';
import { breadcrumbJsonLd, categoryJsonLd } from '@/lib/structuredData';

export function ProductCategoryPage() {
  const { slug } = useParams();
  const category = getCategory(slug);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const Fallback = illustrationBySlug[category.illustration];
  const otherCategories = categories.filter((item) => item.slug !== category.slug);

  return (
    <div>
      <Seo
        title={category.name}
        description={`${category.description} Serving ${siteInfo.city}, ${siteInfo.country}.`}
        keywords={category.keywords}
        path={`/products/${category.slug}`}
        image={category.image}
        jsonLd={[
          categoryJsonLd(category),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: category.name, path: `/products/${category.slug}` },
          ]),
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
              {category.name}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {category.tagline}
            </h1>
            <p className="text-brand-700/80 dark:text-cream-100/75 text-lg">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/contact">Request a quote</ButtonLink>
              <ButtonLink to="/gallery" variant="secondary">
                See finished work
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SmartImage
              src={category.image}
              alt={category.tagline}
              fallback={Fallback}
              eager
              className="aspect-[4/3] w-full rounded-2xl shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-brand-200 dark:border-brand-700 border-y bg-white dark:bg-brand-800/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">What we build in this range</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {category.items.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 40}
                className="border-brand-200 dark:border-brand-700 dark:bg-brand-900/40 flex items-center gap-3 rounded-lg border bg-cream-50 px-4 py-3"
              >
                <span className="bg-brand-600 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                <span className="text-sm font-medium">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Recent {category.name.toLowerCase()} work</h2>
        <p className="text-brand-700/80 dark:text-cream-100/70 mt-1 text-sm">
          Sample photos from finished {category.name.toLowerCase()} projects &mdash; ask us for
          more.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[category.image, ...category.gallery].map((src, index) => (
            <Reveal key={src} delay={index * 60}>
              <SmartImage
                src={src}
                alt={`${category.name} project by ${siteInfo.name}`}
                fallback={Fallback}
                className="aspect-square w-full rounded-lg"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 dark:bg-brand-800/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Explore other ranges</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherCategories.map((item) => (
              <ButtonLink key={item.slug} to={`/products/${item.slug}`} variant="secondary">
                {item.name}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
