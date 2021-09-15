import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
