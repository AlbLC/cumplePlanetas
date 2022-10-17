import React from "react";
// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Calculadora from "./components/Calculadora";
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from "./components/Info";
import Carrusel from "./components/Carrusel";
import Navbar from "./components/Navbar";
import MenuPlanetario from "./components/MenuPlanetario";
import Tarjetas from "./components/Tarjetas"

function App() {

  return (
    <div className="app">
      {/* <Navbar /> */}
      <Carrusel />
      <MenuPlanetario/>
      <Info />
      <Calculadora />
      <Tarjetas/>
    </div>
  );
}
export default App;
