import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import TabelaCliente from "../componentes/tabelaCliente/TabelaCliente";
import Botao from "../componentes/botao/botao";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const HistoricoClientes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Cabecalho />
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}>
          <div className="container mx-auto">
            <h1 className="text-lg font-bold my-4">Histórico de Clientes</h1>
            <TabelaCliente />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricoClientes;
