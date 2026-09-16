export const siteInfo = {
  name: 'Olanco',
  legalName: 'Olanco Wood Works',
  tagline: 'Doors, windows & fine joinery, built by hand',
  description:
    'Olanco is a family-run joinery workshop crafting solid timber doors, windows, handrailing, pantry cupboards and custom wooden furniture to measure.',
  /** Placeholder \u2014 replace with the real production domain before going live. */
  url: 'https://www.olanco.example',
  phone: '+94 11 234 5678',
  whatsapp: '+94 77 123 4567',
  email: 'hello@olanco.example',
  address: 'No. 24, Mill Road, Colombo, Sri Lanka',
  streetAddress: 'No. 24, Mill Road',
  city: 'Colombo',
  region: 'Western Province',
  postalCode: '00100',
  country: 'Sri Lanka',
  countryCode: 'LK',
  hours: 'Mon \u2013 Sat: 8.00 AM \u2013 5.30 PM',
  foundedYear: 1998,
  /** Global, site-wide SEO keywords \u2014 category pages layer their own on top. */
  keywords:
    'wooden doors, wooden windows, handrailing, pantry cupboards, custom wooden furniture, joinery workshop Colombo, timber furniture Sri Lanka, solid wood carpentry',
};

export const stats = [
  { value: `${new Date().getFullYear() - siteInfo.foundedYear}+`, label: 'Years of craftsmanship' },
  { value: '2,400+', label: 'Projects completed' },
  { value: '5', label: 'Product categories' },
  { value: '100%', label: 'Made to measure' },
];

export const values = [
  {
    title: 'Solid timber, always',
    description:
      'We build from kiln-dried hardwood and softwood, never particleboard or veneer shortcuts.',
  },
  {
    title: 'Made to your measurements',
    description:
      'Every door, window and cupboard is cut and fitted for your exact opening \u2014 no standard sizing.',
  },
  {
    title: 'Finished by hand',
    description:
      'Sanding, staining and sealing are done by hand in our workshop for a smooth, lasting finish.',
  },
  {
    title: 'Built to last',
    description:
      'Traditional joinery techniques mean our work is still standing strong decades after installation.',
  },
];

export const faqs = [
  {
    question: 'What kind of timber do you use?',
    answer:
      'We build with kiln-dried local and imported hardwoods — teak, mahogany and oak are the most common — chosen with you based on budget, finish and where the piece will be used.',
  },
  {
    question: 'Do you work from my own measurements or design?',
    answer:
      'Either. Send us your measurements or drawing, or we can visit your site to measure up and suggest a design that fits the space.',
  },
  {
    question: 'How long does an order take?',
    answer:
      'Most doors and windows take 2–4 weeks from confirmed order to installation; larger cupboard and furniture commissions can take 4–6 weeks depending on complexity.',
  },
  {
    question: 'Do you deliver and install, or supply only?',
    answer:
      'Both are available. We can deliver and fit everything ourselves, or supply finished pieces for your own contractor to install.',
  },
  {
    question: 'Can you match an existing door, window or staircase?',
    answer:
      'Yes — bring a photo or a sample and we’ll match the timber, profile and finish as closely as possible.',
  },
];

export const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We visit your site, take measurements and discuss timber, finish and budget.',
  },
  {
    step: '02',
    title: 'Design & quote',
    description: 'You receive a drawing and a fixed quote before any timber is cut.',
  },
  {
    step: '03',
    title: 'Workshop build',
    description: 'Our joiners build your piece by hand in our workshop, with regular updates.',
  },
  {
    step: '04',
    title: 'Fit & finish',
    description: 'We install on site and do a final walk-through to make sure everything is right.',
  },
];
