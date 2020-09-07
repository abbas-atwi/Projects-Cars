import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import AppRouters from './config/AppRouters';

ReactDOM.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>,
  document.getElementById('root')
);
