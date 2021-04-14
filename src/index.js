import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './resource/css/default.css'
import './resource/css/normalize.css'
import './resource/css/index.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);