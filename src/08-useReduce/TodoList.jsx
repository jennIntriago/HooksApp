import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleToDo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onToggleToDo={onToggleToDo}
          />
        ))}
        {/*  */}
      </ul>
    </>
  );
};
