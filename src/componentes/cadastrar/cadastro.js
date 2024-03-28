import React, { useState } from "react";
import imagem from "../imagens/imagemprincipal1.jpg";
import Botao from "../botao/botao";
import supabase from "../../supabaseClient.js";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = useState("");
  const [erro, setErro] = useState("");

  const handleClick = async () => {
    if (senha !== senhaConfirmacao) {
      setErro("Senhas diferentes inseridas");
      return;
    }

    // Verificando requisitos da senha
    if (
      senha.length < 8 ||
      senha !== senha.trim() ||
      senha === senha.toLowerCase() ||
      !/[A-Z]/.test(senha) ||
      !/[^a-zA-Z0-9]/.test(senha)
    ) {
      setErro(
        "A senha deve ter no mínimo 8 caracteres, não pode conter espaços, deve conter ao menos 1 caractere maiúsculo e 1 caractere especial."
      );
      return;
    }

    try {
      const { error } = await supabase
        .from("Vendedor")
        .insert([{ Nome: nome, CPF: cpf, Senha: senha }]);

      if (error) {
        throw error;
      }

      console.log("Dados inseridos com sucesso!");
    } catch (error) {
      setErro(error.message);
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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Informe seu CPF"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Informe sua senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
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
          )}
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
