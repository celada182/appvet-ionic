import {Component} from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PacientesPage} from "../pacientes/pacientes";
import {Paciente} from "../../models/paciente";
import {PacientesService} from "../../services/pacientes.service";

@IonicPage()
@Component({
  selector: 'page-paciente-detalles',
  templateUrl: 'paciente-detalles.html',
})
export class PacienteDetallesPage {

  paciente: Paciente;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              private alertCtrl: AlertController,
              private pacientesService: PacientesService) {
    this.paciente = this.navParams.data;
  }

  onBackToPacientes() {
    this.app.getRootNav().setRoot(PacientesPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  onDelete() {
    let confirm = this.alertCtrl.create({
      title: '¿Estas seguro de eliminar el paciente?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Si',
          handler: () => {
            this.pacientesService.deletePaciente(this.paciente);
            this.onBackToPacientes();
          }
        }
      ]
    });
    confirm.present();
  }

}
