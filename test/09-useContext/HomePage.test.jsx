import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en <HomePage.jsx />", () => {
  const user = {
    id: 1,
    name: "Jennifer",
  };
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //Pata usarn el getByLabelText debemos usar el aria-label
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("debe de mostrar el componente CON el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //Pata usarn el getByLabelText debemos usar el aria-label
    // console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());

    // screen.debug();
  });
});
