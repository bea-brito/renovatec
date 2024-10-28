import React, { useEffect } from "react";
import { getClienteWithVendedor } from "../../services/clienteCRUD";

const InfoColeta = ({ clienteData, setClienteData }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeCliente = (event) => {
    const { id, value } = event.target;
    setClienteData({
      ...clienteData,
      indexSelecionado: event.target.selectedIndex - 1,
      [id]: value,
    });
  };

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
    </div>
  );
};

export default InfoColeta;
