import React, { useState } from "react";
import imagem from "../componentes/imagens/imagemprincipal1.jpg";
import Botao from "../componentes/botao/botao.js";
import supabase from "../supabaseClient.js";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Cadastro = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    CPF: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    data_nascimento: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.password ||
      !formData.email ||
      !formData.confirmPassword ||
      !formData.name ||
      !formData.phone ||
      !formData.CPF
    ) {
      setErrorMsg("Por favor preencha todos os campos");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("As senhas não são iguais");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            phone: formData.phone,
            CPF: formData.CPF,
            data_nascimento: formData.data_nascimento,
          },
        },
      });
      console.log(formData.email);

      if (!error && data) {
        setMsg(
          "Cadastro feito com sucesso. Por favor, cheque o seu e-mail para finalizar"
        );
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
    setLoading(false);
  };

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
          Cadastro de funcionário
        </h3>

        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Informe o nome"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe o CPF"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="CPF"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe o E-mail"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe o numero de telefone"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe a data de nascimento"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="data_nascimento"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Informe a senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="password"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Confirme sua senha"
            className="w-full text-black py-4 my-2  border-b border-black outline-none focus:outline-none"
            id="confirmPassword"
            onChange={handleChange}
          />
          {errorMsg && (
            <Alert variant="danger" onClose={() => setErrorMsg("")} dismissible>
              {errorMsg}
            </Alert>
          )}
          {msg && (
            <Alert variant="success" onClose={() => setMsg("")} dismissible>
              {msg}
            </Alert>
          )}
          <Botao
            className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
            type="submit"
            disabled={loading}
          >
            {" "}
            Cadastrar{" "}
          </Botao>
        </form>

        <div className="w-full flex items-center justify-between">
          <Link to="/" className="mt-2 text-yellow-500 hover:underline">
            Já tem uma conta? Faça login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
