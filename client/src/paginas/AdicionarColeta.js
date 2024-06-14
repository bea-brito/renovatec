import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../componentes/sidebar/lateral.js";
import InfoColeta from "../componentes/infoColeta/infoColeta.js";
import { insertColeta } from "../services/coletaCRUD.js";
import { Alert } from "react-bootstrap";
import supabase from "../supabaseClient.js";

const AdicionarColeta = () => {
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

  const handleSaveColeta = async () => {
    const pneuObjeto = {
      codigo_pneu: parseInt(pneuData.codigoPneu),
      matricula: pneuData.matricula,
      marca: pneuData.marca,
      modelo: pneuData.modelo,
      tamanho: pneuData.tamanho,
      DOT: pneuData.dot,
      servico: pneuData.servico,
      valor: pneuData.valor,
      status: "Recebido",
    };

    try {
      setErrorMessage("");
      console.log("tentativa");
      const { data: resultado, error } = await supabase.rpc(
        "criar_coleta_e_pneus",
        {
          p_status: "Recebido",
          p_data: clienteData.date,
          p_id_cliente: clienteData.idSelecionado,
          p_pneus: [pneuObjeto],
        }
      );
      console.log(clienteData.date);
      if (error) setErrorMessage(error.message);
      if (!error && resultado) {
        console.log("Coleta Criada");
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
        <InfoColeta
          pneus={coletaInfo.pneus}
          adicionarPneu={adicionarPneu}
          clienteData={clienteData}
          setClienteData={setClienteData}
          pneuData={pneuData}
          setPneuData={setPneuData}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSaveColeta}
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

export default AdicionarColeta;
