import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment } = useCounter();
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
      <button className="btn btn-primary">Reset</button>
      <button className="btn btn-primary">-1</button>
    </>
  );
};
