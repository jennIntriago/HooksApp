import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayoutEfect/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
import "./08-useReduce/intro-reduce";
// import { TodoApp } from "./08-useReduce/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);
