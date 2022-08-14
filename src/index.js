import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import TestingCode from './TestingCode';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <br/>
    <TestingCode />
  </React.StrictMode>,
  document.getElementById('root')
);
