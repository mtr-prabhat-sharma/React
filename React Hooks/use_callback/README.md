# useCallback hook

The useCallback hook in React is used to memoize functions so that they are not recreated on each render unless their dependencies change. This can be useful for optimizing performance in scenarios where functions are passed as props to child components or when functions are dependencies for other hooks.

Empty dependency array means the function does not depend on any values

When the dependency array in useCallback is not empty, the memoized function will be recreated only when the values in the dependency array change. This can be useful when the function relies on certain values or props that might change over time, and you want to ensure that the function is updated accordingly.