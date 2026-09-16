import { CategoryCard } from '@/components/CategoryCard';
import { Seo } from '@/components/Seo';
import {
  HeroWorkshopIllustration,
  WorkshopIllustration,
} from '@/components/illustrations/WoodIllustrations';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { SmartVideo } from '@/components/ui/SmartVideo';
import { categories } from '@/data/products';
import { faqs, process, siteInfo, stats, values } from '@/data/site';
import { faqJsonLd } from '@/lib/structuredData';

export function HomePage() {
  return (
    <>
      <Seo
        title={`${siteInfo.name} — Wooden Doors, Windows & Custom Joinery in ${siteInfo.city}`}
        description={`${siteInfo.description} Serving ${siteInfo.city} and across ${siteInfo.country}.`}
        keywords={siteInfo.keywords}
        path="/"
        jsonLd={faqJsonLd(faqs)}
      />

      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div className="space-y-6">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
              Custom timber joinery since {siteInfo.foundedYear}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Doors, windows & handcrafted wood pieces, built to fit your home
            </h1>
            <p className="text-brand-700/80 dark:text-cream-100/75 max-w-xl text-lg">
              {siteInfo.description}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink to="/contact">Request a free quote</ButtonLink>
              <ButtonLink to="/products" variant="secondary">
                Browse products
              </ButtonLink>
            </div>
          </div>

          <SmartImage
            src="/images/hero-workshop.jpg"
            alt="Timber joinery workshop with solid wood beams and hand tools"
            fallback={HeroWorkshopIllustration}
            eager
            className="aspect-[4/3] w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      <section className="border-brand-200 dark:border-brand-700 border-y bg-white dark:bg-brand-800/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 75} className="text-center">
              <p className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="text-brand-700/70 dark:text-cream-100/70 mt-1 text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <SectionHeading
          eyebrow="What we build"
          title="Five categories, one workshop"
          description="Every piece is built to measure by the same joiners, from first sketch to final fit."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 60}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 dark:bg-brand-800/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
              Watch us work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From rough timber to finished joint
            </h2>
            <p className="text-brand-700/80 dark:text-cream-100/70 text-lg">
              Every piece starts as sawn timber and is shaped, chiselled and finished by hand in our
              workshop — the same hand-cut joinery techniques used for centuries.
            </p>
            <ButtonLink to="/about" variant="secondary">
              More about our workshop
            </ButtonLink>
          </Reveal>

          <Reveal delay={100}>
            <SmartVideo
              sources={{
                mp4: '/videos/workshop-process.mp4',
                webm: '/videos/workshop-process.webm',
              }}
              poster="/images/video-poster.jpg"
              fallback={WorkshopIllustration}
              title="Timber joinery being hand-cut in a woodworking workshop"
              className="aspect-video w-full rounded-2xl shadow-lg"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <SectionHeading eyebrow="Why Olanco" title="Craftsmanship you can see and feel" />
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 60}
              className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 rounded-xl border bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-brand-700/80 dark:text-cream-100/70 mt-2 text-sm">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 dark:bg-brand-800/40">
        <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
          <SectionHeading eyebrow="How it works" title="From measurement to installation" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 60} className="space-y-2">
                <p className="text-brand-300 dark:text-brand-500 font-display text-4xl font-semibold">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-brand-700/80 dark:text-cream-100/70 text-sm">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="grid gap-4 sm:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.question}
              delay={index * 50}
              className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 rounded-xl border bg-white p-5"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-brand-700/80 dark:text-cream-100/70 mt-2 text-sm">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-800 dark:bg-brand-900">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-display text-cream-50 text-3xl font-semibold">
              Ready to start your project?
            </h2>
            <p className="text-cream-100/70 max-w-lg">
              Tell us what you need and we&apos;ll come back with a free, no-obligation quote.
            </p>
          </div>
          <ButtonLink
            to="/contact"
            className="bg-cream-50 text-brand-800 hover:bg-cream-100 shrink-0"
          >
            Get in touch
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
