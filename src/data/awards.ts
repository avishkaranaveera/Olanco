export interface Award {
  title: string;
  organization: string;
  year: string;
}

/**
 * PLACEHOLDER CONTENT — not real awards. Deliberately generic ("Award Title",
 * "Awarding Organization", "20XX") so nobody could mistake these for a genuine
 * claim of recognition. Replace every entry with Olanco's real awards,
 * certifications or press mentions before publishing — see AwardsPage.tsx,
 * which also shows an on-page notice as long as this array is unedited.
 */
export const awards: Award[] = [
  { title: 'Award Title', organization: 'Awarding Organization', year: '20XX' },
  { title: 'Award Title', organization: 'Awarding Organization', year: '20XX' },
  { title: 'Award Title', organization: 'Awarding Organization', year: '20XX' },
];
