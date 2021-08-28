import React from 'react';
import ReactDOM from 'react-dom';

import { ResetCSS } from './global_styles/ResetCSS.style.js';
import { BodyAndRootStyles } from './global_styles/BodyAndRoot.style.js';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <BodyAndRootStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
