import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { RoomProvider } from "./Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  rootElement
);

// serviceWorker.unregister();
