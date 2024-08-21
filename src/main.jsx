import React from "react"; // Corazon de react
import ReactDOM from "react-dom/client"; // Un adapatador para gestionar el DOM
import "./index.css";
import InicioApp from "./InicioApp";
import * as bootstrap from "bootstrap"; /* javascript bootstrap */
import { UsuariosProvider } from "./contexts/UsuariosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsuariosProvider>
    <InicioApp />
  </UsuariosProvider>
);
