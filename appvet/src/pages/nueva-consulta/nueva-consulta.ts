import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Consulta} from "../../models/consulta";
import {PacientesService} from "../../services/pacientes.service";
import {Paciente} from "../../models/paciente";

@IonicPage()
@Component({
  selector: 'page-nueva-consulta',
  templateUrl: 'nueva-consulta.html',
})
export class NuevaConsultaPage {

  consulta: Consulta;
  paciente: Paciente;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesService: PacientesService) {
    this.consulta = new Consulta;
    this.paciente = this.navParams.data;
  }

  nuevaConsulta() {
    this.pacientesService.addConsulta(this.paciente, this.consulta);
    this.navCtrl.pop();
  }

}
