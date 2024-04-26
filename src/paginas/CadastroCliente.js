import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../componentes/sidebar/lateral';
import Botao from '../componentes/botao/botao';
import supabase from '../supabaseClient.js';

const CadastroCliente = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    localidade: '',
    rua: '',
    bairro: '',
    complemento: '',
    numero: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('clientes').insert([formData]);
      if (error) throw error;
      setSuccessMessage('Cliente cadastrado com sucesso!');
      setFormData({
        nome: '',
        cpf: '',
        telefone: '',
        email: '',
        localidade: '',
        rua: '',
        bairro: '',
        complemento: '',
        numero: '',
      });
    } catch (error) {
      setErrorMessage(`Erro ao cadastrar cliente: ${error.message}`);
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1" style={{ transform: `translateX(${isOpen ? '80px' : '0'})`, transition: 'transform 0.3s ease-in-out' }}>
        <div className="ml-40 mr-40">
          <h1 className="mb-10 text-3xl font-bold text-gray-800">Cadastro de Cliente</h1>
          
          {successMessage && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
              <p>{successMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p>{errorMessage}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome do Cliente:</label>
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
              <label htmlFor="telefone" className="block text-gray-700 text-sm font-bold mb-2">Telefone:</label>
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
              <label htmlFor="cpf" className="block text-gray-700 text-sm font-bold mb-2">CPF:</label>
              <input
                id="cpf"
                type="text"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
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
              <label htmlFor="localidade" className="block text-gray-700 text-sm font-bold mb-2">Localidade:</label>
              <input
                id="localidade"
                type="text"
                value={formData.localidade}
                onChange={handleChange}
                placeholder="Localidade"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="rua" className="block text-gray-700 text-sm font-bold mb-2">Rua:</label>
              <input
                id="rua"
                type="text"
                value={formData.rua}
                onChange={handleChange}
                placeholder="Rua"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="bairro" className="block text-gray-700 text-sm font-bold mb-2">Bairro:</label>
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
              <label htmlFor="complemento" className="block text-gray-700 text-sm font-bold mb-2">Complemento:</label>
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
              <label htmlFor="numero" className="block text-gray-700 text-sm font-bold mb-2">Número:</label>
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
            
            <Botao
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2"
            >
              Cadastrar
            </Botao>
          </form>
          
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 font-bold py-2 px-4 rounded inline-block mt-4">
            Voltar para a Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CadastroCliente;
