import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import Cabecalho from "../componentes/cabecalho/Cabecalho";

const Producao = () => {
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
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
                  <div>
                    {/* Dropdown */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Producao;
