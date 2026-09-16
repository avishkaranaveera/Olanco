import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderRoute } from '@/test/renderRoute';

describe('routing', () => {
  it('renders the products index at /products', async () => {
    renderRoute('/products');

    expect(
      await screen.findByRole('heading', { level: 2, name: 'Products, built to measure' }),
    ).toBeInTheDocument();
  });

  it('renders a product category page at /products/:slug', async () => {
    renderRoute('/products/doors');

    expect(
      await screen.findByRole('heading', { level: 1, name: /solid timber doors/i }),
    ).toBeInTheDocument();
  });

  it('redirects unknown category slugs back to /products', async () => {
    renderRoute('/products/does-not-exist');

    expect(
      await screen.findByRole('heading', { level: 2, name: 'Products, built to measure' }),
    ).toBeInTheDocument();
  });

  it('renders the contact page at /contact', async () => {
    renderRoute('/contact');

    expect(
      await screen.findByRole('heading', { level: 2, name: 'Request a free quote' }),
    ).toBeInTheDocument();
  });

  it('renders the not found page for unknown paths', async () => {
    renderRoute('/does-not-exist');

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Page not found' }),
    ).toBeInTheDocument();
  });
});
