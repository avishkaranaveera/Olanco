import { CategoryCard } from '@/components/CategoryCard';
import { Seo } from '@/components/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { categories } from '@/data/products';
import { siteInfo } from '@/data/site';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <Seo
        title="Products"
        description={`Solid timber doors, windows, handrailing, pantry cupboards and custom wooden furniture, built to measure by ${siteInfo.name} in ${siteInfo.city}.`}
        keywords={categories.map((category) => category.keywords).join(', ')}
        path="/products"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
        ])}
      />

      <SectionHeading
        eyebrow="Our range"
        title="Products, built to measure"
        description="Every category below is made from solid timber in our own workshop. Pick a category to see examples and request a quote."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 60}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>

      <div className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 flex flex-col items-start gap-4 rounded-xl border bg-cream-100 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Don&apos;t see what you need?</h2>
          <p className="text-brand-700/80 dark:text-cream-100/70 mt-1 text-sm">
            We take on custom commissions in timber every week &mdash; send us your idea.
          </p>
        </div>
        <ButtonLink to="/contact" className="shrink-0">
          Request a custom quote
        </ButtonLink>
      </div>
    </div>
  );
}
