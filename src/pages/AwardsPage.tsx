import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { awards } from '@/data/awards';
import { siteInfo } from '@/data/site';
import { breadcrumbJsonLd } from '@/lib/structuredData';

function TrophyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 5H4v1a3 3 0 0 0 3 3M17 5h3v1a3 3 0 0 1-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 12v3m-3 3h6m-5 0 .5-3h3l.5 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AwardsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <Seo
        title="Awards & Recognition"
        description={`Awards, certifications and recognition earned by ${siteInfo.name}.`}
        path="/awards"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Awards', path: '/awards' },
        ])}
      />

      <SectionHeading
        eyebrow="Recognition"
        title="Awards & certifications"
        description="Milestones the workshop has earned along the way."
      />

      <Reveal className="border-brand-300 bg-brand-50 text-brand-800 dark:border-brand-600 dark:bg-brand-800/40 dark:text-cream-100 rounded-lg border border-dashed p-4 text-sm">
        These are placeholder entries so you can see how the page looks — not real awards. Edit{' '}
        <code className="rounded bg-white/60 px-1.5 py-0.5 text-xs dark:bg-black/20">
          src/data/awards.ts
        </code>{' '}
        to add Olanco&apos;s real awards, certifications or press mentions.
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => (
          <Reveal
            key={`${award.title}-${index}`}
            delay={index * 60}
            className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 flex flex-col gap-3 rounded-xl border bg-white p-6"
          >
            <span className="bg-brand-100 text-brand-700 dark:bg-brand-700 dark:text-cream-50 flex h-11 w-11 items-center justify-center rounded-full">
              <TrophyIcon />
            </span>
            <h3 className="text-lg font-semibold">{award.title}</h3>
            <p className="text-brand-700/80 dark:text-cream-100/70 text-sm">
              {award.organization} &middot; {award.year}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
