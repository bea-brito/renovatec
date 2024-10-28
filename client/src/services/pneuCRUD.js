// services/pneuService.js
import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const insertPneu = async (
  codigo_pneu,
  matricula,
  tamanho,
  marca,
  modelo,
  DOT,
  servico,
  valor,
  ID_Coleta
) => {
  try {
    const response = await axios.post(`${apiUrl}/pneus`, {
      codigo_pneu,
      matricula,
      tamanho,
      marca,
      modelo,
      DOT,
      servico,
      valor,
      ID_Coleta,
    });

    console.log("Response from server:", response);

    if (!response) {
      throw new Error("Erro ao inserir pneu");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error in insertPneu service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getPneuByColeta = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/pneus-by-coleta/${id}`);
    if (!response) {
      throw new Error("Erro ao buscar cliente por ID");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePneu = async (
  id,
  codigo_pneu,
  matricula,
  tamanho,
  marca,
  modelo,
  DOT,
  servico,
  valor,
  ID_Coleta
) => {
  try {
    const response = await axios.put(`${apiUrl}/pneus/${id}`, {
      codigo_pneu,
      matricula,
      tamanho,
      marca,
      modelo,
      DOT,
      servico,
      valor,
      ID_Coleta,
    });
    if (!response) {
      throw new Error("Erro ao atualizar cliente");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
