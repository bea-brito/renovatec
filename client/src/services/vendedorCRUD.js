import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const getVendedorByID = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/vendedores/${userId}`);
    console.log("Response from server (getVendedorByID):", response);

    if (!response) {
      throw new Error("Erro ao buscar vendedor por ID");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error in getVendedorByID service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getVendedor = async () => {
  try {
    const response = await axios.get(`${apiUrl}/vendedores`);
    console.log("Response from server (getVendedor):", response.data);

    if (!response) {
      throw new Error("Erro ao buscar vendedor por ID");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Error in getVendedor service:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
