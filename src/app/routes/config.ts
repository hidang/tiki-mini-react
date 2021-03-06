import { Cart } from '../containers/Cart';
import { Home } from '../containers/Home';
import { Router } from './types';

export const Routes: Array<Router> = [
  {
    path: '/',
    exact: true,
    component: Home,
    showAppNavigationBar: true
  },
  {
    path: '/cart',
    exact: true,
    component: Cart,
    showAppNavigationBar: true
  }
];
