import {
  Campus,
  Participante,
  ParticipanteRequestDTO,
} from "@/Interfaces/Campus";
import axiosInstance from "./axiosService";
import axios from "axios";

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
export const createUser = async (
  user: ParticipanteRequestDTO
): Promise<Participante> => {
  try {
    const response = await axiosInstance.post("participantes", user);
    return response.data;
  } catch (error: unknown) {
    console.error("Error al crear un participante:", error);

    if (axios.isAxiosError(error) && error.response?.status === 409) {
      throw new Error("Ya existe un participante con los mismos datos.");
    }

    throw error;
  }
};

// Función para obtener los usuarios
export const getParticipantesByCampus = async (
  idCampus: number
): Promise<Participante[]> => {
  try {
    const response = await axiosInstance.get(
      `campus/participantes/${idCampus}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los campus:", error);
    throw error;
  }
};
