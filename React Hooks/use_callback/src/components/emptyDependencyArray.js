import React, { useState, useCallback } from 'react';

function EmptyDependencyArray() {

    const [count, setCount] = useState(0);

    // Define a memoized increment function using useCallback
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Empty dependency array means the function does not depend on any values

    /**
     We use the useCallback hook to memoize the increment function. This means that 
     the increment function will only be recreated if its dependencies change. 
     Since we provide an empty dependency array ([]), the increment function will 
     remain the same throughout the component's lifecycle.
     */
    return (
        <div>
            <h3>useCallback when dependency array is  empty</h3>
            <h4>Counter: {count}</h4>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default EmptyDependencyArray;