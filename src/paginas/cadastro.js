import React, { useState } from "react";
import imagem from "../componentes/imagens/imagemprincipal1.jpg";
import Botao from "../componentes/botao/botao.js";
import supabase from "../supabaseClient.js";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.senha,
        options: {
          data: {
            nome: formData.nome,
            cpf: formData.cpf,
          },
        },
      });
      if (error) throw error;
      alert("Cheque o email para validar seu link de verificação");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-1/2 h-full">
        <img
          src={imagem}
          className="w-full h-full object-cover"
          alt="Descrição da imagem"
        />
      </div>

      <div className="w-1/2 p-8">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
          Cadastro
        </h3>
        <p>Sistema Renovatec</p>

        {/* {sucesso && (
          <div className="bg-green-500 text-white py-2 px-4 rounded">
            Cadastro realizado com sucesso!
          </div>
        )} */}

        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe seu nome"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="nome"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe seu CPF"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="cpf"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe seu E-mail"
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
          {/* <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            value={senhaConfirmacao}
            onChange={(e) => {
              setSenhaConfirmacao(e.target.value);
              setErro("");
            }}
          />
          {erro && (
            <div className="bg-red-500 text-white py-2 px-4 rounded">
              {erro}
            </div>
          )} */}
          <Botao
            className="w-1/2 mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500"
            type="submit"
          >
            {" "}
            Cadastrar{" "}
          </Botao>
        </form>

        <div className="w-full flex items-center justify-between">
          <Link
            to="/"
            className="text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500"
          >
            Já tem uma conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
