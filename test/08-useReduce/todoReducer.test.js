import { todoReducer } from "../../src/08-useReduce/todoReducer";

describe("Pruebas en el todoReducer", () => {
  //Estado inicial de la app
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 1,
        description: "Nuevo todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    //Que tenga dos entradas
    expect(newState.length).toBe(2);
    //que este arreglo contenga el objeto. El toContain nos ayuda a evaluar que este arreglo tenga tal objeto
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("debe de realizar el toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
  });
});
