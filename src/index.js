import React from "react";
import "index.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/E-commerce-website">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
