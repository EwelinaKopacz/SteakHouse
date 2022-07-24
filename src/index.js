import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './layout/Header/Header';
import ResetStyle from './components/styled/Reset';
import GlobalStyle from './components/styled/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <Header />
  </React.StrictMode>
);

