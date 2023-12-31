import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins";
import "@fontsource/baskervville";
import "@fontsource/inter";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
