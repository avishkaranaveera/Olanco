import { siteInfo } from '@/data/site';
import { ButtonLink } from '@/components/ui/Button';

/** Persistent call/quote bar on small screens, where the header CTA is hidden. */
export function StickyMobileCta() {
  return (
    <div className="border-brand-200 bg-cream-50/95 dark:border-brand-700 dark:bg-brand-900/95 fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`}
        className="border-brand-300 text-brand-800 dark:border-brand-600 dark:text-cream-100 flex flex-1 items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold"
      >
        Call us
      </a>
      <ButtonLink to="/contact" className="flex-1">
        Get a quote
      </ButtonLink>
    </div>
  );
}
