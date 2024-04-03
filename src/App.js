import React from "react";
import Login from "./componentes/loginPage/login";
import Senha from "./componentes/redefinirSenha/senha";
import Cadastro from "./componentes/cadastrar/cadastro";
import Menu from "./componentes/menu/menu";
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
