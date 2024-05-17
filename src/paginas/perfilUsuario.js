import React, { useState, useEffect } from 'react';
import Sidebar from "../componentes/sidebar/lateral";

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    dataNascimento: ''
  });

  useEffect(() => {
    // Simulando a busca de dados do usuário de uma API
    const dadosUsuario = {
      nome: 'João Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 98765-4321',
      dataNascimento: '1990-01-01'
    };
    
    setUsuario(dadosUsuario);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Sidebar/>
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
          <label className="block text-gray-700 font-bold mb-2">Telefone:</label>
          <p className="border rounded p-2">{usuario.telefone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Data de Nascimento:</label>
          <p className="border rounded p-2">{usuario.dataNascimento}</p>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
