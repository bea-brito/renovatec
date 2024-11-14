import React, { useState } from "react";
import Sidebar from "../componentes/sidebar/lateral";
import TabelaProducao from "../componentes/TabelaProducao/TabelaProducao.js";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const HistoricoProducao = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 w-screen">
      <Cabecalho />
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}>
          <div className="container mx-auto">
            <h1 className="text-lg font-bold my-4">Histórico de Produção</h1>
            <TabelaProducao />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricoProducao;
