import React, { useEffect, useState } from "react";
import Login from "./paginas/login.js";
import Senha from "./paginas/senha.js";
import Cadastro from "./paginas/cadastro.js";
import Menu from "./paginas/menu.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          {token ? <Route path="/menu" element={<Menu token={token} />} /> : ""}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
