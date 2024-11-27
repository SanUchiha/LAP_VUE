import { appsettings } from "@/settings/appsettings";
import axios from "axios";

// Crear una instancia de axios con configuración base
const axiosInstance = axios.create({
  baseURL: appsettings.apiUrl, // Reemplaza con tu URL base
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar respuestas y errores globalmente
axiosInstance.interceptors.response.use(
  (response) => response, // Manejo de respuesta exitosa
  (error) => {
    // Manejo de errores (puedes agregar lógica aquí, como mostrar alertas)
    console.error("Error en la respuesta", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
