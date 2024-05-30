import React, { useState, useEffect } from "react";
import Sidebar from "../componentes/sidebar/lateral";
import { Link } from 'react-router-dom';

const VisualizarColeta = ({ token }) => {
  const [coletas, setColetas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Simulando dados de coleta
  useEffect(() => {
    // Aqui você faria uma requisição ao seu backend para obter os dados das coletas
    // Neste exemplo, estamos simulando dados estáticos
    const dadosColetas = [
      {
        id: 1,
        data: "2024-05-17",
        matricula: "123",
        quantidade: "10",
        marca: "michelin",
        modelo: "Modelo1",
        tamanho: "175/65",
        dot: "1212",
        servico: "Recapagem",
        lancarProducao: "",
      },
      { id: 2, data: "2024-05-16", matricula: "456", quantidade: "20", marca: "michelin", modelo: "Modelo2", tamanho: "175/60", dot: "1313", servico: "Alinhamento", lancarProducao: "" },
      { id: 3, data: "2024-05-16", matricula: "789", quantidade: "30", marca: "michelin", modelo: "Modelo3", tamanho: "175/70", dot: "1414", servico: "Recapagem", lancarProducao: "" },
    ];
    setColetas(dadosColetas);
  }, []);

  return (
    <div className="max-w-full mx-auto py-6 flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}
      >
        <h2 className="text-2xl font-bold mb-4">Visualizar Pneus</h2>
        <table className="w-auto sm:w-auto table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl ">
          <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID do Pneu
              </th>
              <th scope="col" className="px-6 py-3">
                Data do Pedido
              </th>
              <th scope="col" className="px-6 py-3">
                Matrícula
              </th>
              <th scope="col" className="px-6 py-3">
                Quantidade
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Modelo
              </th>
              <th scope="col" className="px-6 py-3">
                Tamanho
              </th>
              <th scope="col" className="px-6 py-3">
                DOT
              </th>
              <th scope="col" className="px-6 py-3">
                Serviço
              </th>
              <th scope="col" className="px-6 py-3">
                Lançar Produção
              </th>
            </tr>
          </thead>
          <tbody>
            {coletas.map((pneu, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">{pneu.id}</td>
                <td className="px-6 py-4">{pneu.data}</td>
                <td className="px-6 py-4">{pneu.matricula}</td>
                <td className="px-6 py-4">{pneu.quantidade}</td>
                <td className="px-6 py-4">{pneu.marca}</td>
                <td className="px-6 py-4">{pneu.modelo}</td>
                <td className="px-6 py-4">{pneu.tamanho}</td>
                <td className="px-6 py-4">{pneu.dot}</td>
                <td className="px-6 py-4">{pneu.servico}</td>
                <td className="px-6 py-4">
                  <Link to={`/producao/${pneu.id}`}
                    className="text-green-500 hover:text-green-700 mr-2">
                    ⚙️
                  </Link>
                </td>               
                <td className="px-6 py-4 text-blue-500 hover:text-blue-700 cursor-pointer"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisualizarColeta;
