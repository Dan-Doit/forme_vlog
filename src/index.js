import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom'

import './resource/css/default.css'
import './resource/css/normalize.css'
import './resource/css/style.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"forme"} >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);