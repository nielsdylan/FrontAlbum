export interface Cliente {
  id: number;
  email: string;
  name: string;
  estado: number;
  persona: Persona;
}
export interface Persona {
  id: number;
  numero_documento: string;
  nombres: string;
  apellidos: string;
  telefono: number;
  estado: number;
}
