import React, { useState } from "react";
import Botao from "../componentes/botao/botao";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importa os ícones de seta para voltar e de olho

const Senha = () => {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para controlar se a senha está sendo mostrada ou não
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false); // Estado para controlar se a senha de confirmação está sendo mostrada ou não

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha); // Alterna o estado de mostrar/ocultar a senha
  };

  const toggleMostrarConfirmarSenha = () => {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha); // Alterna o estado de mostrar/ocultar a senha de confirmação
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-yellow-500">
            <AiOutlineLeft className="w-6 h-6 mr-2" />
            <p>Voltar</p>
          </Link>
        </div>
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
          Redefinir a senha
        </h3>
        <p>Escolha uma nova senha de 8 caracteres</p>
        <form className="mt-6">
          <div className="relative">
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Informe uma nova senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            <button
              type="button"
              className="absolute top-0 right-0 mt-3 mr-4"
              onClick={toggleMostrarSenha}
            >
              {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={mostrarConfirmarSenha ? "text" : "password"}
              placeholder="Confirme a nova senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full py-2 px-4 mb-6 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            <button
              type="button"
              className="absolute top-0 right-0 mt-3 mr-4"
              onClick={toggleMostrarConfirmarSenha}
            >
              {mostrarConfirmarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className="flex justify-end">
            <Botao className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Redefinir
            </Botao>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Senha;
