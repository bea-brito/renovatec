import React from "react";
import imagem from "../imagens/imagemprincipal1.jpg";
import Botao from "../botao/botao";
import supabase from "../../supabaseClient.js";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const handleClick = async () => {
    try {
      const { data, error } = await supabase.from("profiles").select();

      if (error) {
        throw error;
      }

      if (data != null) {
        data.forEach((profile) => {
          console.log("Nome:", profile.username);
          console.log("Website", profile.website);
        });
      } else {
        console.log("Sem dados.");
      }
    } catch (error) {
      console.error("Erro: ", error.message);
    }
  };

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
        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
          Cadastro
        </h3>
        <p>Sistema Renovatec</p>

        <form className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Informe seu nome"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Informe seu CPF"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
          />
          <input
            type="password"
            placeholder="Informe sua senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
          />
        </form>

        <div className="w-full flex items-center justify-between">
          <Link
            to="/"
            className="text-sm cursor-pointer whitespace-nowrap font-medium underline underline-offset-2 hover:text-yellow-500"
          >
            Já tem uma conta? Faça login
          </Link>
        </div>
        <Botao
          className="w-1/2 mt-2 bg-black text-white py-2 px-4 rounded hover:bg-yellow-500"
          onClick={handleClick}
        >
          {" "}
          Cadastrar{" "}
        </Botao>
      </div>
    </div>
  );
};
export default Cadastro;
