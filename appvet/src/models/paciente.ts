import {Consulta} from "./consulta";
export class Paciente {
  nombre: string;
  propietario: string;
  microchip: number;
  especie: string;
  fechaNacimiento: string;
  sexo: string;
  peso: number;
  telefono: string;
  dieta: string;
  actividad: string;
  consultas: Consulta[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
