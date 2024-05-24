import React from "react";
import Login from "./paginas/login.js";
import Senha from "./paginas/senha.js";
import Cadastro from "./paginas/cadastro.js";
import ErroSessao from "./paginas/erroSessao.js";
import HomePage from "./paginas/homePage.js";
import CadastroCliente from "./paginas/CadastroCliente.js";
import { Route, Routes } from "react-router-dom";
import HistoricoDeColeta from "./paginas/HistoricoDeColeta.js";
import HistoricoCliente from "./paginas/HistoricoCliente.js";
import AdicionarColeta from "./paginas/AdicionarColeta.js";
import VisualizarColeta from "./paginas/visualizarcoleta.js";
import EditarColeta from "./paginas/editarcoleta.js";
import PerfilUsuario from "./paginas/perfilUsuario.js";
import EditarCliente from "./paginas/EditarCliente.js";
import AuthRoute from "./componentes/autenticacao/AuthRoute.js";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <div>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/perfilUsuario" element={<PerfilUsuario />} />
              <Route path="/CadastroCliente" element={<CadastroCliente />} />
              <Route
                path="/HistoricoDeColeta/AdicionarColeta"
                element={<AdicionarColeta />}
              />
              <Route
                path="/HistoricoDeColeta"
                element={<HistoricoDeColeta />}
              />
              <Route path="/HistoricoCliente" element={<HistoricoCliente />} />
              <Route
                path="/visualizarcoleta/:id"
                element={<VisualizarColeta />}
              />
              <Route path="/editarcoleta/:id" element={<EditarColeta />} />
              <Route path="/EditarCliente/:id" element={<EditarCliente />} />
            </Route>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Login />} />
            <Route path="/senha" element={<Senha />} />
            <Route path="/erroSessao" element={<ErroSessao />} />
            {/* <Route path="/menu" element={<Menu />} />
            <Route path="/pneu" element={<Pneu />} /> */}
          </Routes>
        </div>
      </Container>
      ;
    </>
  );
}

export default App;
