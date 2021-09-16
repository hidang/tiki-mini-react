import React from 'react';
import { NavigationBar } from '../../components/NavigationBar';

export const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar fixed={true} style={{ backgroundColor: '#C7E9F9' }} />
    </div>
  );
};
