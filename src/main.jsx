import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ClassCmp from "./ClassCmp";
import FuncCmp from "./FuncCmp";
import ClassName from "./FullName";

ReactDOM.render(
  <React.StrictMode>
    <ClassName />
    <FuncCmp />
    <ClassCmp />
  </React.StrictMode>,
  document.getElementById("root")
);
