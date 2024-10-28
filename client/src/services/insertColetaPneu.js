// services/coletaService.js
import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const insertColetaPneu = async (p_data, p_id_cliente, p_pneus) => {
  try {
    const response = await axios.post(`${apiUrl}/coletas-pneus`, {
      p_data,
      p_id_cliente,
      p_pneus,
    });
    console.log("Response from server:", response);

    if (!response) {
      throw new Error("Erro ao inserir coleta com pneus");
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error in insertColetaPneu service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
