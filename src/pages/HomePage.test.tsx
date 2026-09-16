import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderRoute } from '@/test/renderRoute';

describe('HomePage', () => {
  it('renders the hero heading', async () => {
    renderRoute('/');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /doors, windows & handcrafted wood pieces/i,
      }),
    ).toBeInTheDocument();
  });

  it('links to every product category from the main content', async () => {
    renderRoute('/');

    const main = (await screen.findByRole('main')) as HTMLElement;
    const { getByRole } = within(main);

    for (const name of [
      'Doors',
      'Windows',
      'Handrailing',
      'Pantry Cupboards',
      'Other Wooden Products',
    ]) {
      expect(getByRole('link', { name: new RegExp(name, 'i') })).toBeInTheDocument();
    }
  });
});
