import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  // Funções para navegar para as respectivas páginas
  const goToPerfilFuncionario = () => {
    navigate("/perfilUsuario");
  };

  const goToHistoricoDeColetas = () => {
    navigate("/HistoricoDeColeta");
  };

  const goToFaturamentos = () => {
    navigate("/faturamentos"); // Substitua pela rota real para faturamentos
  };

  const goToCadastrarCliente = () => {
    navigate("/CadastroCliente"); // Substitua pela rota real para faturamentos
  };

  return (
    <div className="flex justify-center mt-10">
      <div
        className="w-64 bg-gray-800 text-white p-4 m-4 cursor-pointer hover:bg-gray-700 rounded-lg shadow-md"
        onClick={goToPerfilFuncionario}
      >
        <h2 className="text-xl font-semibold mb-2">Perfil Funcionário</h2>
        <p className="text-sm">Registro de perfil.</p>
      </div>
      <div
        className="w-64 bg-gray-800 text-white p-4 m-4 cursor-pointer hover:bg-gray-700 rounded-lg shadow-md"
        onClick={goToCadastrarCliente}
      >
        <h2 className="text-xl font-semibold mb-2">Cadastrar Cliente</h2>
        <p className="text-sm">Adicione um Cliente novo</p>
      </div>
      <div
        className="w-64 bg-gray-800 text-white p-4 m-4 cursor-pointer hover:bg-gray-700 rounded-lg shadow-md"
        onClick={goToHistoricoDeColetas}
      >
        <h2 className="text-xl font-semibold mb-2">Histórico de Coletas</h2>
        <p className="text-sm">Veja o histórico de suas coletas.</p>
      </div>
      <div
        className="w-64 bg-gray-800 text-white p-4 m-4 cursor-pointer hover:bg-gray-700 rounded-lg shadow-md"
        onClick={goToFaturamentos}
      >
        <h2 className="text-xl font-semibold mb-2">Faturamentos</h2>
        <p className="text-sm">Veja o faturamento.</p>
      </div>
    </div>
  );
};

export default Cards;
