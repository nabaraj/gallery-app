import React, { useState } from 'react';
import useCounter from './counterHooks';

export default function Conunter() {
  const [messageObj, setMessage] = useState({ message: '', id: 1 });
  const [counter, increment, decrement, reset] = useCounter(5);

  const addMessage = () => {
    const newMessageObj = { ...messageObj, message: 'dummy content' };
    setMessage(newMessageObj);
  }
  return (
    <div>
      {messageObj.id}-{messageObj.message}
      <h3>Display counter {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addMessage}>Update</button>
    </div>
  )
}
