import {Consulta} from "./consulta";
export class Paciente {
  nombre: string;
  propietario: string;
  direccion:string;
  microchip: number;
  especie: string;
  fechaNacimiento: string;
  sexo: string;
  castrado: boolean;
  peso: number;
  telefono: string;
  dieta: string;
  actividad: string;
  consultas: Consulta[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.consultas = [];
  }
}
