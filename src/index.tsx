import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Provider from "./Provider/Provider";

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.querySelector("#root")
);
