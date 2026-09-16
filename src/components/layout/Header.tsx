import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { ButtonLink } from '@/components/ui/Button';
import { siteInfo } from '@/data/site';
import { cn } from '@/lib/cn';

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products', end: false },
  { to: '/gallery', label: 'Gallery', end: false },
  { to: '/awards', label: 'Awards', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'border-brand-200 dark:border-brand-700 bg-cream-50/90 dark:bg-brand-900/90 sticky top-0 z-40 border-b backdrop-blur transition-shadow',
        scrolled && 'shadow-sm',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="bg-brand-700 text-cream-50 flex h-9 w-9 items-center justify-center rounded-md font-display text-lg font-semibold">
            O
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold">{siteInfo.name}</span>
            <span className="text-brand-600 dark:text-brand-300 text-[11px] tracking-wide uppercase">
              Wood Works
            </span>
          </span>
        </NavLink>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-cream-50'
                        : 'text-brand-700/80 hover:bg-brand-100 hover:text-brand-900 dark:text-cream-100/80 dark:hover:bg-brand-800 dark:hover:text-cream-50',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`}
            className="text-brand-700 dark:text-cream-100 text-sm font-semibold"
          >
            {siteInfo.phone}
          </a>
          <ButtonLink to="/contact">Get a quote</ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="border-brand-300 dark:border-brand-600 inline-flex items-center justify-center rounded-md border p-2"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile"
          className="border-brand-200 dark:border-brand-700 border-t md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-cream-50'
                        : 'text-brand-700/80 dark:text-cream-100/80',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
