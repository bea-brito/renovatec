import React, { useState } from 'react';
import imagem from '../imagens/imagemprincipal1.jpg';
import Botao from '../botao/botao';
import { Link } from 'react-router-dom';
import cadastrarUsuario from './cadastroSupabase';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCPF] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCadastro = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { success, error } = await cadastrarUsuario(nome, senha, cpf);

    if (success) {
      // Redirecionar para a página de sucesso ou fazer alguma ação adicional
      console.log('Usuário cadastrado com sucesso!');
    } else {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full'>
        <img src={imagem} className='w-full h-full object-cover' alt="Descrição da imagem" />
      </div>

      <div className='w-full flex flex-col p-20'>
        <h3 className='text-2xl font-semibold mb-4 text-yellow-500'>Cadastro</h3>
        <p>Sistema Renovatec</p>

        <form className='w-full flex flex-col' onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder='Informe seu nome'
            className='w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="password"
            placeholder='Informe sua senha'
            className='w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="text"
            placeholder='Informe seu CPF'
            className='w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none'
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Botao className='w-1/2 mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500' disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </Botao>
        </form>

        <div className='w-full flex items-center justify-between'>
          <Link to="/" className='text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500'>Já tem uma conta? Faça login</Link>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
