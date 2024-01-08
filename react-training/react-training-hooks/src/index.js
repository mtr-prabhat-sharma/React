import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DomRef, HooksCounter, HttpCall, UseRefCounter } from './components/UsingHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const counter = ReactDOM.createRoot(document.getElementById('counter'));
counter.render(
    <div>
      <HooksCounter />
      <hr />
    </div>  
)

const fetchData = ReactDOM.createRoot(document.getElementById('fetchData'));
fetchData.render(
  <HttpCall />
  
)

const useRefHook = ReactDOM.createRoot(document.getElementById('useRefHook'));
useRefHook.render(
  <UseRefCounter />
  
)

const useRefHookForDOM = ReactDOM.createRoot(document.getElementById('useRefHookForDOM'));
useRefHookForDOM.render(
  <DomRef />
  
)

reportWebVitals();
