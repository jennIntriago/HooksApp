import { act, renderHook } from "@testing-library/react";

import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    // renderHook nos permite regresar o renderizar un hook
    // este renderHooks nos regresa la informacion de como se encuentra dicho hook en ese momento, es decir el resultado
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    //esperamos que el valor inicial sea 10 porque asi lo declaramos en el hook
    expect(counter).toBe(10);
    //Esperamos que sea una funcion por eso usamos toEqual y que espere una funcion
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    //Cuando llamamos al renderHook, literalmente en la funcion le podemos pasar los parametros que recibe, en este caso 100 que nos interesa.
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    //act es una funcion que recibe un callback, no ayuda a corregir el error de consola
    act(() => {
      increment();
      increment(2);
    });

    //como queremos el valor actualizado debemos llamar al counter de la siguiente manera
    expect(result.current.counter).toBe(103);
  });

  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    //act es una funcion que recibe un callback, no ayuda a corregir el error de consola
    act(() => {
      decrement();
      decrement(2);
    });

    //como queremos el valor actualizado debemos llamar al counter de la siguiente manera
    expect(result.current.counter).toBe(97);
  });

  test("Debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, reset } = result.current;

    //act es una funcion que recibe un callback, no ayuda a corregir el error de consola
    act(() => {
      decrement();
      reset();
    });
    //como queremos el valor actualizado debemos llamar al counter de la siguiente manera
    expect(result.current.counter).toBe(100);
  });
});
