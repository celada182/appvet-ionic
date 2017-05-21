import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {NuevoPacientePage} from "../nuevo-paciente/nuevo-paciente";
import {DatabaseService} from "../../services/database.service";
import {PacientesService} from "../../services/pacientes.service";
import {Paciente} from "../../models/paciente";

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage implements OnInit {

  tabsPage = TabsPage;
  nuevoPacientePage = NuevoPacientePage;
  pacientes: Paciente[];
  server_ip: string;
  server_puerto: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseService: DatabaseService,
              private pacientesService: PacientesService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
    if (localStorage.getItem('server_ip') && localStorage.getItem('server_puerto')) {
      this.server_ip = localStorage.getItem('server_ip');
      this.server_puerto = localStorage.getItem('server_puerto');
    }
  }

  ngOnInit() {
    this.pacientes = this.pacientesService.getPacientes();
  }

  onUpload() {
    let prompt = this.alertCtrl.create({
      title: 'Servidor',
      inputs: [
        {
          name: 'ip',
          placeholder: 'Dirección IP',
          type: 'tel',
          value: this.server_ip
        },
        {
          name: 'puerto',
          placeholder: 'Puerto',
          type: 'number',
          value: this.server_puerto
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: data => this.onGuardar(data)
        }
      ]
    });
    prompt.present();
  }

  onGuardar(data) {
    this.server_ip = data.ip;
    localStorage.setItem('server_ip', data.ip);
    this.server_puerto = data.puerto;
    localStorage.setItem('server_puerto', data.puerto);
    let loading = this.loadingCtrl.create({
      content: "Guardando en la base de datos"
    });
    let success = this.alertCtrl.create({
      title: 'Pacientes guardados',
      subTitle: 'server: ' + data.ip + ':' + data.puerto,
      buttons: ['Ok']
    });
    let error = this.alertCtrl.create({
      title: 'Error de conexión',
      subTitle: 'server: ' + data.ip + ':' + data.puerto,
      buttons: ['Ok']
    });
    this.databaseService.setServer(data.ip, data.puerto);
    loading.present();
    this.databaseService.clearPacientes().then(() => {
      this.databaseService.savePacientes(this.pacientes).then(() => {
        loading.dismiss();
        success.present();
      });
    }).catch(() => {
      loading.dismiss();
      error.present();
    });
  }

}
