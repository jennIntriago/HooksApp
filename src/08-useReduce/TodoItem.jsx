export const TodoItem = ({ todo, onDeleteTodo, onToggleToDo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          onClick={() => onToggleToDo(todo.id)}
          aria-label="span"
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
