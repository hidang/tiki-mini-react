import { rootReducer } from '@store/index';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import AppRoute from './routes';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
