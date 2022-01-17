import React from 'react';
import useCounter from './counterHooks';

export default function ConunterSecond() {
  const [counter, increment, decrement, reset] = useCounter(10);
  
  return (
    <div>
      <h3>Display counter {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
