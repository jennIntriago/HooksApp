import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReduce/TodoItem";

describe("Pruebas en el componente <TodoItem.jsx />", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  //Hacemos la simulacion de estas funciones
  const onDeleteTodoMock = jest.fn();
  const onToggleToDoMock = jest.fn();

  //Hacemos la limpiea de los mocks
  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el Todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("ext-decoration-line-through");
  });

  test("debe de mostrar el Todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el ToggleTodo cuando se hace click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    //simulamos dar click en el elementos span
    fireEvent.click(spanElement);
    expect(onToggleToDoMock).toBeCalledWith(todo.id);
  });

  test("el boton debe de llamar el deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleToDo={onToggleToDoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );
    const buttonElement = screen.getByRole("button");
    //simulamos dar click en el elementos span
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toBeCalledWith(todo.id);
  });
});
