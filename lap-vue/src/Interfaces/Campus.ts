export interface Campus {
  idCampus: number;
  nombre: string;
  direccion: string;
  localidad: string;
  ciudad: string;
  pais: string;
  precio: number;
  edadMinima: number;
  edadMaxima: number;
  aforoMaximo: number;
  descuentoHermano: number;
  descuentoJugador: number;
  descripcionCampus: string;
  imagenCampus: string;
  diaInicio: string; // Usamos string para las fechas (se puede convertir a Date si lo prefieres)
  diaFinal: string;
  horaInicio: string; // TimeOnly en C# se puede manejar como string en formato HH:mm
  horaFinal: string;
  formaPagoUno: string;
  formaPagoDos?: string; // Opcional
  formaPagoTres?: string; // Opcional
  participantes: Participante[]; // Asumo que tienes una interfaz para "Participante"
}

// src/interfaces/Participante.ts

export interface Participante {
  idParticipante: number;
  nombre: string;
  primerApellido: string;
  segundoApellido?: string; // Opcional
  dniparticipante: string;
  fechaNacimiento: string; // Usamos string para la fecha, puedes convertirlo en Date si lo prefieres
  direccionParticipante: string;
  localidad: string;
  codigoPostal: string;
  lesiones?: string; // Opcional
  descripcionLesiones?: string; // Opcional
  tomaMedicacion: boolean;
  descripcionMedicacion?: string; // Opcional
  alergias: boolean;
  descripcionAlergias?: string; // Opcional
  nombreTutor: string;
  primerApellidoTutor: string;
  segundoApellidoTutor?: string; // Opcional
  dnitutor: string;
  telefonoPrincipal: string;
  telefonoSecundario?: string; // Opcional
  correoParticipante: string;
  permiteFotos: boolean;
  autorizacion: boolean;
  firma?: string; // Opcional
  idCampus: number;
  tallaCamiseta?: string; // Opcional
}

export interface ParticipanteDTO {
  nombre: string;
  primerApellido: string;
  segundoApellido?: string; // Opcional
  dniparticipante: string;
  fechaNacimiento: string; // Usamos string para la fecha, puedes convertirlo en Date si lo prefieres
  direccionParticipante: string;
  localidad: string;
  codigoPostal: string;
  lesiones?: string; // Opcional
  descripcionLesiones?: string; // Opcional
  tomaMedicacion: string;
  descripcionMedicacion?: string; // Opcional
  alergias: string;
  descripcionAlergias?: string; // Opcional
  nombreTutor: string;
  primerApellidoTutor: string;
  segundoApellidoTutor?: string; // Opcional
  dnitutor: string;
  telefonoPrincipal: string;
  telefonoSecundario?: string; // Opcional
  correoParticipante: string;
  permiteFotos: boolean;
  autorizacion: boolean;
  firma?: string; // Opcional
  idCampus: number;
  tallaCamiseta?: string; // Opcional
}
