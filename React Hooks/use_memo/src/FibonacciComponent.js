import React, { useMemo } from 'react';

const fibonnaci = (n) => {
    if(n <= 1) {
        return n;
    }
    return fibonnaci(n-1) + fibonnaci(n-2);
};

function FibonacciComponent({n}) {

    const result = useMemo(() => fibonnaci(n), [n]);

    return (
        <div>
            <h3>Fibonacci Component !</h3>
            <h2>Fibonacci number at index {n}: {result}</h2>
        </div>

    );
}

export default FibonacciComponent;