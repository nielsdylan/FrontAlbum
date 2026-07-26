export interface Cliente {
  id: number;
  titulo: string;
  descripcion: string;
  estado: number;
  plantilla_id: number;
  palabras: string;
  usuario_id: number;
  persona: Persona;
}
export interface Persona {
  id: number;
  numero_documento: number;
  nombres: string;
  apellidos: string;
  telefono: number;
  estado: number;
}
