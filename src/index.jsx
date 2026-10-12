import "./style/index.css";

import App from "./App.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Layout

createRoot(document.getElementById("sharofiddin")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
