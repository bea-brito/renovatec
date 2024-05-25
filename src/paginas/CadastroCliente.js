import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar/lateral";
import Botao from "../componentes/botao/botao";
import { getVendedor } from "../services/vendedorCRUD";
import { insertCliente } from "../services/clienteCRUD.js";

const CadastroCliente = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nomeArray: [],
    id: [],
    vendedor: "",
    nome: "",
    CPF: "",
    telefone: "",
    email: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    CEP: "",
    cidade: "",
    UF: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  console.log(formData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getVendedor();
        if (error) {
          console.log("Error:");
          console.log(error);
          throw error;
        }

        const nomes = [];
        const ids = [];

        data.forEach((item) => {
          nomes.push(item.nome);
          ids.push(item.ID_Vendedor);
        });

        setFormData({ nomeArray: nomes, id: ids });

        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    // if (
    //   !formData.vendedor ||
    //   !formData.nome ||
    //   !formData.CPF ||
    //   !formData.telefone ||
    //   !formData.email ||
    //   !formData.logradouro ||
    //   !formData.bairro ||
    //   !formData.CEP ||
    //   !formData.cidade ||
    //   !formData.UF
    // ) {
    //   setErrorMessage("Por favor preencha todos os campos");
    //   return;
    // }
    try {
      setErrorMessage("");
      console.log("tentativa");
      const { data, error } = await insertCliente(
        formData.nome,
        formData.CPF,
        formData.telefone,
        formData.email,
        formData.logradouro,
        formData.numero,
        formData.complemento,
        formData.bairro,
        formData.CEP,
        formData.cidade,
        formData.UF,
        formData.vendedor
      );
      console.log(formData.CPF);
      if (error) setErrorMessage(error.message);
      if (!error && data) {
        setSuccessMessage(
          "Cadastro feito com sucesso. Por favor, cheque o seu e-mail para finalizar"
        );
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className="flex-1"
        style={{
          transform: `translateX(${isOpen ? "80px" : "0"})`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="ml-40 mr-40">
          <h1 className="mb-10 text-3xl font-bold text-gray-800">
            Cadastro de Cliente
          </h1>

          {successMessage && (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
              role="alert"
            >
              <p>{successMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
              role="alert"
            >
              <p>{errorMessage}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="vendedor"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Escolha Vendedor:
              </label>
              <select
                id="vendedor"
                value={formData.vendedor}
                onChange={handleChange}
                placeholder="Vendedor"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Selecione Vendedor</option>
                {formData.nomeArray.map((nome, index) => (
                  <option key={index} value={formData.id[index]}>
                    {nome}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="nome"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome do Cliente:
              </label>
              <input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome completo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cpf"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CPF:
              </label>
              <input
                id="CPF"
                type="text"
                value={formData.CPF}
                onChange={handleChange}
                placeholder="000.000.000-00"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="telefone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefone:
              </label>
              <input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone com DDD"
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="logradouro"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Logradouro:
              </label>
              <input
                id="logradouro"
                type="text"
                value={formData.logradouro}
                onChange={handleChange}
                placeholder="Logradouro"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="numero"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Número:
              </label>
              <input
                id="numero"
                type="text"
                value={formData.numero}
                onChange={handleChange}
                placeholder="Número"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="complemento"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Complemento:
              </label>
              <input
                id="complemento"
                type="text"
                value={formData.complemento}
                onChange={handleChange}
                placeholder="Complemento"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="bairro"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Bairro:
              </label>
              <input
                id="bairro"
                type="text"
                value={formData.bairro}
                onChange={handleChange}
                placeholder="Bairro"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="CEP"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CEP:
              </label>
              <input
                id="CEP"
                type="text"
                value={formData.CEP}
                onChange={handleChange}
                placeholder="CEP"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="cidade"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Cidade:
              </label>
              <input
                id="cidade"
                type="text"
                value={formData.cidade}
                onChange={handleChange}
                placeholder="Cidade"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="UF"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                UF:
              </label>
              <input
                id="UF"
                type="text"
                value={formData.UF}
                onChange={handleChange}
                placeholder="UF"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <Botao
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
            >
              Cadastrar
            </Botao>
          </form>

          <Link
            to="/HomePage"
            className="text-yellow-500 hover:text-yellow-600 font-bold py-2 px-4 rounded inline-block mt-4"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CadastroCliente;
