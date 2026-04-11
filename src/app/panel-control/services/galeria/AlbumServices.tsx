import axios from "axios";

// URL de API
const API_URL = import.meta.env.VITE_APP_API_URL;
const TOKEN_KEY = "token";
const token = localStorage.getItem(TOKEN_KEY);
// Exporta cada función de forma individual.
export const listarData = async (page:number, limit:number) => {
  try {
    const response = await axios.get(API_URL + "/panel-control/galeria/albumes/lista?page="+page+"&limit="+limit, {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const verData = async (id:number) => {
  try {
    const response = await axios.get(API_URL + "/panel-control/galeria/albumes/ver/" + id, {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
// export const postGuardar = async (data: { nombre: string, id:number }) => {
export const guardarData = async (data: any) => {
  try {
    const response = await axios.post(API_URL + "/panel-control/galeria/albumes/guardar",data,  {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
export const inactivarData = async (data: { id:number, estado:number }) => {
  try {
    const response = await axios.post(API_URL + "/panel-control/galeria/albumes/cambiarEstado",data,  {
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the Authorization header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
