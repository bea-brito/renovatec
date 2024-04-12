import React from "react";
import Login from "./paginas/login.js";
import Senha from "./paginas/senha.js";
import Cadastro from "./paginas/cadastro.js";
import Menu from "./paginas/menu.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/senha" element={<Senha />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
