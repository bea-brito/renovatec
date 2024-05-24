import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getClienteWithVendedor } from "../../services/clienteCRUD";

const TabelaCliente = () => {
  const [clientes, setClientes] = useState([]);

  const handleRemoverCliente = (id) => {
    if (window.confirm("Tem certeza que deseja excluir? 🤨")) {
      removerCliente(id);
    }
  };

  const removerCliente = (id) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await getClienteWithVendedor();
        if (error) {
          console.log("Error:");
          console.log(error);
          throw error;
        }

        const clientesArray = data.map((item) => ({
          id: item.ID_Cliente,
          nome: item.nome,
          CPF: item.CPF,
          telefone: item.telefone,
          email: item.email,
          logradouro: item.logradouro,
          numero: item.numero,
          complemento: item.complemento,
          bairro: item.bairro,
          CEP: item.CEP,
          cidade: item.cidade,
          UF: item.UF,
          vendedor: item.Vendedor.nome,
        }));

        setClientes(clientesArray);

        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <table className="min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl">
      <thead className="text-xs text-white uppercase bg-black dark:bg-blue-700">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID do Cliente
          </th>
          <th scope="col" className="px-6 py-3">
            Nome
          </th>
          <th scope="col" className="px-6 py-3">
            Vendedor
          </th>
          <th scope="col" className="px-6 py-3">
            CPF
          </th>
          <th scope="col" className="px-6 py-3">
            Telefone
          </th>
          <th scope="col" className="px-6 py-3">
            E-mail
          </th>
          <th scope="col" className="px-6 py-3">
            Logradouro
          </th>
          <th scope="col" className="px-6 py-3">
            Numero
          </th>
          <th scope="col" className="px-6 py-3">
            Complemento
          </th>
          <th scope="col" className="px-6 py-3">
            Bairro
          </th>
          <th scope="col" className="px-6 py-3">
            CEP
          </th>
          <th scope="col" className="px-6 py-3">
            Cidade
          </th>
          <th scope="col" className="px-6 py-3">
            UF
          </th>
          <th scope="col" className="px-6 py-3">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, index) => (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <td className="px-6 py-4">{cliente.id}</td>
            <td className="px-6 py-4">{cliente.nome}</td>
            <td className="px-6 py-4">{cliente.vendedor}</td>
            <td className="px-6 py-4">{cliente.CPF}</td>
            <td className="px-6 py-4">{cliente.telefone}</td>
            <td className="px-6 py-4">{cliente.email}</td>
            <td className="px-6 py-4">{cliente.logradouro}</td>
            <td className="px-6 py-4">{cliente.numero}</td>
            <td className="px-6 py-4">{cliente.complemento}</td>
            <td className="px-6 py-4">{cliente.bairro}</td>
            <td className="px-6 py-4">{cliente.CEP}</td>
            <td className="px-6 py-4">{cliente.cidade}</td>
            <td className="px-6 py-4">{cliente.UF}</td>
            <td className="px-6 py-4">
              <Link
                to={`/editarcoleta/${cliente.id}`}
                className="text-yellow-500 hover:text-yellow-700 mr-2"
              >
                ✏️
              </Link>
              <button
                onClick={() => handleRemoverCliente(cliente.id)}
                className="text-red-500 hover:text-red-700"
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaCliente;
