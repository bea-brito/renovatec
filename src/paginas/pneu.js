import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../componentes/botao/botao";
import supabase from "../supabaseClient.js";

const Pneu = ({ setToken }) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    codigo_pneu: "",
    matricula: "",
    tamanho: "",
    marca: "",
    modelo: "",
    DOT: "",
    serviço: "",
    valor: "",
  });

  const [pneus, setPneus] = useState([]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleInsert = async () => {
    try {
      const { data, error } = await supabase.from("pneus").insert([formData]);
      if (error) throw error;
      setPneus([...pneus, data[0]]);
    } catch (error) {
      console.error("Erro ao inserir pneu:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("pneus").delete().eq("id", id);
      if (error) throw error;
      setPneus(pneus.filter((pneu) => pneu.id !== id));
    } catch (error) {
      console.error("Erro ao excluir pneu:", error.message);
    }
  };

  function voltar() {
    navigate("/menu");
  }

  return (
    <div className="w-full h-screen flex items-start">
      <div className="w-full flex flex-col p-20">
        <Botao onClick={voltar} className="mb-4">
          Voltar
        </Botao>

        <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
          CRUD de Pneus
        </h3>
        <form className="w-full flex flex-col">
          <input
            type="text"
            placeholder="Código do Pneu"
            className="w-full text-black py-4 my-2 border-b border-black outline-none focus:outline-none"
            id="codigo_pneu"
            onChange={handleChange}
          />
          {/* Adicione inputs para os outros campos aqui */}
          <Botao className="w-1/2 mt-2" onClick={handleInsert}>
            Inserir
          </Botao>
        </form>

        <table className="w-full mt-8">
          <thead>
            <tr>
              <th>Código do Pneu</th>
              <th>Matrícula</th>
              <th>Tamanho</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>DOT</th>
              <th>Serviço</th>
              <th>Valor</th>
              <th>Atualizar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {pneus.map((pneu) => (
              <tr key={pneu.id}>
                <td>{pneu.codigo_pneu}</td>
                <td>{pneu.matricula}</td>
                <td>{pneu.tamanho}</td>
                <td>{pneu.marca}</td>
                <td>{pneu.modelo}</td>
                <td>{pneu.DOT}</td>
                <td>{pneu.serviço}</td>
                <td>{pneu.valor}</td>
                <td>
                  <Botao>Atualizar</Botao>
                </td>
                <td>
                  <Botao onClick={() => handleDelete(pneu.id)}>Excluir</Botao>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pneu;
