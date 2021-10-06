import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { addMessageEntry, addPostEntry, updatePostEntry } from "./redux/state";
import reportWebVitals from "./reportWebVitals";

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPostEntry={addPostEntry}
        addMessageEntry={addMessageEntry}
        updatePostEntry={updatePostEntry}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
