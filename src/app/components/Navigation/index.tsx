import React from 'react';
import { NavProps, NavWithIcon } from './NavWithIcon';
import s from './index.module.css';

export interface NavigationProps {
  routes: NavProps[];
}

export const Navigation: React.FC<NavigationProps> = ({ routes = [] }) => {
  return (
    <div className={s.navContainer}>
      {routes.map((route: NavProps) => (
        <NavWithIcon key={route.routePath} {...route} />
      ))}
    </div>
  );
};
