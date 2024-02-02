import './App.css';
import { useState } from 'react';
import FibonacciComponent from './FibonacciComponent';

function App() {
  const [index, setIndex] = useState(1);
  return (
    <div>
      <input 
      type='number'
      value={index}
      onChange={(e) => setIndex(Number(e.target.value))} />
      <FibonacciComponent n={index}/>
    </div>
  );
}

export default App;
