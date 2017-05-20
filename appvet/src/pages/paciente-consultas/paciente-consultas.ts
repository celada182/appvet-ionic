import {Component} from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PacientesPage} from "../pacientes/pacientes";
import {Paciente} from "../../models/paciente";
import {NuevaConsultaPage} from "../nueva-consulta/nueva-consulta";
import {PacientesService} from "../../services/pacientes.service";

@IonicPage()
@Component({
  selector: 'page-paciente-consultas',
  templateUrl: 'paciente-consultas.html',
})
export class PacienteConsultasPage {

  nuevaConsultaPage = NuevaConsultaPage;
  paciente: Paciente;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app: App,
              private pacientesService: PacientesService,
              private alertCtrl: AlertController) {
    this.paciente = this.navParams.data;
  }

  onBackToPacientes() {
    this.app.getRootNav().setRoot(PacientesPage, {}, {
      animate: true,
      direction: 'back'
    });
  }

  onDelete(index) {
    let confirm = this.alertCtrl.create({
      title: '¿Estas seguro de eliminar la consulta?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Si',
          handler: () => {
            this.pacientesService.deleteConsulta(this.paciente, index);
          }
        }
      ]
    });
    confirm.present();
  }

  onEdit(index) {
    let confirm = this.alertCtrl.create({
      title: '¿Editar los datos de esta consulta?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Si',
          handler: () => {
            this.navCtrl.push(NuevaConsultaPage, {paciente: this.paciente, index: index});
          }
        }
      ]
    });
    confirm.present();
  }

}
