import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import {
  getColetaWithCliente,
  deleteColetaById,
} from "../../services/coletaCRUD";

const TabelaColetas = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedColetaId, setSelectedColetaId] = useState(null); // Adiciona um estado para armazenar o ID da coleta selecionada
  const [selectedCliente, setSelectedCliente] = useState(null); // Adiciona um estado para armazenar o nome do cliente selecionado
  const [coletas, setColetas] = useState([]);

  const handleRemoveColeta = (id) => {
    if (window.confirm("Tem certeza que deseja excluir? 🤨")) {
      removerColeta(id);
    }
    fetchData();
  };

  const handleOpenModal = (id, cliente) => {
    setSelectedColetaId(id); // Define o ID da coleta selecionada
    setSelectedCliente(cliente);
    setModalOpen(true); // Abre o modal
  };

  const removerColeta = async (id) => {
    try {
      const { error } = await deleteColetaById(id);
      if (error) {
        console.log(error);
        throw error;
      }
      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const { data, error } = await getColetaWithCliente();
      if (error) {
        console.log("Error:");
        console.log(error);
        throw error;
      }

      const coletasArray = data.map((item) => ({
        id: item.ID_Coleta,
        data: item.data,
        status: item.status,
        cliente: item.Cliente.nome,
      }));

      setColetas(coletasArray);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
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
              QR Code
            </th>
            <th scope="col" className="px-6 py-3">
              Ações
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
              <td className="px-6 py-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                <button
                  onClick={() => handleOpenModal(coleta.id, coleta.cliente)}
                >
                  Gerar QRCode
                </button>
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`/visualizarcoleta/${coleta.id}`}
                  className="text-green-500 hover:text-green-700 mr-2"
                >
                  👁️
                </Link>
                <Link
                  to={`/editarcoleta/${coleta.id}`}
                  className="text-yellow-500 hover:text-yellow-700 mr-2"
                >
                  ✏️
                </Link>
                <button
                  onClick={() => handleRemoveColeta(coleta.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </td>
              <td className="px-6 py-4">
                {coleta.status}
                {/* <select
                  defaultValue={coleta.status}
                  className="form-select block w-full mt-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                >
                  <option value="Recebido">Recebido</option>
                  <option value="Em produção">Em produção</option>
                  <option value="Produzido">Produzido</option>
                  <option value="Entregue">Entregue</option>
                </select> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p>
          ID da Coleta: <strong>{selectedColetaId}</strong>
          <br />
          Cliente: <strong>{selectedCliente}</strong>
        </p>
      </Modal>
    </>
  );
};

export default TabelaColetas;
