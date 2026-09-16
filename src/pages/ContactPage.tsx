import { useState, type FormEvent } from 'react';

import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { categories } from '@/data/products';
import { siteInfo } from '@/data/site';
import { breadcrumbJsonLd } from '@/lib/structuredData';

const inputClasses =
  'w-full rounded-md border border-brand-300 bg-white px-3 py-2 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 focus:outline-none dark:border-brand-600 dark:bg-brand-800 dark:text-cream-50';

// Approximate map view for the placeholder address (central Colombo) —
// update once Olanco's real coordinates are set in src/data/site.ts.
const MAP_BBOX = '79.8412,6.9071,79.8812,6.9471';
const MAP_MARKER = '6.9271,79.8612';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const category = String(data.get('category') ?? '');
    const message = String(data.get('message') ?? '');
    const replyTo = String(data.get('email') ?? '');

    const subject = `Quote request from ${name || 'website visitor'}`;
    const body = [`Product interest: ${category}`, `Reply-to: ${replyTo}`, '', message].join('\n');

    window.location.href = `mailto:${siteInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <Seo
        title="Contact & Free Quote"
        description={`Get a free quote from ${siteInfo.name} for wooden doors, windows, handrailing, pantry cupboards or custom furniture. Call, WhatsApp or email us.`}
        keywords={`contact ${siteInfo.name}, joinery quote, ${siteInfo.city} carpenter contact`}
        path="/contact"
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <SectionHeading
        eyebrow="Get in touch"
        title="Request a free quote"
        description="Tell us about your project and we'll get back to you within one working day."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 space-y-4 rounded-xl border bg-white p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Full name
                </label>
                <input id="name" name="name" type="text" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={inputClasses} />
            </div>

            <div>
              <label htmlFor="category" className="mb-1 block text-sm font-medium">
                Product I&apos;m interested in
              </label>
              <select id="category" name="category" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.name}>
                    {category.name}
                  </option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Project details
              </label>
              <textarea id="message" name="message" rows={5} required className={inputClasses} />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Send request
            </Button>

            {sent ? (
              <p className="text-brand-600 dark:text-brand-300 text-sm" role="status">
                Your email app should have opened with the details filled in &mdash; send it across
                and we&apos;ll reply within one working day. Prefer not to use email? Call or
                WhatsApp us instead.
              </p>
            ) : (
              <p className="text-brand-700/60 dark:text-cream-100/60 text-xs">
                This form opens your email app with the details pre-filled &mdash; the site
                doesn&apos;t have a backend yet to send messages directly.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={100} className="space-y-6 lg:col-span-2">
          <div className="border-brand-200 dark:border-brand-700 dark:bg-brand-800/40 space-y-3 rounded-xl border bg-cream-100 p-6">
            <h3 className="text-lg font-semibold">Visit the workshop</h3>
            <dl className="text-brand-700/80 dark:text-cream-100/70 space-y-2 text-sm">
              <div>
                <dt className="font-medium text-brand-900 dark:text-cream-50">Address</dt>
                <dd>{siteInfo.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-brand-900 dark:text-cream-50">Phone</dt>
                <dd>
                  <a href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`} className="hover:underline">
                    {siteInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-brand-900 dark:text-cream-50">WhatsApp</dt>
                <dd>
                  <a
                    href={`https://wa.me/${siteInfo.whatsapp.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {siteInfo.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-brand-900 dark:text-cream-50">Email</dt>
                <dd>
                  <a href={`mailto:${siteInfo.email}`} className="hover:underline">
                    {siteInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-brand-900 dark:text-cream-50">Hours</dt>
                <dd>{siteInfo.hours}</dd>
              </div>
            </dl>
          </div>

          <div className="border-brand-200 dark:border-brand-700 overflow-hidden rounded-xl border">
            <iframe
              title={`Map showing central ${siteInfo.city}, ${siteInfo.country}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${MAP_BBOX}&layer=mapnik&marker=${MAP_MARKER}`}
              className="aspect-square w-full"
              loading="lazy"
            />
            <p className="text-brand-700/60 dark:text-cream-100/60 bg-cream-100 dark:bg-brand-800/40 px-3 py-2 text-xs">
              Approximate location —{' '}
              <a
                href={`https://www.openstreetmap.org/?mlat=${MAP_MARKER.split(',')[0]}&mlon=${MAP_MARKER.split(',')[1]}#map=14/${MAP_MARKER}`}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                open full map
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
