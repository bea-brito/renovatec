import React, { useState, useEffect } from "react";
import Sidebar from "../componentes/sidebar/lateral";
import { getVendedor, getVendedorByID } from "../services/vendedorCRUD";
import { useAuth } from "../context/AuthProvider.js";

const PerfilUsuario = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    dataNascimento: "",
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data, error } = await getVendedorByID(user.id);
        if (error) {
          console.log("Error:");
          console.log(error);
          throw error;
        }
        const dadosUsuario = {
          nome: data[0].nome,
          cpf: data[0].CPF,
          telefone: data[0].telefone,
          dataNascimento: data[0].data_nascimento,
        };

        setUsuario(dadosUsuario);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const { data } = fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Sidebar />
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Perfil do Usuário</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Nome:</label>
          <p className="border rounded p-2">{usuario.nome}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">CPF:</label>
          <p className="border rounded p-2">{usuario.cpf}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Telefone:
          </label>
          <p className="border rounded p-2">{usuario.telefone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Data de Nascimento:
          </label>
          <p className="border rounded p-2">{usuario.dataNascimento}</p>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
