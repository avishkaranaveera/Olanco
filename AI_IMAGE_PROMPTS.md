# Photos & video on the Olanco site

Every image and video slot currently shows a **real, freely-licensed stock photo/video**
(sourced from Wikimedia Commons — see the full attribution list on the site's
[`/credits`](src/pages/CreditsPage.tsx) page and in [`src/data/credits.ts`](src/data/credits.ts))
as a placeholder. They're a stand-in for Olanco's own photography, which will look far more
authentic once it exists.

To replace any of them with your own photo or an AI-generated one, save it to the **exact path**
below — **no code changes are needed**. Each slot tries to load the real file first and only
falls back to a hand-drawn illustration if the file is missing or fails to load (see
[`src/components/ui/SmartImage.tsx`](src/components/ui/SmartImage.tsx) and
[`SmartVideo.tsx`](src/components/ui/SmartVideo.tsx)). When you replace a stock photo, remove its
row from `src/data/credits.ts` (it's no longer someone else's licensed work) and delete the old
file if the new one uses a different name.

Generate images with any AI tool you have access to — ChatGPT/DALL·E, Gemini, Midjourney,
Adobe Firefly — or use your own product photography. Paste the prompt as-is, or adapt it with
your own workshop's details (actual wood species, actual location, your own products).

Recommended export settings: **JPEG or WebP, landscape ~1600×1200px** (square 1200×1200 for
gallery images), optimized for web (under ~400KB each).

| Save to                                       | Used on                                    | Prompt                                                                                                                                                                                                                                          |
| --------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/images/hero-workshop.jpg`             | Home page hero                             | Professional wide photograph of a warm, sunlit timber joinery workshop interior, a craftsman finishing a solid wood door on a workbench, wood shavings on the floor, tools hanging on the wall, shallow depth of field, photorealistic, no text |
| `public/images/about-workshop.jpg`            | About page                                 | Professional photograph of a carpenter planing a wooden plank on a workbench in a joinery workshop, warm natural light, close-up on hands and wood grain, photorealistic, no text                                                               |
| `public/images/category-doors.jpg`            | Doors category card + page                 | See prompt in `src/data/products.ts` (`doors.heroPrompt`)                                                                                                                                                                                       |
| `public/images/category-windows.jpg`          | Windows category card + page               | See prompt in `src/data/products.ts` (`windows.heroPrompt`)                                                                                                                                                                                     |
| `public/images/category-handrailing.jpg`      | Handrailing category card + page           | See prompt in `src/data/products.ts` (`handrailing.heroPrompt`)                                                                                                                                                                                 |
| `public/images/category-pantry-cupboards.jpg` | Pantry Cupboards category card + page      | See prompt in `src/data/products.ts` (`pantry-cupboards.heroPrompt`)                                                                                                                                                                            |
| `public/images/category-other.jpg`            | Other Wooden Products category card + page | See prompt in `src/data/products.ts` (`other-wooden-products.heroPrompt`)                                                                                                                                                                       |
| `public/images/video-poster.jpg`              | Poster frame for the home page video       | A still frame representing your workshop video — or any photo from the table above                                                                                                                                                              |

## Category gallery photos

Each category in [`src/data/products.ts`](src/data/products.ts) has an `image` (hero) and a
`gallery: string[]` array (2–3 more real photos). These same paths are reused on both the
category detail page and the `/gallery` page, so there's one file per photo, not one per page:

- Doors: `public/images/category-doors.jpg`, `doors-1.jpg`, `doors-2.jpg`
- Windows: `public/images/category-windows.jpg`, `windows-1.jpg`, `windows-2.jpg`, `windows-3.jpg`
- Handrailing: `public/images/category-handrailing.jpg`, `handrailing-1.jpg`, `handrailing-2.jpg`
- Pantry Cupboards: `public/images/category-pantry-cupboards.jpg`, `pantry-cupboards-1.jpg`, `pantry-cupboards-2.jpg`
- Other Wooden Products: `public/images/category-other.jpg`, `other-wooden-products-1.jpg`, `other-wooden-products-2.jpg`

Prompt template for these: _"Professional close-up photograph of a finished [category item, e.g.
'panelled oak front door' / 'staircase with turned wooden handrail'], installed in a real home,
natural lighting, visible wood grain and joinery detail, photorealistic, no text"_.

To add a photo instead of replacing one, add its path to that category's `gallery` array in
`products.ts` — it will automatically appear on both the category page and `/gallery`.

## Workshop video

The home page "Watch us work" section plays `public/videos/workshop-process.mp4` (with
`workshop-process.webm` as a smaller fallback for browsers that prefer it) and shows
`public/images/video-poster.jpg` before it loads. To replace it with real Olanco footage:

1. Film a short (10–30s) clip of work in progress — cutting, chiselling, sanding, fitting.
2. Export **without audio** (the video autoplays muted, like a background loop) at 1280×720 or
   similar, as both an `.mp4` (H.264) and optionally a `.webm` (VP9) for a smaller download.
3. Save over `public/videos/workshop-process.mp4` / `.webm` and replace `video-poster.jpg` with a
   frame from the new clip.
4. Remove the video row from `src/data/credits.ts`.

If both video files are missing or fail to load, the section falls back to the workshop
illustration automatically — nothing breaks.

## Tips

- If a photo or video fails to load (wrong path, 404, broken file) the illustration silently
  reappears — nothing breaks.
- You don't have to replace every slot at once. Unfilled/broken slots keep showing the matching
  wood-toned illustration so the site never looks broken.
- Keep the aspect ratio close to 4:3 (landscape) for hero/category images and 1:1 (square) or
  4:3 for gallery images so they crop cleanly with `object-fit: cover`.
- Update `src/data/site.ts` (`url`, phone, address, coordinates used in the contact page map) with
  Olanco's real details before publishing — several placeholders (domain, address, phone) still
  need to be replaced. See [`src/data/site.ts`](src/data/site.ts).
