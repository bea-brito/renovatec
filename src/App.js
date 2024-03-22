import React from 'react';
import Login from './componentes/loginPage/login';
import Senha from './componentes/redefinirSenha/senha';
import Cadastro from './componentes/cadastrar/cadastro'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/senha" element={<Senha />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;