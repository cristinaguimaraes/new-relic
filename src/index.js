import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultErrorBoundary } from "components/DefaultErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Router>
        <App />
      </Router>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
