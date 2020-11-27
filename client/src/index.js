import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import Provider from "./Provider/Provider.jsx";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#root")
);
