import { useState } from 'react';

export function useCounter(length: number) {
    const [count, setCount] = useState(0);

    function increment() {
        if (count >= length) {
            setCount(0)
        }
        setCount((count) => count + 1);
    }

    function decrement() {
        if (count === 0) {
            setCount(length)
        }
        setCount((count) => count - 1);
    }
  
    return { count, increment, decrement };
}

export default useCounter;
