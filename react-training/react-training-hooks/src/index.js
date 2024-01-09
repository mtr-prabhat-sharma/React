import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { DomRef, HooksCounter, HttpCall, UseRefCounter } from './components/UsingHook';
import { SampleContext } from './components/MyContext';
// import { A1, A2, A3 } from './components/C2C';
import { Container } from './components/Container';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const CommonShare = createContext();
// let styles = {color:'green'};

// root.render(
//   <React.StrictMode>
//     <A1 />
//     <hr />
//     <CommonShare.Provider value={styles}>
//       <A1 />
//       <A2 />
//       <div style={styles}>
//         <A3 />
//         {styles.color}  
//       </div>  
//     </CommonShare.Provider>    
//   </React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Container />  
  </React.StrictMode>
);




// const counter = ReactDOM.createRoot(document.getElementById('counter'));
// counter.render(
//     <div>
//       <HooksCounter />
//       <hr />
//     </div>  
// )

// const fetchData = ReactDOM.createRoot(document.getElementById('fetchData'));
// fetchData.render(
//   <HttpCall />
  
// )

// const useRefHook = ReactDOM.createRoot(document.getElementById('useRefHook'));
// useRefHook.render(
//   <UseRefCounter />
  
// )

// const useRefHookForDOM = ReactDOM.createRoot(document.getElementById('useRefHookForDOM'));
// useRefHookForDOM.render(
//   <DomRef />
  
// )

const myContext = ReactDOM.createRoot(document.getElementById('myContext'));
myContext.render(
  <SampleContext />
)

reportWebVitals();
