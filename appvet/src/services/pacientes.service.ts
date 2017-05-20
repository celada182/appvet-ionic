import {Paciente} from "../models/paciente";
export class PacientesService {
  private pacientes: any = [];

  constructor() {
    if (localStorage.getItem('pacientes')) {
      this.pacientes = JSON.parse(localStorage.getItem('pacientes'));
    }
  }

  getPacientes() {
    return this.pacientes;
  }

  addPaciente(paciente: Paciente) {
    this.pacientes.push(paciente);
    this.savePacientes();
  }

  savePacientes() {
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }
}
