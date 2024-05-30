import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Altere para useNavigate
import Sidebar from "../componentes/sidebar/lateral";
import Cabecalho from "../componentes/cabecalho/Cabecalho";
import Botao from "../componentes/botao/botao";
import Modal from "../componentes/modal/modal"; // Certifique-se de que este é o caminho correto

const Producao = ({idDaColeta}) => {
  const navigate = useNavigate(); // Hook para navegar
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar o modal

  // Função chamada quando o botão Salvar é pressionado
  const handleSave = () => {
    setModalOpen(true); // Abre o modal
  };

  // Função para fechar o modal e redirecionar
  const handleCloseModal = () => {
    setModalOpen(false);
    console.log(idDaColeta); // Verifique o valor de idDaColeta
    navigate(`/visualizarcoleta/${idDaColeta}`);
  };
  // Estado para controlar a abertura e fechamento da barra lateral
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a barra lateral
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Estado para controlar a seleção do dropdown
  const [selectedOption, setSelectedOption] = useState("Selecione uma opção");

  // Opções para o dropdown
  const options = ["Opção 1", "Opção 2", "Opção 3"];

  // Função para atualizar a opção selecionada
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Componente do cabeçalho */}
      <Cabecalho />

      <div className="flex flex-grow">
        {/* Componente da barra lateral */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="bg-gray-100 p-4 flex items-center justify-center w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            {/* Seção: Dados do Cliente */}
            <section className="mb-6 bg-gray-100 w-full">
              <h1 className="text-xl font-bold mb-3">Linha de Produção</h1>
              <h2 className="text-xl font-bold mb-2">Dados do Cliente</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="clientName"
                  >
                    Nome: Rodrigo aosjka
                  </label>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email: rodrigo@email.com
                  </label>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Telefone: (85) 1234-5678
                  </label>
                </div>
              </div>
            </section>

            {/* Seção: Coleta */}
            <section className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mt-8"
                    htmlFor="coleta"
                  >
                    Coleta (ID Cliente): 1
                  </label>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="prev"
                  >
                    Prev.
                  </label>
                  <input
                    id="prev"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Modelo"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="modelo"
                  >
                    Modelo
                  </label>
                  <input
                    id="modelo"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Modelo"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="data"
                  >
                    Data
                  </label>
                  <input
                    id="data"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </section>

            <hr className="border-t-2 border-black my-4" />

            {/* Seção: Exame Inicial */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Exame Inicial</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="dropdown"
                  >
                    Selecionar Examinador:
                  </label>
                  <div className="relative">
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={(e) => handleOptionChange(e.target.value)}
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
                    htmlFor="dataExame"
                  >
                    Data
                  </label>
                  <input
                    id="dataExame"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="aprovado"
                      name="statusExameInicial"
                      className="mr-2 leading-tight"
                    />
                    <label
                      htmlFor="aprovado"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Aprovado
                    </label>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      type="radio"
                      id="reprovado"
                      name="statusExameInicial"
                      className="mr-2 leading-tight"
                    />
                    <label
                      htmlFor="reprovado"
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
                    htmlFor="dropdown"
                  >
                    Selecionar Raspador:
                  </label>
                  <div className="relative">
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={(e) => handleOptionChange(e.target.value)}
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
                    htmlFor="dataExame"
                  >
                    Data
                  </label>
                  <input
                    id="dataExame"
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="aprovado"
                      name="statusRaspagem"
                      className="mr-2 leading-tight"
                    />
                    <label
                      htmlFor="aprovado"
                      className="block text-gray-700 text-sm font-bold"
                    >
                      Aprovado
                    </label>
                  </div>
                  <div className="flex items-center ml-4">
                    <input
                      type="radio"
                      id="reprovado"
                      name="statusRaspagem"
                      className="mr-2 leading-tight"
                    />
                    <label
                      htmlFor="reprovado"
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
                  <input id="RetiradaCinta" type="checkbox" className="mr-2" />
                  <label
                    htmlFor="RetiradaCinta"
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
                  htmlFor="dropdown"
                >
                  Examinador:
                </label>
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                    id="aprovado"
                    name="statusEscarenacao"
                    className="mr-2 leading-tight"
                  />
                  <label
                    htmlFor="aprovado"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Aprovado
                  </label>
                </div>
                <div className="mr-4 flex items-center">
                  <input
                    type="radio"
                    id="reprovado"
                    name="statusEscarenacao"
                    className="mr-2 leading-tight"
                  />
                  <label
                    htmlFor="reprovado"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Reprovado
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="Aprovconserto" type="checkbox" className="mr-2" />
                  <label
                    htmlFor="Aprovconserto"
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
                htmlFor="dropdown"
              >
                Aplicador:
              </label>
              <div className="relative">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                htmlFor="dropdown"
              >
                Aplicador:
              </label>
              <div className="relative">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                htmlFor="dropdown"
              >
                Cortador:
              </label>
              <div className="flex flex-wrap">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2 mt-2 w-full">
                  Desenho:
                </label>
              </div>
            </section>

            <hr className="border-t-2 border-black my-4" />

            {/* Seção: Aplicação de Banda */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Aplicação de Banda</h2>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dropdown"
              >
                Aplicador:
              </label>
              <div className="relative">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                  htmlFor="inserlopeMontador"
                >
                  Inserlope:
                </label>
                <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                  Montador
                </span>
                <select
                  id="inserlopeMontador"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                  htmlFor="envelopeMontador"
                >
                  Envelope:
                </label>
                <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                  Montador
                </span>
                <select
                  id="envelopeMontador"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
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
                <span className="text-gray-700 text-sm font-bold mr-2 ml-10">
                  Autoclave:
                </span>
                <select
                  id="envelopeMontador"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label className="text-gray-700 text-sm font-bold mr-10 ml-10">
                  Posição:
                </label>
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
                  id="ExaminadorExFinal"
                  value={selectedOption}
                  onChange={(e) => handleOptionChange(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <input
                  id="dataExame"
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 ml-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-4 mt-3">
                  <input
                    type="radio"
                    id="aprovado"
                    name="statusExameFinal"
                    className="mr-2 leading-tight"
                  />
                  <label
                    htmlFor="aprovado"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Aprovado
                  </label>
                </div>

                <div className="flex items-center ml-4 mt-3">
                  <input
                    type="radio"
                    id="reprovado"
                    name="statusExameFinal"
                    className="mr-2 leading-tight"
                  />
                  <label
                    htmlFor="reprovado"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Reprovado
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    id="Aprovconserto"
                    type="checkbox"
                    className="mr-2 ml-2"
                  />
                  <label
                    htmlFor="Aprovconserto"
                    className="block text-gray-700 text-sm font-bold"
                  >
                    Reprocesso
                  </label>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    id="Aprovconserto"
                    type="checkbox"
                    className="mr-2 ml-2"
                  />
                  <label
                    htmlFor="Aprovconserto"
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
                onClick={handleSave}
                className="w-1/4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              >
                Salvar
              </Botao>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <p>Coleta salva com sucesso!</p>
        </Modal>
      )}
    </div>
  );
};

export default Producao;
