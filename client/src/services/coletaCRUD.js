import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const insertColeta = async (data, ID_Cliente) => {
  try {
    const response = await axios.post(`${apiUrl}/coletas`, {
      data,
      ID_Cliente,
    });
    console.log("Response from server:", response);

    if (!response) {
      throw new Error("Erro ao inserir coleta");
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error in insertColeta service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getColeta = async () => {
  try {
    const response = await axios.get(`${apiUrl}/coletas`);
    console.log("Response from server:", response);

    if (!response) {
      throw new Error("Erro ao buscar coletas");
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error in getColeta service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getColetaWithCliente = async () => {
  try {
    const response = await axios.get(`${apiUrl}/coletas-with-cliente`);
    console.log("Response from server:", response);

    if (!response) {
      throw new Error("Erro ao buscar coletas");
    }
    return response.data;
  } catch (error) {
    console.error(
      "Error in getColeta service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
