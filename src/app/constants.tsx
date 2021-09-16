import React from 'react';
import HomeIcon from './components/Navigation/icons/HomeIcon.svg';
import HomeActive from './components/Navigation/icons/HomeIconActive.svg';
import CartIcon from './components/Navigation/icons/CartIcon.svg';
import CartActive from './components/Navigation/icons/CartIconActive.svg';

export const navigationBarRoutes = [
  {
    icon: <img src={HomeIcon} alt="icon" />,
    activeIcon: <img src={HomeActive} alt="icon" />,
    label: 'Trang chủ',
    routePath: '/'
  },
  {
    icon: <img src={CartIcon} alt="icon" />,
    activeIcon: <img src={CartActive} alt="icon" />,
    label: 'Giỏ hàng',
    routePath: '/cart'
  }
];
