import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
