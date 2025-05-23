import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles.css"; // Import global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
