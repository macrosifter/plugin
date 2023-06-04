import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';

import './styles.css';
import { ContextProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  </React.StrictMode>,

  document.getElementById('index')
);
