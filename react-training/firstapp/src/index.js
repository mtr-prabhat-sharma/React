import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greetings, {C1} from './jsxComponent';
import { Mapper } from './jsxComponent';
import { SimpleTimer } from './Timer';
import { Counter } from './Counter';
import { DesiMovie, EnglishMovie } from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DesiMovie thumbnail='/favicon.ico' mname='Kantara' />
    <DesiMovie thumbnail='/logo192.png' mname='83' />
    <DesiMovie thumbnail='/logo192.png' mname='Mangalyan' />

    <EnglishMovie thumbnail='/favicon.ico' mname='Jumanji' />
    <EnglishMovie thumbnail='/favicon.ico' mname='Harry Porter' />
  </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  
    <div>
      <C1 />
    <Mapper />
    <Counter />
    </div>
  
);

const timerRoot = ReactDOM.createRoot(document.getElementById('timer'));
timerRoot.render(
  <SimpleTimer />
)


const counterRoot = ReactDOM.createRoot(document.getElementById('counter'));
counterRoot.render(
  <Counter />
)

setInterval(() => {
  counterRoot.render(
    <Counter />
  )
},100)
reportWebVitals();
