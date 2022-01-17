import {useState} from 'react';

function useCounter(initValue = 0){
  const [counter, setCounter] = useState(initValue);
  const increment = ()=>{
    console.log(setCounter);
    setCounter(prevCount => prevCount+1)
  }
  const decrement = ()=>{
    setCounter(prevCount => prevCount-1)
  }
  const reset = ()=>{
    setCounter(initValue);
  }
  return [counter, increment, decrement, reset];
}

export default useCounter;