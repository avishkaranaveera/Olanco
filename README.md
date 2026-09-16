# Olanco

Marketing website for **Olanco** — a joinery workshop building solid timber doors, windows,
handrailing, pantry cupboards and custom wooden furniture. Built with React, Vite and
TypeScript.

## Stack

| Concern    | Tool                                                             |
| ---------- | ---------------------------------------------------------------- |
| UI         | React 19                                                         |
| Build/dev  | Vite                                                             |
| Language   | TypeScript (strict)                                              |
| Routing    | React Router (data router, SPA mode, per-route code splitting)   |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`), manual light/dark toggle  |
| SEO        | `react-helmet-async` (per-page title/meta/OG/canonical), JSON-LD |
| Fonts      | Fraunces (headings) + Inter (body), self-hosted via Fontsource   |
| Testing    | Vitest + Testing Library (jsdom)                                 |
| Code style | ESLint (flat config) + Prettier                                  |

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:4200`.

## Scripts

| Script                  | Description                                |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Start the Vite dev server with HMR         |
| `npm run build`         | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview`       | Serve the production build on port 4300    |
| `npm test`              | Run the test suite once                    |
| `npm run test:watch`    | Run tests in watch mode                    |
| `npm run test:coverage` | Run tests with a V8 coverage report        |
| `npm run lint`          | Lint with ESLint                           |
| `npm run format`        | Format with Prettier                       |

## Pages

- **Home** (`/`) — hero, stats, product category grid, "watch us work" video, values, process, FAQ, CTA
- **Products** (`/products`) — all five product categories
- **Product category** (`/products/:slug`) — doors, windows, handrailing, pantry-cupboards,
  other-wooden-products; unknown slugs redirect back to `/products`
- **Gallery** (`/gallery`) — filterable project photos by category
- **Awards** (`/awards`) — awards/certifications section; ships with clearly-labelled placeholder
  entries (not real claims) until you add Olanco's actual ones in `src/data/awards.ts`
- **About** (`/about`) — company story, stats, values
- **Contact** (`/contact`) — quote request form (opens the visitor's email client — there is
  no backend yet), phone/WhatsApp/email, address, an embedded live map
- **Credits** (`/credits`) — license/attribution for every placeholder photo and video

## Real photos & video now, your own later

Every photo and video slot (`SmartImage` / `SmartVideo` components) currently shows a **real,
freely-licensed stock photo or video** (sourced from Wikimedia Commons) and **silently falls back
to a hand-drawn illustration** if that file is ever missing or fails to load — so the site never
breaks, even mid-replacement. Full attribution is listed on the [`/credits`](src/pages/CreditsPage.tsx)
page and in [`src/data/credits.ts`](src/data/credits.ts).

To swap any of them for Olanco's own photography (AI-generated or real), save a file at the exact
same path — **no code changes required**. See **[AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md)** for
every image/video slot, its exact file path, and a ready-to-use AI prompt.

## SEO

- Per-page `<title>`, meta description/keywords, canonical URL, and Open Graph/Twitter tags via
  [`src/components/Seo.tsx`](src/components/Seo.tsx) (backed by `react-helmet-async`).
- JSON-LD structured data: `LocalBusiness` (every page), `Product` + `BreadcrumbList` (category
  pages), `FAQPage` (home) — see [`src/lib/structuredData.ts`](src/lib/structuredData.ts).
- `public/robots.txt` and `public/sitemap.xml` (update the domain in both, and in
  `siteInfo.url` in [`src/data/site.ts`](src/data/site.ts), before going live).
- Because this is a client-rendered SPA, these tags are set by JavaScript after the bundle loads.
  Modern crawlers (Googlebot) render JS and pick this up fine; for a fully static fallback,
  prerendering or a server-rendered framework (Next.js, React Router framework mode) would be
  the next step.

## Performance & loading states

- **Route-level code splitting**: every page is a separate JS chunk (`React.lazy`), fetched on
  navigation — see [`src/routes/router.ts`](src/routes/router.ts).
- **Top progress bar** ([`TopProgressBar.tsx`](src/components/layout/TopProgressBar.tsx)) shows
  while a route chunk is loading, driven by React Router's `useNavigation()`.
- **Initial load screen**: a small inline-CSS loader in `index.html` paints immediately (before
  the JS bundle arrives) and disappears automatically once React mounts — no extra JS needed,
  since `createRoot().render()` replaces the loader markup as part of the first render.
- **Lazy-loaded images**: every non-hero `<img>` uses `loading="lazy"`.
- Scroll-triggered fade/slide-in animations (`Reveal` component, `useInView` hook) respect
  `prefers-reduced-motion`.

## Modern touches

- Manual light/dark theme toggle (persisted per-browser), on top of a system-preference default.
- **Site-wide animated background**: a subtle drifting "constellation" of dots and connecting
  lines in Olanco's warm timber palette, rendered on a fixed `<canvas>` behind every page
  ([`ConstellationBackground.tsx`](src/components/layout/ConstellationBackground.tsx)) — inspired
  by aizotech.com's particle-network background, recolored for a craft brand. Pauses when the tab
  is hidden and draws a single static frame under `prefers-reduced-motion`.
- Sticky mobile call/quote bar and a "back to top" button.
- Header gains a subtle shadow on scroll.
- Generic FAQ section (schema.org `FAQPage`) — no fabricated customer testimonials are used
  anywhere on the site.

## Project structure

```
src/
├── main.tsx                       # Browser entry point, mounts <App/>
├── App.tsx                        # HelmetProvider + RouterProvider wrapper
├── routes/
│   └── router.ts                   # Route table, lazy-loaded pages, browser router
├── components/
│   ├── layout/
│   │   ├── RootLayout.tsx          # Shell: Suspense<Outlet/>, header, footer, progress bar
│   │   ├── Header.tsx              # Main navigation + theme toggle
│   │   ├── Footer.tsx              # Footer with category & contact links
│   │   ├── ThemeToggle.tsx         # Light/dark toggle button
│   │   ├── TopProgressBar.tsx      # Route-transition progress bar
│   │   ├── BackToTop.tsx
│   │   └── StickyMobileCta.tsx
│   ├── illustrations/              # Placeholder SVG illustrations (per product type)
│   ├── ui/
│   │   ├── SmartImage.tsx          # Real photo w/ illustration fallback
│   │   ├── SmartVideo.tsx          # Real video w/ illustration fallback
│   │   ├── Reveal.tsx              # Scroll-in-view fade/slide animation wrapper
│   │   ├── PageLoader.tsx          # Suspense fallback spinner
│   │   ├── Button.tsx
│   │   └── SectionHeading.tsx
│   ├── Seo.tsx                     # Per-page title/meta/OG/JSON-LD
│   └── CategoryCard.tsx
├── pages/                          # Route-level components
├── data/
│   ├── products.ts                 # Product categories, copy, SEO keywords, gallery photos
│   ├── site.ts                     # Company info, stats, values, process, FAQ
│   └── credits.ts                  # Attribution for every placeholder photo/video
├── lib/
│   ├── structuredData.ts           # JSON-LD builders (LocalBusiness, Product, FAQ, Breadcrumb)
│   ├── useInView.ts                # IntersectionObserver hook for Reveal
│   └── useTheme.ts                 # Light/dark theme state + persistence
├── styles/
│   └── index.css                   # Tailwind import + warm timber theme tokens + dark variant
└── test/
    ├── setup.ts                    # jest-dom matchers, jsdom polyfills, auto cleanup
    └── renderRoute.tsx             # Renders the real route tree (+ HelmetProvider) in tests

public/
├── images/                         # Real stock photos (see /credits) + AI-prompt fallbacks
├── videos/                         # workshop-process.mp4 / .webm
├── robots.txt
└── sitemap.xml
```

Imports use the `@/` alias for `src/` (configured in both `vite.config.ts` and
`tsconfig.app.json`).

## Editing content

- **Company details** (domain, phone, email, address, hours, founding year, stats, values, FAQ):
  edit [`src/data/site.ts`](src/data/site.ts).
- **Products** (categories, descriptions, item lists, image paths, SEO keywords): edit
  [`src/data/products.ts`](src/data/products.ts).
- **Photos/video**: see [AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md).
- **Adding a new page**: create the component in `src/pages/`, register it (as a `lazy()` import)
  in [`src/routes/router.ts`](src/routes/router.ts), add a `<Seo/>` tag inside it, and add a nav
  entry in [`src/components/layout/Header.tsx`](src/components/layout/Header.tsx) if it belongs
  in the main menu.

## Before going live

- Replace the placeholder domain (`https://www.olanco.example`) in `src/data/site.ts`,
  `public/robots.txt` and `public/sitemap.xml` with the real one.
- Replace the placeholder phone/email/address in `src/data/site.ts` and the map coordinates in
  `src/pages/ContactPage.tsx` with Olanco's real details.
- Swap in real photos/video per [AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md) and remove the
  corresponding rows from `src/data/credits.ts`.
