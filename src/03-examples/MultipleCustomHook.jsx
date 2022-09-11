import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  //Si mi data tiene un valor,entonces toma la data de posicion 0
  //La doble negracion,en este caso lo empleamos para transformar ese valor indefinido en un boolean y asi hacer la condicion
  const { author, quote } = !!data && data[0];
  //   console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>Breaking Bag Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
