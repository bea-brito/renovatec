import Botao from "../componentes/botao/botao.js";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { useAuth } from "../context/AuthProvider.js";
import { Alert } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!formData.senha || !formData.email) {
        setErrorMsg("Por favor preencha os campos");
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(formData.email, formData.senha);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate("/HomePage");
    } catch (error) {
      setErrorMsg("Email ou senha inválido");
      alert(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
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
          {errorMsg && (
            <Alert variant="danger" onClose={() => setErrorMsg("")} dismissible>
              {errorMsg}
            </Alert>
          )}
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
              disabled={loading}
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
