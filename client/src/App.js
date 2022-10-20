import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}
export default App;
