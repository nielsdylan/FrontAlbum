export interface Servicio {
  id: number;
  nombre: string;
  imagen: File | null | string;
  descripcion: string;
  estado: number;
}