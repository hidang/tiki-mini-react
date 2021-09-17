import React from 'react';
import { NavigationBar } from '../../components/NavigationBar';
import { Banner } from './components/Banner';
import s from './home.module.css';
import common from '../../shared/styles/common.module.css';

export const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar fixed={true} style={{ backgroundColor: '#C7E9F9' }} />
      <div className={[common.skipNavigationBar, s.container].join(' ')}>
        <Banner />
      </div>
    </div>
  );
};
