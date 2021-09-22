import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
