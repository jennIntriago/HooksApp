import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHook.jsx />", () => {
  //jest function
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //beforeEach significa antes de las pruebas, sirve para limpiar
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrar el componente por defecto", () => {
    //este es el estado del hook cuando es el componente por defecto
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHook />);
    //Verificamos si en nuestro componente existe el texto Loading...
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking Bag Quotes"));
    // Podemos agarrar la referencia del botón de nuestro componente con la siguiente linea, puede ser enviando solo Button o con el nombre asignado
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    //Aqui evaluamos si la propiedad del boton disebled es verdadera.
    expect(nextButton.disabled).toBeTruthy();
  });

  test("debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jennifer", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHook />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Jennifer")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeFalsy();

    // screen.debug();
  });

  test("Debe de llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jennifer", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    //disparar un evento de click
    fireEvent.click(nextButton);
    //Cómo sé que increment ha sido llamada?
    //Haciendo un mock del useCounter
    expect(mockIncrement).toHaveBeenCalled();
  });
});
