import React, { useState, useEffect } from "react";
import Sidebar from "../componentes/sidebar/lateral";

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
        cliente: "Cliente A",
        status: "Em andamento",
      },
      { id: 2, data: "2024-05-16", cliente: "Cliente B", status: "Concluído" },
      { id: 3, data: "2024-05-15", cliente: "Cliente C", status: "Pendente" },
    ];
    setColetas(dadosColetas);
  }, []);

  return (
    <div className="max-w-full mx-auto py-6 flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}
      >
        <h2 className="text-2xl font-bold mb-4">Visualizar Coleta</h2>
        <table className="w-auto sm:w-auto table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl ">
          <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID da Coleta
              </th>
              <th scope="col" className="px-6 py-3">
                Data do Pedido
              </th>
              <th scope="col" className="px-6 py-3">
                Cliente
              </th>
              <th scope="col" className="px-6 py-3">
                Status do Pedido
              </th>
            </tr>
          </thead>
          <tbody>
            {coletas.map((coleta, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">{coleta.id}</td>
                <td className="px-6 py-4">{coleta.data}</td>
                <td className="px-6 py-4">{coleta.cliente}</td>
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
