import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/pages/home';
import { ROUTES } from '@/shared/config/routes.config';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);
