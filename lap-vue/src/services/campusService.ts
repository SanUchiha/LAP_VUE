import { Campus, Participante } from "@/Interfaces/Campus";
import axiosInstance from "./axiosService";

// Función para obtener los usuarios
export const getCampus = async (): Promise<Campus[]> => {
  try {
    const response = await axiosInstance.get("campus");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los campus:", error);
    throw error;
  }
};

// Función para descargar la informacion
export const getInfoCampus = async (idCampus: number) => {
  try {
    const response = await axiosInstance.get(`campus/pdf/${idCampus}`, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener la info del campus:", error);
    throw error;
  }
};

// Función para crear un usuario
export const createUser = async (user: Participante): Promise<Participante> => {
  try {
    const response = await axiosInstance.post("participantes", user);
    return response.data;
  } catch (error) {
    console.error("Error al crear un participante:", error);
    throw error;
  }
};
