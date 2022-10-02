import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage.jsx />", () => {
  const user = {
    id: 1,
    name: "Jennifer",
  };

  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de llamar el setUser cuando se hace click", () => {
    //simular que el setUser se haga
    const setUserMock = jest.fn();
    render(
      //Hay que establer el setUser en el value
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalledWith({
      email: "jenn@gmail.com",
      id: 123,
      name: "Jenny",
    });
  });
});
