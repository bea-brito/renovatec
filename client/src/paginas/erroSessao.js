import React from "react";
import { Link } from "react-router-dom";
import Botao from "../componentes/botao/botao";

const ErroSessao = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
          Erro de Autorização
        </h3>
        <p className="mb-6">
          Por favor, faça login para acessar este conteúdo.
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <Botao className="bg-black hover:bg-yellow-500 text-white py-2 px-4 rounded">
              Ir para o Login
            </Botao>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErroSessao;
