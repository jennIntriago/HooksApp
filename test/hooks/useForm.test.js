import { act, renderHook } from "@testing-library/react";

import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Jennifer",
    email: "jenn@gmail.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newValue = "Jenn";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    //Para simular el evento del input, debemos hacerlo tal como en el customHook, es decir desestructurar el target y mandarle como objeto el nombre y el valor
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    //Comparamos que el nuevo valor sea igual al newValue y que el form haya cambiado
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de realizar el reset del formulario", () => {
    const newValue = "Jenn";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    //Para simular el evento del input, debemos hacerlo tal como en el customHook, es decir desestructurar el target y mandarle como objeto el nombre y el valor
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });
    //Comparamos que el nuevo valor sea igual al newValue y que el form haya cambiado
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
