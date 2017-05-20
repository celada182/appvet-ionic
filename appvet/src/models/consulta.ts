export class Consulta {
  fecha: string;
  motivo: string;
  diagnostico: string;
  observaciones: string;

  constructor(values : Object = {}){
    Object.assign(this,values);
  }
}
