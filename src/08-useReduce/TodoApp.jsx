import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd.jsx";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del alma",
  //   done: false,
  // },
];

const init = () => {
  //intentar parsear todo lo del localStorage, si es nulo entonces asigna un arreglo vacio
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    //Guardar strigns en locaStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log(todo);
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    //Para mandar la accion al reduce se usa dispatchTodo
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleToDo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO </h4>
          <hr />
          {/* TodoAdd  onNewTodos(todo)*/}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* FIN TodoAdd */}
        </div>
      </div>
    </>
  );
};
