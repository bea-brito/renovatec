import React, { useState, useEffect } from "react";
import supabase from "../supabaseClient.js";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import Cabecalho from "../componentes/cabecalho/Cabecalho";
import Botao from "../componentes/botao/botao";
import Modal from "../componentes/modal/modal";

const Producao = () => {
  const { idPneu } = useParams(); // Obtém o ID do pneu dos parâmetros da URL
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const [clienteData, setClienteData] = useState(null);
  const [coletaData, setColetaData] = useState(null);
  const [pneuData, setPneuData] = useState(null);
  const [formData, setFormData] = useState({
    prev: "",
    modelo: "",
    data: "",
    EIExaminador: "",
    EIdata: "",
    EIAproRepro: true,
    RasRaspador: "",
    Rasdata: "",
    RasAproRepro: true,
    RasRetCinta: true,
    EscExaminador: "",
    EscAproRepro: true,
    EscAproReproConserto: true,
    ACAplicador: "",
    OrbAplicador: "",
    CBCortador: "",
    CBTamanho: "",
    CBDesenho: "",
    ABAplicador: "",
    MontInsMontador: "",
    MonEnvMontador: "",
    AutCarga: "",
    AutAutoclave: "",
    AutPosicao: "",
    EFExaminador: "",
    EFData: "",
    EFConclusao: true,
    EFConclusaoReprocesso: "", 
    EFConclusaoRetrabalho: true,
    RasLargura: 0, 
    RasPerimetro: 0,
    ACAproRepro: true,
    OrbAproRepro: true,
    ABApro: true,
    CBAproRepro: true,
    MonAproRepro: true,
  });  

    // Função para buscar todos os dados relacionados
    useEffect(() => {
      const fetchAllData = async () => {
        try {
          // 1. Buscar dados da produção com base no ID do pneu
          const { data: producaoData, error: producaoError } = await supabase
            .from("Producao")
            .select("*")
            .eq("ID_Pneu", idPneu)
            .single();
  
          if (producaoError) throw producaoError;
          if (producaoData) setFormData(producaoData); // Armazena dados de produção
  
          // 2. Buscar dados do pneu associado à produção
          const { data: pneuData, error: pneuError } = await supabase
            .from("Pneu")
            .select("*, ID_Coleta")
            .eq("ID_Pneu", idPneu)
            .single();
  
          if (pneuError) throw pneuError;
          setPneuData(pneuData);
  
          // 3. Buscar dados da coleta associada ao pneu
          const { data: coletaData, error: coletaError } = await supabase
            .from("Coleta")
            .select("*, ID_Cliente")
            .eq("ID_Coleta", pneuData.ID_Coleta)
            .single();
  
          if (coletaError) throw coletaError;
          setColetaData(coletaData);
  
          // 4. Buscar dados do cliente associado à coleta
          const { data: clienteData, error: clienteError } = await supabase
            .from("Cliente")
            .select("*")
            .eq("ID_Cliente", coletaData.ID_Cliente)
            .single();
  
          if (clienteError) throw clienteError;
          setClienteData(clienteData);
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
        }
      };
  
      if (idPneu) {
        fetchAllData();
      }
    }, [idPneu]);

  // Função para buscar dados atuais da produção do pneu ao carregar a página
  useEffect(() => {
    const fetchProducaoData = async () => {
      if (!idPneu) {
        console.error("ID do pneu não encontrado.");
        return;
      }

      try {
        const { data, error } = await supabase
          .from("Producao")
          .select("*")
          .eq("ID_Pneu", idPneu)
          .single(); // Busca a linha específica de produção para o pneu

        if (error) throw error;
        if (data) setFormData(data); // Popula o formulário com os dados existentes
      } catch (error) {
        console.error("Erro ao buscar dados de produção:", error);
      }
    };

    fetchProducaoData();
  }, [idPneu]);

  // Função para lidar com mudanças nos inputs do formulário
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: type === "checkbox" ? checked : (value === "true" ? true : (value === "false" ? false : value)),
    }));
  };

  // Função chamada ao salvar as alterações
  const handleSave = async (e) => {
    e.preventDefault();

    if (!idPneu) {
      console.error("ID do pneu não encontrado.");
      return;
    }

    try {
      // Atualiza a linha na tabela Producao com base no ID_Pneu
      const { data, error } = await supabase
        .from("Producao")
        .update(formData) // Atualiza com os dados do formulário
        .eq("ID_Pneu", idPneu); // Filtra pelo ID do pneu

      if (error) {
        console.error("Erro ao atualizar dados:", error);
        return;
      }

      console.log("Dados atualizados com sucesso:", data);
      setModalOpen(true); // Abre o modal de confirmação
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  // Função para fechar o modal e redirecionar
  const handleCloseModal = () => {
    setModalOpen(false);
    navigate(`/visualizarcoleta/${idPneu}`);
  };

  // Estado para controle da barra lateral
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a barra lateral
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Estado e opções para o dropdown (exemplo)
  const [selectedOption, setSelectedOption] = useState("Selecione uma opção");
  const options = ["Opção 1", "Opção 2", "Opção 3"];

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Componente do cabeçalho */}
      <Cabecalho />

      <div className="flex flex-grow">
        {/* Componente da barra lateral */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="bg-gray-100 p-4 flex items-center justify-center w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <form onSubmit={handleSave}>
            {/* Seção: Dados do Cliente */}
            <section className="mb-6 bg-gray-100 w-full p-4 rounded-lg">
              <h1 className="text-xl font-bold mb-3">Linha de Produção</h1>
              <h2 className="text-xl font-bold mb-2">Dados do Cliente</h2>
              {clienteData ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                    <span>{clienteData.nome}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <span>{clienteData.email}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Telefone:</label>
                    <span>{clienteData.telefone}</span>
                  </div>
                </div>
              ) : (
                <p>Carregando dados do cliente...</p>
              )}
            </section>

            {/* Seção: Dados da Coleta */}
            <section className="mb-6 bg-gray-100 w-full p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Dados da Coleta</h2>
              {coletaData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                    <span>{coletaData.status}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Data:</label>
                    <span>{new Date(coletaData.data).toLocaleDateString()}</span>
                  </div>
                </div>
              ) : (
                <p>Carregando dados da coleta...</p>
              )}
            </section>

            {/* Seção: Dados do Pneu */}
            <section className="mb-6 bg-gray-100 w-full p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Dados do Pneu</h2>
              {pneuData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Código:</label>
                    <span>{pneuData.codigo_pneu}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Modelo:</label>
                    <span>{pneuData.modelo}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Marca:</label>
                    <span>{pneuData.marca}</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                    <span>{pneuData.status}</span>
                  </div>
                </div>
              ) : (
                <p>Carregando dados do pneu...</p>
              )}
            </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Exame Inicial */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Exame Inicial</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="EIExaminador"
                    >
                      Selecionar Examinador:
                    </label>
                    <div className="relative">
                      <select
                        id="EIExaminador"
                        value={formData.EIExaminador}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="EIdata"
                    >
                      Data
                    </label>
                    <input
                      id="EIdata"
                      type="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.EIdata}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="EIAproRepro"
                        name="EIAproRepro"
                        className="mr-2 leading-tight"
                        value="true"
                        checked={formData.EIAproRepro === true}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="EIAproRepro"
                        className="block text-gray-700 text-sm font-bold"
                      >
                        Aprovado
                      </label>
                    </div>
                    <div className="flex items-center ml-4">
                      <input
                        type="radio"
                        id="EIAproRepro"
                        name="EIAproRepro"
                        className="mr-2 leading-tight"
                        value="false"
                        checked={formData.EIAproRepro === false}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="EIAproRepro"
                        className="block text-gray-700 text-sm font-bold"
                      >
                        Reprovado
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Raspa */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Raspa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="RasRaspador"
                    >
                      Selecionar Raspador:
                    </label>
                    <div className="relative">
                      <select
                        id="RasRaspador"
                        value={formData.RasRaspador}
                        onChange={handleInputChange}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Rasdata"
                    >
                      Data
                    </label>
                    <input
                      id="Rasdata"
                      type="date"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.Rasdata}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="RasAproRepro"
                        name="RasAproRepro"
                        className="mr-2 leading-tight"
                        value="true"
                        checked={formData.RasAproRepro === true}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="RasAproRepro"
                        className="block text-gray-700 text-sm font-bold"
                      >
                        Aprovado
                      </label>
                    </div>
                    <div className="flex items-center ml-4">
                      <input
                        type="radio"
                        id="RasAproRepro"
                        name="RasAproRepro"
                        className="mr-2 leading-tight"
                        value="false"
                        checked={formData.RasAproRepro === false}
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor="RasAproRepro"
                        className="block text-gray-700 text-sm font-bold"
                      >
                        Reprovado
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label className="block text-gray-700 text-sm font-bold mr-2">
                      Raio: 120mm
                    </label>
                    <label className="block text-gray-700 text-sm font-bold mr-2">
                      Largura:
                    </label>
                    <input
                      id="RasRetCinta"
                      type="checkbox"
                      className="mr-2"
                      checked={formData.RasRetCinta}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="RasRetCinta"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Retirada de Cinta
                    </label>
                  </div>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Escareação */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Escarenação</h2>
                <div className="flex items-center mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mr-2"
                    htmlFor="EscExaminador"
                  >
                    Examinador:
                  </label>
                  <select
                    id="EscExaminador"
                    value={formData.EscExaminador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex items-center">
                    <input
                      type="radio"
                      id="EscAproRepro"
                      name="EscAproRepro"
                      className="mr-2 leading-tight"
                      value="true"
                      checked={formData.EscAproRepro === true}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EscAproRepro"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Aprovado
                    </label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <input
                      type="radio"
                      id="EscAproRepro"
                      name="EscAproRepro"
                      className="mr-2 leading-tight"
                      value="false"
                      checked={formData.EscAproRepro === false}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EscAproRepro"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Reprovado
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="EscAproReproConserto"
                      type="checkbox"
                      className="mr-2"
                      checked={formData.EscAproReproConserto}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EscAproReproConserto"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Aprov.conserto
                    </label>
                  </div>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Aplicação de Cola */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Aplicação de Cola</h2>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ACAplicador"
                >
                  Aplicador:
                </label>
                <div className="relative">
                  <select
                    id="ACAplicador"
                    value={formData.ACAplicador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Orbicushion */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Orbicushion</h2>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="OrbAplicador"
                >
                  Aplicador:
                </label>
                <div className="relative">
                  <select
                    id="OrbAplicador"
                    value={formData.OrbAplicador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Corte de Banda */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Corte de Banda</h2>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="CBCortador"
                >
                  Cortador:
                </label>
                <div className="flex flex-wrap">
                  <select
                    id="CBCortador"
                    value={formData.CBCortador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 w-full">
                    Tamanho:
                    <input
                      id="CBTamanho"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.CBTamanho}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 w-full">
                    Desenho:
                    <input
                      id="CBDesenho"
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={formData.CBDesenho}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Aplicação de Banda */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Aplicação de Banda</h2>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ABAplicador"
                >
                  Aplicador:
                </label>
                <div className="relative">
                  <select
                    id="ABAplicador"
                    value={formData.ABAplicador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Montagem */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Montagem</h2>
                <div className="flex items-center mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold w-24"
                    htmlFor="MontInsMontador"
                  >
                    Inserlope:
                  </label>
                  <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                    Montador
                  </span>
                  <select
                    id="MontInsMontador"
                    value={formData.MontInsMontador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center">
                  <label
                    className="block text-gray-700 text-sm font-bold w-24"
                    htmlFor="MonEnvMontador"
                  >
                    Envelope:
                  </label>
                  <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                    Montador
                  </span>
                  <select
                    id="MonEnvMontador"
                    value={formData.MonEnvMontador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Autoclave */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Autoclave</h2>
                <div className="flex">
                  <label className="text-gray-700 text-sm font-bold mr-2 ml-10">
                    Carga:
                  </label>
                  <input
                    id="AutCarga"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.AutCarga}
                    onChange={handleInputChange}
                  />
                  <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                    Autoclave:
                  </span>
                  <input
                    id="AutAutoclave"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.AutAutoclave}
                    onChange={handleInputChange}
                  />
                  <label className="text-gray-700 text-sm font-bold mr-10 ml-10">
                    Posição:
                  </label>
                  <input
                    id="AutPosicao"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.AutPosicao}
                    onChange={handleInputChange}
                  />
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              {/* Seção: Exame Final */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Exame Final</h2>
                <div className="flex">
                  <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                    Examinador:
                  </span>
                  <select
                    id="EFExaminador"
                    value={formData.EFExaminador}
                    onChange={handleInputChange}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <input
                    id="EFData"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 ml-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.EFData}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center ml-4 mt-3">
                    <input
                      type="radio"
                      id="EFConclusao"
                      name="EFConclusao"
                      className="mr-2 leading-tight"
                      value="true"
                      checked={formData.EFConclusao === true}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EFConclusao"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Aprovado
                    </label>
                  </div>

                  <div className="flex items-center ml-4 mt-3">
                    <input
                      type="radio"
                      id="EFConclusao"
                      name="EFConclusao"
                      className="mr-2 leading-tight"
                      value="false"
                      checked={formData.EFConclusao === false}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EFConclusao"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Reprovado
                    </label>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      id="EFConclusaoReprocesso"
                      type="checkbox"
                      className="mr-2 ml-2"
                      checked={formData.EFConclusaoReprocesso}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EFConclusaoReprocesso"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Reprocesso
                    </label>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      id="EFConclusaoRetrabalho"
                      type="checkbox"
                      className="mr-2 ml-2"
                      checked={formData.EFConclusaoRetrabalho}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="EFConclusaoRetrabalho"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Retrabalho
                    </label>
                  </div>
                </div>
              </section>

              <hr className="border-t-2 border-black my-4" />

              <div className="flex justify-center mt-4">
                <Botao
                  type="submit"
                  className="w-1/4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                >
                  Salvar
                </Botao>
              </div>
            </form>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <p>Coleta atualizada com sucesso!</p>
        </Modal>
      )}
    </div>
  );
};

export default Producao;