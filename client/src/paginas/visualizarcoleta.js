import React, { useState, useEffect } from "react";
import Sidebar from "../componentes/sidebar/lateral";
import { Link, useParams } from "react-router-dom";
import { getPneuByColeta } from "../services/pneuCRUD";

const VisualizarColeta = ({ token }) => {
  const { id } = useParams();
  const [pneus, setPneus] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Simulando dados de coleta
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await getPneuByColeta(id);
      if (error) {
        console.log("Error:");
        console.log(error);
        throw error;
      }

      const pneusArray = data.map((item) => ({
        id: item.ID_Pneu,
        codigo_pneu: item.codigo_pneu,
        matricula: item.matricula,
        marca: item.marca,
        modelo: item.modelo,
        tamanho: item.tamanho,
        dot: item.DOT,
        servico: item.servico,
        valor: item.valor,
      }));

      setPneus(pneusArray);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-full mx-auto py-6 flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`ml-${isOpen ? "60" : "10"} flex-1 flex flex-col px-4`}>
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
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                Lançar Produção
              </th>
            </tr>
          </thead>
          <tbody>
            {pneus.map((pneu, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">{pneu.id}</td>
                <td className="px-6 py-4">{pneu.codigo_pneu}</td>
                <td className="px-6 py-4">{pneu.matricula}</td>
                <td className="px-6 py-4">{pneu.marca}</td>
                <td className="px-6 py-4">{pneu.modelo}</td>
                <td className="px-6 py-4">{pneu.tamanho}</td>
                <td className="px-6 py-4">{pneu.dot}</td>
                <td className="px-6 py-4">{pneu.servico}</td>
                <td className="px-6 py-4">{pneu.valor}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/producao/${pneu.id}`}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
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
