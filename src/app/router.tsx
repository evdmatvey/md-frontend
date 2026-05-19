import { createBrowserRouter } from 'react-router';
import { Home } from '@/pages/Home';
import { ROUTES } from '@/shared/config/routes.config';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
]);
