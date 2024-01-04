import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/header';
import { Aside } from './components/aside';
import { Footer } from './components/footer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
  <header>
    <Header />
  </header>
)

const aside = ReactDOM.createRoot(document.getElementById('aside'));
aside.render(
  <aside>
    <Aside />
  </aside>
)

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <footer>
    <Footer />
  </footer>
)

reportWebVitals();
