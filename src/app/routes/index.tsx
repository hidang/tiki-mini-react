import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from './config';

function AppRoute(): JSX.Element {
  return (
    <Switch>
      {Routes.map((route) => (
        <React.Fragment key={route.path}>
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
          {route.showAppNavigationBar && (
            <React.Fragment>
              <div>Navbar</div>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </Switch>
  );
}

export default AppRoute;
