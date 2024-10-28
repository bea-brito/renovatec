import React, { useState, useEffect } from "react";
import { getClienteWithVendedor } from "../../services/clienteCRUD";

const InfoColeta = ({
  pneus,
  pneuData,
  setPneuData,
  clienteData,
  setClienteData,
}) => {
  const fetchCliente = async () => {
    try {
      const { data, error } = await getClienteWithVendedor();
      if (error) {
        console.log("Error:");
        console.log(error);
        throw error;
      }

      const id = [];
      const cliente = [];
      const vendedor = [];
      const telefone = [];

      data.forEach((item) => {
        id.push(item.ID_Cliente);
        cliente.push(item.nome);
        vendedor.push(item.Vendedor.nome);
        telefone.push(item.telefone);
      });

      setClienteData({
        id: id,
        cliente: cliente,
        vendedor: vendedor,
        telefone: telefone,
      });

      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, []);

  const handleChangePneu = (e) => {
    const { id, value } = e.target;
    setPneuData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleChangeCliente = (event) => {
    const { id, value } = event.target;
    setClienteData({
      ...clienteData,
      indexSelecionado: event.target.selectedIndex - 1,
      [id]: value,
    });
  };
  console.log(pneuData);

  // const handleAddPneu = () => {
  //   if (Object.values(pneuData).some((value) => value === "")) {
  //     alert("Por favor, preencha todos os campos antes de adicionar.");
  //     return;
  //   }
  //   adicionarPneu(pneuData);
  //   setpneuData({
  //     quantidade: "",
  //     matricula: "",
  //     marca: "",
  //     modelo: "",
  //     tamanho: "",
  //     dot: "",
  //     servico: "",
  //   });
  // };

  return (
    <div className="flex-1 transition-margin duration-300 p-4">
      <h2 className="text-lg font-bold mb-4">Informações da Coleta</h2>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          id="idSelecionado"
          placeholder="Selecione o Cliente"
          value={clienteData.idSelecionado}
          onChange={handleChangeCliente}
          className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled selected>
            Selecione um cliente:
          </option>
          {clienteData.cliente &&
            clienteData.cliente.map((nome, index) => (
              <option key={index} value={clienteData.id[index]}>
                {nome}
              </option>
            ))}
        </select>
        <input
          type="text"
          id="vendedor"
          placeholder="Nome do Vendedor"
          value={clienteData.vendedor[clienteData.indexSelecionado]}
          onChange={handleChangeCliente}
          className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
          readOnly
        />
        <input
          type="tel"
          id="telefone"
          placeholder="Telefone para Contato"
          onChange={handleChangeCliente}
          value={clienteData.telefone[clienteData.indexSelecionado]}
          className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
          readOnly
        />
        <input
          type="date"
          id="date"
          placeholder="Data do Pedido"
          value={clienteData.date}
          onChange={handleChangeCliente}
          className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <hr />
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
  );
};

export default InfoColeta;
