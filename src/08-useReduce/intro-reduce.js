const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];
const todoReduce = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") return [...state, action.payload];
};

let todos = todoReduce();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};
todos = todoReduce(todos, addTodoAction);
console.log({ state: todos });

//::::Hacer esto es mutar el estado, lo cual no se debe hacer. Es una mala práctica
// todos.push({
//   id: 2,
//   todo: "Recolectar la piedra del poder",
//   done: false,
// });
