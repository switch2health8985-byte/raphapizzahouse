import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RaphaPizza = lazy(() => import('../pages/rapha-pizza/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RaphaPizza />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;