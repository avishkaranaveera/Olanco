import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { mediaCredits } from '@/data/credits';
import { creditsSeo } from '@/data/routeMeta';
import { siteInfo } from '@/data/site';

export function CreditsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-16">
      <Seo {...creditsSeo()} />

      <SectionHeading
        eyebrow="Placeholder media"
        title="Photo & video credits"
        description={`Every real photo and the workshop video on this site are free, freely-licensed stock media used as a stand-in until ${siteInfo.name} supplies its own photography and footage.`}
      />

      <Reveal className="overflow-x-auto rounded-xl border border-brand-200 dark:border-brand-700">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream-100 dark:bg-brand-800/40 text-brand-700/70 dark:text-cream-100/70">
            <tr>
              <th className="px-4 py-3 font-medium">File</th>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Author</th>
              <th className="px-4 py-3 font-medium">License</th>
            </tr>
          </thead>
          <tbody className="divide-brand-200 dark:divide-brand-700 divide-y">
            {mediaCredits.map((credit) => (
              <tr key={credit.file}>
                <td className="text-brand-700/80 dark:text-cream-100/70 px-4 py-3 font-mono text-xs">
                  {credit.file}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={credit.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-700 dark:text-cream-100 hover:underline"
                  >
                    {credit.title}
                  </a>
                </td>
                <td className="text-brand-700/80 dark:text-cream-100/70 px-4 py-3">
                  {credit.artist || '—'}
                </td>
                <td className="text-brand-700/80 dark:text-cream-100/70 px-4 py-3">
                  {credit.license}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <p className="text-brand-700/60 dark:text-cream-100/60 text-sm">
        All media is sourced from{' '}
        <a
          href="https://commons.wikimedia.org"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Wikimedia Commons
        </a>{' '}
        under the license shown above. See{' '}
        <code className="rounded bg-cream-100 px-1.5 py-0.5 text-xs dark:bg-brand-800">
          AI_IMAGE_PROMPTS.md
        </code>{' '}
        in the project source for prompts to generate Olanco-branded replacements.
      </p>
    </div>
  );
}
