import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../componentes/sidebar/lateral";
import InfoColeta from "../componentes/infoColeta/infoColeta";
import { insertPneu } from "../services/pneuCRUD.js";
import { Alert } from "react-bootstrap";
import supabase from "../supabaseClient.js";

const AdicionarPneu = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [clienteData, setClienteData] = useState({
    id: [],
    cliente: [],
    vendedor: [],
    telefone: [],
    idSelecionado: "",
    indexSelecionado: "",
    date: "",
  });
  const [pneus, setPneus] = useState({
    cliente: "",
    dataPedido: "",
    telefone: "",
    vendedor: "",
    pneus: [],
  });

  const [pneuData, setPneuData] = useState({
    codigoPneu: "",
    matricula: "",
    marca: "",
    modelo: "",
    tamanho: "",
    dot: "",
    servico: "",
    valor: "",
  });

  const [coletaInfo, setColetaInfo] = useState({
    cliente: "",
    dataPedido: "",
    telefone: "",
    vendedor: "",
    pneus: [],
  });

  const navigate = useNavigate();

  const adicionarPneu = (novoPneu) => {
    setColetaInfo((prev) => ({
      ...prev,
      pneus: [...prev.pneus, novoPneu],
    }));
  };

  const handleChangePneu = (e) => {
    const { id, value } = e.target;
    setPneuData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSavePneu = async () => {
    try {
      setErrorMessage("");
      console.log("tentativa");
      const { data, error } = await insertPneu(
        pneuData.codigoPneu,
        pneuData.matricula,
        pneuData.tamanho,
        pneuData.marca,
        pneuData.modelo,
        pneuData.dot,
        pneuData.servico,
        pneuData.valor,
        id
      );
      if (error) setErrorMessage(error.message);
      if (!error && data) {
        setSuccessMessage("Pneu registrado com sucesso");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 w-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 ${
          isOpen ? "ml-60" : "ml-10"
        } transition-margin duration-300 p-4`}
      >
        <h2 className="text-lg font-bold mb-4">Adicionar Nova Coleta</h2>
        <div className="flex-1 transition-margin duration-300 p-4">
          <h3 className="text-lg font-bold mb-4">Informações dos Pneus</h3>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              id="codigoPneu"
              placeholder="Codigo do Pneu"
              value={pneuData.codigoPneu}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              id="matricula"
              placeholder="Matrícula"
              value={pneuData.matricula}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              id="marca"
              value={pneuData.marca}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione a marca</option>
              <option value="Marca1">Marca1</option>
              <option value="Marca2">Marca2</option>
            </select>
            <select
              id="modelo"
              value={pneuData.modelo}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o modelo</option>
              <option value="Modelo1">Modelo1</option>
              <option value="Modelo2">Modelo2</option>
            </select>
            <input
              type="text"
              id="tamanho"
              placeholder="Tamanho"
              value={pneuData.tamanho}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              id="dot"
              placeholder="DOT"
              value={pneuData.dot}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              id="servico"
              value={pneuData.servico}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o serviço</option>
              <option value="Recapagem">Recapagem</option>
              <option value="Manutenção">Manutenção</option>
            </select>
            <input
              type="text"
              id="valor"
              placeholder="Valor"
              value={pneuData.valor}
              onChange={handleChangePneu}
              className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              // onClick={handleAddPneu}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 col-span-1 md:col-span-2"
            >
              Adicionar pneu
            </button>
          </div>
          {pneus.length > 0 && (
            <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
              <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
                <tr>
                  <th className="px-6 py-3">Quantidade</th>
                  <th className="px-6 py-3">Matrícula</th>
                  <th className="px-6 py-3">Marca</th>
                  <th className="px-6 py-3">Modelo</th>
                  <th className="px-6 py-3">Tamanho</th>
                  <th className="px-6 py-3">DOT</th>
                  <th className="px-6 py-3">Serviço</th>
                </tr>
              </thead>
              <tbody>
                {pneus.map((pneu, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-6 py-4">{pneu.quantidade}</td>
                    <td className="px-6 py-4">{pneu.matricula}</td>
                    <td className="px-6 py-4">{pneu.marca}</td>
                    <td className="px-6 py-4">{pneu.modelo}</td>
                    <td className="px-6 py-4">{pneu.tamanho}</td>
                    <td className="px-6 py-4">{pneu.dot}</td>
                    <td className="px-6 py-4">{pneu.servico}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSavePneu}
        >
          Salvar
        </button>
        <ToastContainer />
      </div>
      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage("")}
          dismissible
        >
          {successMessage}
        </Alert>
      )}
    </div>
  );
};

export default AdicionarPneu;
