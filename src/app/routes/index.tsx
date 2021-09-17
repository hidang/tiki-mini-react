import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { navigationBarRoutes } from '../constants';
import { Routes } from './config';
import { Router } from './types';

function ContainerRouter(route: Router): JSX.Element {
  return (
    <React.Fragment>
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
      {route.showAppNavigationBar && (
        <div
          style={{
            backgroundColor: 'var(--color-white)',
            position: 'fixed',
            width: '100%',
            bottom: '0px'
          }}
        >
          <Navigation routes={navigationBarRoutes} />
        </div>
      )}
    </React.Fragment>
  );
}

function AppRoute(): JSX.Element {
  return (
    <Switch>
      {Routes.map((route) => (
        <ContainerRouter key={route.path} {...route} />
      ))}
    </Switch>
  );
}

export default AppRoute;
