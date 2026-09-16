/**
 * Prefixes a root-relative public asset path (e.g. "/images/x.jpg") with
 * Vite's configured `base` (see vite.config.ts — "/" locally, "/Olanco/" on
 * GitHub Pages), so `<img>`/`<video>` sources resolve correctly regardless of
 * whether the site is served from the domain root or a subpath.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
