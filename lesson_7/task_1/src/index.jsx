import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import NumersList from "./NumersList.jsx";

const rootElement = document.querySelector("#root");

const numbers = [1, 2, 3, 4, 5, 6, 7];

ReactDOM.render(<NumersList numbers={numbers} />, rootElement);
