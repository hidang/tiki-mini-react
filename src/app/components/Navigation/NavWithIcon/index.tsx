import React, { FC, ReactNode, useCallback } from 'react';
import s from './navWithIcon.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export interface NavProps {
  icon?: ReactNode;
  activeIcon?: ReactNode;
  label?: ReactNode;
  routePath: string;
}

export const NavWithIcon: FC<NavProps> = ({
  icon,
  activeIcon,
  label,
  routePath
}) => {
  const location = useLocation();
  const checkActiveRoute = useCallback(() => {
    return location.pathname === routePath;
  }, [location, routePath]);

  return (
    <>
      <NavLink
        to={routePath}
        exact={true}
        activeClassName={s.active}
        isActive={checkActiveRoute}
        className={[s.navWrapper].join(' ')}
      >
        {icon && (
          <span className={s.navIcon}>
            {checkActiveRoute() ? activeIcon : icon}
          </span>
        )}
        {label && (
          <span
            className={[s.navLabel, checkActiveRoute() ? s.active : ''].join(
              ' '
            )}
          >
            {label}
          </span>
        )}
      </NavLink>
    </>
  );
};
