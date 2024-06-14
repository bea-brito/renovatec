import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import TabelaColetas from "../componentes/tabelaColeta/TabelaColetas";
import Botao from "../componentes/botao/botao";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const HistoricoDeColeta = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100">
      <Cabecalho />
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}>
          <div className="container mx-auto">
            <h1 className="text-lg font-bold my-4">Histórico de Coletas</h1>
            <TabelaColetas />
            <div className="flex justify-end mt-8">
              <Botao
                className="w-1/4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                type="submit"
              >
                <Link to="./AdicionarColeta">Adicionar nova coleta</Link>
              </Botao>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricoDeColeta;
