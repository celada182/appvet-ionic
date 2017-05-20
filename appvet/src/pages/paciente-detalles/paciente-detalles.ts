import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PacientesPage} from "../pacientes/pacientes";
import {Paciente} from "../../models/paciente";

@IonicPage()
@Component({
  selector: 'page-paciente-detalles',
  templateUrl: 'paciente-detalles.html',
})
export class PacienteDetallesPage {

  paciente: Paciente;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
    this.paciente = this.navParams.data;
  }

  onBackToPacientes() {
    this.app.getRootNav().setRoot(PacientesPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

}
