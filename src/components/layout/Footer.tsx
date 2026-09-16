import { Link } from 'react-router';

import { categories } from '@/data/products';
import { siteInfo } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-brand-200 bg-cream-100 dark:border-brand-700 dark:bg-brand-900 border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-brand-700 text-cream-50 flex h-8 w-8 items-center justify-center rounded-md font-display font-semibold">
              O
            </span>
            <span className="font-display text-lg font-semibold">{siteInfo.name}</span>
          </Link>
          <p className="text-brand-700/80 dark:text-cream-100/70 text-sm">{siteInfo.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Products</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to={`/products/${category.slug}`}
                  className="text-brand-700/80 hover:text-brand-900 dark:text-cream-100/70 dark:hover:text-cream-50"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="text-brand-700/80 hover:text-brand-900 dark:text-cream-100/70 dark:hover:text-cream-50"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-brand-700/80 hover:text-brand-900 dark:text-cream-100/70 dark:hover:text-cream-50"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/awards"
                className="text-brand-700/80 hover:text-brand-900 dark:text-cream-100/70 dark:hover:text-cream-50"
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-brand-700/80 hover:text-brand-900 dark:text-cream-100/70 dark:hover:text-cream-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <ul className="text-brand-700/80 dark:text-cream-100/70 mt-4 space-y-2 text-sm">
            <li>{siteInfo.address}</li>
            <li>
              <a
                href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`}
                className="hover:text-brand-900 dark:hover:text-cream-50"
              >
                {siteInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteInfo.email}`}
                className="hover:text-brand-900 dark:hover:text-cream-50"
              >
                {siteInfo.email}
              </a>
            </li>
            <li>{siteInfo.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-brand-200 dark:border-brand-700 border-t">
        <div className="text-brand-700/70 dark:text-cream-100/60 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved.
          </p>
          <Link to="/credits" className="hover:text-brand-900 dark:hover:text-cream-50 underline">
            Photo & video credits
          </Link>
        </div>
      </div>
    </footer>
  );
}
