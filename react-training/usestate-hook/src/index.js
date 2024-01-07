import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import GetDate from './components/GetDate';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const date = ReactDOM.createRoot(document.getElementById('date'));
date.render(
  <React.StrictMode>
    <GetDate />
  </React.StrictMode>
);

reportWebVitals();
