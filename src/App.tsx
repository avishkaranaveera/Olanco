import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';

import { router } from '@/routes/router';

export function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
