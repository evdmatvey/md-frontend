import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/pages/home';
import { ROUTES } from '@/shared/config/routes.config';
import { PublicLayout } from './layouts/PublicLayout';

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ path: ROUTES.HOME, element: <HomePage /> }],
  },
]);
