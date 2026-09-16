/**
 * Runs after `vite build` (wired as the npm `postbuild` script, which npm
 * runs automatically after `build`). For every route in `allRoutes()`, bakes
 * that route's title/meta description/keywords/canonical/Open Graph/Twitter
 * tags and JSON-LD — built by the exact same `buildSeoTags()` the client
 * uses — into a standalone copy of the built `dist/index.html`, written to
 * `dist/<route>/index.html`. `dist/404.html` gets the same treatment with
 * generic "not found" tags, for GitHub Pages' unmatched-path fallback.
 *
 * This exists because the app is a client-rendered SPA: without it, every
 * route would serve the same generic `<title>`/description in its raw HTML,
 * so search engines that don't render JS and social-media link previews
 * (which never do) would show the wrong title/description/image for every
 * page except whichever one happens to match the static defaults. The
 * visible page content itself is still rendered by React after the bundle
 * loads — this script only fixes what non-JS clients see in <head>.
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { allRoutes, notFoundSeo } from '../src/data/routeMeta.ts';
import { buildSeoTags, type SeoInput } from '../src/lib/seoHead.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(value: string): string {
  return escapeHtml(value);
}

function renderHead(seo: SeoInput): { title: string; headExtra: string } {
  const { fullTitle, description, keywords, canonical, ogImage, jsonLdList } = buildSeoTags(seo);

  const tags: string[] = [
    `<meta name="description" content="${escapeAttr(description)}" />`,
    keywords ? `<meta name="keywords" content="${escapeAttr(keywords)}" />` : '',
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Olanco" />`,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttr(ogImage)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`,
    ...jsonLdList.map(
      (entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`,
    ),
  ].filter(Boolean);

  return { title: escapeHtml(fullTitle), headExtra: tags.join('\n    ') };
}

function renderPage(template: string, seo: SeoInput): string {
  const { title, headExtra } = renderHead(seo);

  let html = template;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  // The source meta tags are formatted across multiple lines, so these must
  // match across newlines (and not assume attribute order) to actually strip
  // the static defaults — otherwise the per-route tags below just get added
  // alongside them, and crawlers that take the *first* tag see the wrong one.
  html = html.replace(/<meta\s+name="description"[\s\S]*?\/>/, '');
  html = html.replace(/<meta\s+name="keywords"[\s\S]*?\/>/, '');
  html = html.replace('</head>', `    ${headExtra}\n  </head>`);

  return html;
}

function main() {
  const template = readFileSync(templatePath, 'utf8');
  const routes = allRoutes();

  for (const route of routes) {
    const html = renderPage(template, route.seo);
    const outDir = route.path === '/' ? distDir : join(distDir, route.path.replace(/^\//, ''));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  }

  // GitHub Pages serves this for any path with no matching static file (HTTP
  // 404 status, correct for SEO) — the SPA shell then loads and React
  // Router's wildcard route renders the real NotFoundPage client-side.
  const notFoundHtml = renderPage(template, notFoundSeo());
  writeFileSync(join(distDir, '404.html'), notFoundHtml, 'utf8');

  // .nojekyll tells GitHub Pages not to run Jekyll over the output, which
  // would otherwise ignore files/folders starting with "_" (Vite doesn't
  // emit any here, but this is the standard safeguard for Vite + Pages).
  writeFileSync(join(distDir, '.nojekyll'), '', 'utf8');

  console.log(`postbuild-seo: wrote ${routes.length} route pages + 404.html`);
}

main();
