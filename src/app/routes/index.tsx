import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { navigationBarRoutes } from '../constants';
import { Routes } from './config';

function AppRoute(): JSX.Element {
  return (
    <Switch>
      {Routes.map((route) => (
        <React.Fragment key={route.path} {...route}>
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
          {route.showAppNavigationBar && (
            <div
              style={{
                backgroundColor: 'white',
                position: 'fixed',
                width: '100%',
                bottom: '0px'
              }}
            >
              <Navigation routes={navigationBarRoutes} />
            </div>
          )}
        </React.Fragment>
      ))}
    </Switch>
  );
}

export default AppRoute;
