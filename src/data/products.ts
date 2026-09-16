export interface ProductCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Public path to the hero photo for this category. */
  image: string;
  /** 2–3 additional real photos shown on the category page and in the gallery. */
  gallery: string[];
  /** Which illustration to fall back to if a photo path above 404s. */
  illustration: 'door' | 'window' | 'handrail' | 'cupboard' | 'joinery';
  items: string[];
  /** SEO: comma-separated keywords this category should rank for. */
  keywords: string;
  /** Prompt to generate/replace the hero photo with an AI image tool — see AI_IMAGE_PROMPTS.md. */
  heroPrompt: string;
}

export const categories: ProductCategory[] = [
  {
    slug: 'doors',
    name: 'Doors',
    tagline: 'Solid timber doors, built to last generations',
    description:
      'From panelled front doors to flush interior doors, every Olanco door is built from kiln-dried timber and finished by hand. We supply and fit main entrance doors, interior room doors, and fire-rated doors to measure.',
    image: '/images/category-doors.jpg',
    gallery: ['/images/doors-1.jpg', '/images/doors-2.jpg'],
    illustration: 'door',
    items: [
      'Main entrance doors',
      'Panel & flush interior doors',
      'French & double doors',
      'Fire-rated doors',
      'Sliding & folding doors',
    ],
    keywords:
      'wooden doors Sri Lanka, solid wood front door, custom timber doors, panel doors, fire-rated wooden doors, main door design, wood door manufacturer Colombo',
    heroPrompt:
      'Professional product photograph of a handcrafted solid wood panelled front door mounted in a bright modern entryway, warm natural teak finish, visible wood grain, soft daylight from the side, shallow depth of field, shot on a full-frame camera, 85mm lens, photorealistic, no text',
  },
  {
    slug: 'windows',
    name: 'Windows',
    tagline: 'Timber window frames crafted for a precise fit',
    description:
      'Our joinery team builds casement, sliding, and louvre windows from moisture-treated hardwood, finished with weatherproof coatings so they perform for years in any climate.',
    image: '/images/category-windows.jpg',
    gallery: ['/images/windows-1.jpg', '/images/windows-2.jpg', '/images/windows-3.jpg'],
    illustration: 'window',
    items: [
      'Casement windows',
      'Sliding sash windows',
      'Louvre windows',
      'Bay & bow windows',
      'Fixed timber frames',
    ],
    keywords:
      'wooden windows Sri Lanka, timber window frames, custom wood windows, casement windows, louvre windows, sash windows, window joinery Colombo',
    heroPrompt:
      'Professional product photograph of a wooden casement window frame with glass panes, installed in a whitewashed wall, warm honey-toned timber, natural sunlight streaming through, close-up detail of the joinery corners, photorealistic, no text',
  },
  {
    slug: 'handrailing',
    name: 'Handrailing',
    tagline: 'Staircases and balustrades finished in fine hardwood',
    description:
      'We design and turn staircase handrails, spindles, and newel posts in a range of hardwoods, matched to your existing floors and trim, then hand-sanded to a smooth finish.',
    image: '/images/category-handrailing.jpg',
    gallery: ['/images/handrailing-1.jpg', '/images/handrailing-2.jpg'],
    illustration: 'handrail',
    items: [
      'Staircase handrails',
      'Turned spindles & balusters',
      'Newel posts',
      'Balcony balustrades',
      'Ramp handrails',
    ],
    keywords:
      'wooden handrails Sri Lanka, staircase handrail, wood balustrade, timber banister, turned spindles, staircase manufacturer Colombo',
    heroPrompt:
      'Professional interior photograph of a polished dark wood staircase handrail with turned spindles, warm indoor lighting, elegant home interior, close-up angle showing wood grain and joinery detail, photorealistic, no text',
  },
  {
    slug: 'pantry-cupboards',
    name: 'Pantry Cupboards',
    tagline: 'Kitchen storage built around the way you cook',
    description:
      'Custom pantry cupboards and kitchen cabinetry, built to your kitchen’s dimensions with adjustable shelving, soft-close hinges, and a finish that matches your worktops.',
    image: '/images/category-pantry-cupboards.jpg',
    gallery: ['/images/pantry-cupboards-1.jpg', '/images/pantry-cupboards-2.jpg'],
    illustration: 'cupboard',
    items: [
      'Built-in pantry units',
      'Kitchen base & wall cabinets',
      'Larder cupboards',
      'Crockery & display units',
      'Under-stair storage',
    ],
    keywords:
      'pantry cupboards Sri Lanka, wooden kitchen cabinets, custom cabinetry, kitchen cupboard design, larder cupboard, built-in wardrobes Colombo',
    heroPrompt:
      'Professional interior photograph of a built-in wooden pantry cupboard with open doors showing organized shelving, warm oak finish, modern farmhouse kitchen, soft natural window light, photorealistic, no text',
  },
  {
    slug: 'other-wooden-products',
    name: 'Other Wooden Products',
    tagline: 'Custom joinery for every room in the house',
    description:
      'Dining tables, wardrobes, shelving, garden furniture and one-off commissions — if it can be built in timber, our workshop can make it to your drawing or ours.',
    image: '/images/category-other.jpg',
    gallery: ['/images/other-wooden-products-1.jpg', '/images/other-wooden-products-2.jpg'],
    illustration: 'joinery',
    items: [
      'Dining tables & chairs',
      'Wardrobes & wall units',
      'Open shelving',
      'Garden & outdoor furniture',
      'Custom commissions',
    ],
    keywords:
      'custom wooden furniture Sri Lanka, bespoke joinery, solid wood dining table, wooden wardrobes, handmade furniture Colombo, wood workshop',
    heroPrompt:
      'Professional product photograph of a handmade solid wood dining table and matching chairs in a bright minimalist room, natural walnut finish, visible wood grain texture, soft studio-quality lighting, photorealistic, no text',
  },
];

export function getCategory(slug: string | undefined): ProductCategory | undefined {
  return categories.find((category) => category.slug === slug);
}
