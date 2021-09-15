import React from 'react';

export interface Router {
  path: string;
  exact: boolean;
  showAppNavigationBar?: boolean;
  component: (() => JSX.Element) | React.FC<any>;
}
