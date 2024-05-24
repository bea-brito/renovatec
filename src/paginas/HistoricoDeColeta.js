import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import TabelaColetas from "../componentes/tabelaColeta/TabelaColetas";
import Botao from "../componentes/botao/botao";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const HistoricoDeColeta = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [coletas, setColetas] = useState([
    { id: 1, data: "2023-05-01", cliente: "João", status: "Recebido" },
    {
      id: 2,
      data: "2023-05-02",
      cliente: "Ronildo César",
      status: "Em produção",
    },
    { id: 3, data: "2023-05-03", cliente: "Sindônibus", status: "Produzido" },
  ]);
  const [addedIds, setAddedIds] = useState(new Set([1, 2, 3]));

  useEffect(() => {
    const novaColeta = location.state?.novaColeta;
    if (novaColeta && !addedIds.has(novaColeta.idColeta)) {
      const coletaAdicionada = {
        id: novaColeta.idColeta,
        data: novaColeta.dataPedido,
        cliente: novaColeta.cliente,
        status: "Nova",
      };
      setColetas((prevColetas) => [...prevColetas, coletaAdicionada]);
      setAddedIds((prevIds) => new Set(prevIds.add(novaColeta.idColeta)));
      navigate("/historicoDeColeta", { replace: true, state: {} }); // Limpar o estado para evitar reprocessamento
    }
  }, [location.state, navigate, addedIds]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const removerColeta = (id) => {
    setColetas(coletas.filter((coleta) => coleta.id !== id));
    setAddedIds((prevIds) => {
      const newSet = new Set(prevIds);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Cabecalho />
      <div className="flex flex-grow">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}>
          <div className="container mx-auto">
            <h1 className="text-lg font-bold my-4">Histórico de Coletas</h1>
            <TabelaColetas coletas={coletas} removerColeta={removerColeta} />
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
