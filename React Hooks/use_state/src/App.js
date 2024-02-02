/**
 * 
In React, the useState hook is used to add state variables to functional components. It allows functional components to manage local state without converting them into class components.
 */
import './App.css';
import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);

  /* Below code decreases the counter by 1 only. Not correct way */
//  const decrement = () => {
//     setCount(count - 1 )
//     setCount(count - 1 )
//   }

 /* Correct method to use */
const decrement = () => {
  setCount(prevVal => prevVal - 1);
  
}
  const increment = () => {
    setCount(prevVal => prevVal + 1);
  }
  return (
    <>
      
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
    );
}

export default App;
