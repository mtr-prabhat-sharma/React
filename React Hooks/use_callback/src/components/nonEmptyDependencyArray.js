import React, { useCallback, useState } from 'react';

function NonEmptyDependencyArray() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = useCallback(() => {
        setCount(prev => prev + step);
    }, [step]);

    /**
     We memoize the increment function using useCallback with [step] as the 
     dependency array. This means that the increment function will be recreated 
     whenever the value of step changes.
     */
    return (
        <div>
            <h3>useCallback when dependency array is not empty</h3>
            <h3>Counter: {count}</h3>
            <h5>Step: {step}</h5>
            <button onClick={increment}>Increment by {step}</button>
            <input type='number' 
            value={step}
            onChange={(e) => setStep(Number(e.target.value))} />
        </div>
    )
}

export default NonEmptyDependencyArray;