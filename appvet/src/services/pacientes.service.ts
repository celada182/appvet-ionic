import {Paciente} from "../models/paciente";
import {Consulta} from "../models/consulta";
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

  addConsulta(paciente: Paciente, consulta: Consulta) {
    paciente.consultas.push(consulta);
    this.savePacientes();
  }

  deleteConsulta(paciente: Paciente, index: number) {
    paciente.consultas.splice(index,1);
    this.savePacientes();
  }

  savePacientes() {
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }
}
