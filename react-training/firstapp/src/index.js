import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greetings, {C1} from './jsxComponent';
import { Mapper } from './jsxComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  
    <div>
      <C1 />
    <Mapper />
    </div>
  
);

reportWebVitals();
