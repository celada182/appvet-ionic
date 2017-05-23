import {Paciente} from "../models/paciente";
import {Consulta} from "../models/consulta";
export class PacientesService {
  private pacientes;

  constructor() {

  }

  getPacientes() {
    if (localStorage.getItem('pacientes')) {
      this.pacientes = JSON.parse(localStorage.getItem('pacientes'));
    } else {
      this.pacientes = [];
    }
    return this.pacientes;
  }

  addPaciente(paciente: Paciente) {
    this.pacientes.push(paciente);
    this.savePacientes();
  }

  deletePaciente(paciente: Paciente) {
    const position = this.pacientes.findIndex((p: Paciente) => {
      return p.microchip == paciente.microchip;
    });
    this.pacientes.splice(position, 1);
    this.savePacientes();
  }

  updatePaciente(paciente: Paciente) {
    const position = this.pacientes.findIndex((p: Paciente) => {
      return p.microchip == paciente.microchip;
    });
    this.pacientes[position] = paciente;
    this.savePacientes();
  }

  addConsulta(paciente: Paciente, consulta: Consulta) {
    paciente.consultas.push(consulta);
    this.savePacientes();
  }

  deleteConsulta(paciente: Paciente, index: number) {
    paciente.consultas.splice(index, 1);
    this.savePacientes();
  }

  updateConsulta(paciente: Paciente, consulta: Consulta, index: number) {
    paciente.consultas[index] = consulta;
    this.savePacientes();
  }

  savePacientes() {
    localStorage.setItem('pacientes', JSON.stringify(this.pacientes));
  }
}
