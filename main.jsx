import React from "react";
import { createRoot } from "react-dom/client";
import { GestionApp } from "./GestionApp";
import './src/styles/main.scss';

const domE = document.getElementById("app");
const root = createRoot(domE);

root.render(
  <React.StrictMode>
    <GestionApp />
  </React.StrictMode>
);
