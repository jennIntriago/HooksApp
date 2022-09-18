import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd.jsx";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCounter,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp {todosCount},<small>Pendientes: {pendingTodosCounter}</small>
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
