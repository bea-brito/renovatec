import axios from "axios";

const apiUrl = "http://localhost:3001/api";

export const insertCliente = async (
  nome,
  CPF,
  telefone,
  email,
  logradouro,
  numero,
  complemento,
  bairro,
  CEP,
  cidade,
  UF,
  ID_Vendedor
) => {
  try {
    const response = await axios.post(`${apiUrl}/clientes`, {
      nome,
      CPF,
      telefone,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      CEP,
      cidade,
      UF,
      ID_Vendedor,
    });
    console.log(response);
    if (!response) {
      throw new Error("Erro ao inserir cliente");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCliente = async () => {
  try {
    const response = await axios.get(`${apiUrl}/clientes`);
    if (!response) {
      throw new Error("Erro ao buscar clientes");
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getClienteById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/clientes/${id}`);
    if (!response) {
      throw new Error("Erro ao buscar cliente por ID");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getClienteWithVendedor = async () => {
  try {
    const response = await axios.get(`${apiUrl}/clientes-with-vendedor`);
    if (!response) {
      throw new Error("Erro ao buscar clientes com vendedor");
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteClienteById = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/clientes-deletar/${id}`);
    if (!response) {
      throw new Error("Erro ao deletar cliente");
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateCliente = async (
  id,
  nome,
  CPF,
  telefone,
  email,
  logradouro,
  numero,
  complemento,
  bairro,
  CEP,
  cidade,
  UF,
  ID_Vendedor
) => {
  try {
    const response = await axios.put(`${apiUrl}/clientes/${id}`, {
      nome,
      CPF,
      telefone,
      email,
      logradouro,
      numero,
      complemento,
      bairro,
      CEP,
      cidade,
      UF,
      ID_Vendedor,
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
