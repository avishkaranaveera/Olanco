import { Seo } from '@/components/Seo';
import { WorkshopIllustration } from '@/components/illustrations/WoodIllustrations';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { siteInfo, stats, values } from '@/data/site';
import { breadcrumbJsonLd } from '@/lib/structuredData';

export function AboutPage() {
  return (
    <div>
      <Seo
        title="About Us"
        description={`The story behind ${siteInfo.name}, a family-run joinery workshop in ${siteInfo.city} building solid timber doors, windows and furniture since ${siteInfo.foundedYear}.`}
        keywords={`about ${siteInfo.name}, joinery workshop history, carpentry business ${siteInfo.city}`}
        path="/about"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold tracking-wide uppercase">
              About {siteInfo.name}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A family workshop, {new Date().getFullYear() - siteInfo.foundedYear} years in the
              making
            </h1>
            <p className="text-brand-700/80 dark:text-cream-100/75 text-lg">
              Olanco started in {siteInfo.foundedYear} as a two-person carpentry shop building doors
              for neighbours. Today the same values &mdash; solid timber, honest pricing, and work
              finished by hand &mdash; still guide every door, window, handrail and cupboard we
              build.
            </p>
            <ButtonLink to="/contact">Talk to our team</ButtonLink>
          </Reveal>

          <Reveal delay={100}>
            <SmartImage
              src="/images/about-workshop.jpg"
              alt="Carpenter working with solid wood in a joinery workshop"
              fallback={WorkshopIllustration}
              className="aspect-[4/3] w-full rounded-2xl shadow-lg"
            />
          </Reveal>
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
          eyebrow="What guides us"
          title="Our values"
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 60}
              className="border-brand-200 dark:border-brand-700 dark:bg-brand-900/40 rounded-xl border bg-white p-6"
            >
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-brand-700/80 dark:text-cream-100/70 mt-2 text-sm">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
