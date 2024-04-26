import imagem from "../componentes/imagens/imagemprincipal1.jpg";
import Botao from "../componentes/botao/botao";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import supabase from "../supabaseClient.js";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.id]: event.target.value,
    }));
  }

  async function signInWithEmail(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.senha,
      });
      if (error) throw error;
      setToken(data);
      navigate("/homepage");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Login</h3>
        <form onSubmit={signInWithEmail}>
          <div className="mb-4">
            <div className="relative">
              <AiOutlineUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="E-mail"
                className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <AiOutlineLock className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Senha"
                className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:border-yellow-500"
                id="senha"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6 flex justify-between items-center">
            <Link
              to="/senha"
              className="text-sm text-yellow-500 hover:underline"
            >
              Esqueceu a senha?
            </Link>
            <Botao
              className="w-1/2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
              type="submit"
            >
              Entrar
            </Botao>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Relembrar senha por 30 dias</p>
            </div>
            <Link
              to="/cadastro"
              className="text-sm text-yellow-500 hover:underline"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
