import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state, { addMessageEntry, addPostEntry } from "./redux/state";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPostEntry={addPostEntry} addMessageEntry={addMessageEntry} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
