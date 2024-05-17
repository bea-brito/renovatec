import React, { useEffect, useState } from "react";
import Login from "./paginas/login.js";
import Senha from "./paginas/senha.js";
import Cadastro from "./paginas/cadastro.js";
import Menu from "./paginas/menu.js";
import ErroSessao from "./paginas/erroSessao.js";
import Pneu from "./paginas/pneu.js";
import HomePage from "./paginas/homePage.js";
import CadastroCliente from "./paginas/CadastroCliente.js";



import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HistoricoDeColeta from "./paginas/HistoricoDeColeta.js";
import AdicionarColeta from "./paginas/AdicionarColeta.js";
import VisualizarColeta from './paginas/visualizarcoleta.js';
import EditarColeta from './paginas/editarcoleta.js';
import PerfilUsuario from "./paginas/perfilUsuario.js"


function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    //Checa para ver se o token foi recebido, e depois monta esse token para ser usado pelo código. Só faz isso 1 vez
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/senha" element={<Senha />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="/erroSessao" element={<ErroSessao />} />
          <Route
            path="/menu"
            element={
              token ? <Menu token={token} /> : <Navigate to="/erroSessao" />
            }
          />
          <Route path="/pneu" element={<Pneu />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
          <Route path="/HistoricoDeColeta/AdicionarColeta" element={<AdicionarColeta />} />
          <Route path="/HistoricoDeColeta" element={<HistoricoDeColeta />} />
          <Route path="/visualizarcoleta/:id" element={<VisualizarColeta />} />
          <Route path="/editarcoleta/:id" element={<EditarColeta />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
