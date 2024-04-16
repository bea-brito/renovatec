import imagem from "../componentes/imagens/imagemprincipal1.jpg";
import Botao from "../componentes/botao/botao";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import supabase from "../supabaseClient.js";

const Login = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
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
      navigate("/menu");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full">
        <img
          src={imagem}
          className="w-full h-full object-cover"
          alt="Descrição da imagem"
        />
      </div>

      <div className="w-full flex flex-col p-20">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Login</h3>
        <p>Sistema Renovatec</p>
        <form className="w-full flex flex-col" onSubmit={signInWithEmail}>
          <input
            type="text"
            placeholder="Informe seu usuário"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Informe sua senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="senha"
            onChange={handleChange}
          />
          <Botao
            className="w-1/2 mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500"
            type="submit"
          >
            {" "}
            Entrar{" "}
          </Botao>
        </form>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <input type="checkbox" className="w-4 h-4 mr-2" />
            <p className="text-sm">Relembrar senha por 30 dias</p>
          </div>
          <div className="flex items-center">
            <p>
              <Link
                to="/senha"
                className="text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500"
              >
                Esqueceu a senha?
              </Link>
            </p>
            <p className="ml-4">
              <Link
                to="/cadastro"
                className="text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500"
              >
                Cadastrar-se
              </Link>
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Login;
