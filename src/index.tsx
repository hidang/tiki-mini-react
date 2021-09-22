import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { rootReducer } from '@store/index';
import { createStore } from 'redux';
import App from '@app/index';
import './global.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
