import React from "react";
import ReactDOM from "react-dom/client";
import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayoutEfect/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>
);
