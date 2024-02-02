/**
 * In React, the useEffect hook allows you to perform side effects in functional 
 * components. Side effects may include data fetching, subscriptions, or manually 
 * changing the DOM. The useEffect hook runs after every render and replaces 
 * lifecycle methods such as componentDidMount, componentDidUpdate, and 
 * componentWillUnmount in class components.
 */

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [second, setSeconds] = useState(0);

  useEffect(() => {
    document.title = `Seconds: ${second}`;

    const intervalId = setTimeout(() => {
      setSeconds(prevVal => prevVal + 1);
    },1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [second]);

  return (
    <>
      <h2>Timer: {second} seconds</h2>
    </>
  );
}

export default App;
