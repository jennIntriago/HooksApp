import { useState } from "react";

// En react es una buena practica nombrar un custom hook con use al inicio
export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(counter);
  };

  return {
    counter,
    increment,
  };
};
