import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {PacientesPage} from "../pacientes/pacientes";
import {DatabaseService} from "../../services/database.service";

@IonicPage()
@Component({
  selector: 'page-opciones',
  templateUrl: 'opciones.html',
})
export class OpcionesPage {

  server_ip: string;
  server_puerto: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private databaseService: DatabaseService) {
  }

  checkServerData() {
    if (localStorage.getItem('server_ip') && localStorage.getItem('server_puerto')) {
      this.server_ip = localStorage.getItem('server_ip');
      this.server_puerto = localStorage.getItem('server_puerto');
    }
  }

  saveServerData(data) {
    this.server_ip = data.ip;
    localStorage.setItem('server_ip', data.ip);
    this.server_puerto = data.puerto;
    localStorage.setItem('server_puerto', data.puerto);
  }

  createConfirm(title, toDo) {
    return this.alertCtrl.create({
      title: title,
      subTitle: '¿Estas seguro?',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Si',
          handler: () => toDo()
        }
      ]
    });
  }

  createPrompt(confirmacion, toDo) {
    this.checkServerData();
    return this.alertCtrl.create({
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
          text: confirmacion,
          handler: data => toDo(data)
        }
      ]
    });
  }

  createLoading(cargando) {
    return this.loadingCtrl.create({
      content: cargando
    });
  }

  createErrorAlert() {
    return this.alertCtrl.create({
      title: 'Error de conexión',
      subTitle: 'server: ' + this.server_ip + ':' + this.server_puerto,
      buttons: ['Ok']
    });
  }

  onGuardar() {
    let loading = this.createLoading('Guardando pacientes...');
    let toDo = (data) => {
      this.saveServerData(data);
      let error = this.createErrorAlert();
      loading.present();
      let timeOut = setTimeout(() => {
        loading.dismiss();
        error.present();
      }, 10000);
      this.databaseService.setServer(data.ip, data.puerto);
      this.databaseService.clearPacientes().then(() => {
        this.databaseService.savePacientes().then(() => {
          loading.dismiss();
          clearTimeout(timeOut);
          this.navCtrl.setRoot(PacientesPage);
        });
      }).catch(() => {
        clearTimeout(timeOut);
        loading.dismiss();
        error.present();
      });
    };
    let prompt = this.createPrompt('Guardar', toDo);
    prompt.present()
  }

  onCargar() {
    let loading = this.createLoading('Cargando pacientes...');
    let toDo = (data) => {
      this.saveServerData(data);
      let error = this.createErrorAlert();
      loading.present();
      let timeOut = setTimeout(() => {
        loading.dismiss();
        error.present();
      }, 10000);
      this.databaseService.setServer(data.ip, data.puerto);
      this.databaseService.loadPacientes().then((data) => {
        localStorage.setItem('pacientes', JSON.stringify(data));
        loading.dismiss();
        clearTimeout(timeOut);
        this.navCtrl.setRoot(PacientesPage);
      }).catch(() => {
        clearTimeout(timeOut);
        loading.dismiss();
        error.present();
      });
    };
    let prompt = this.createPrompt('Cargar', toDo);
    prompt.present();
  }

  onEliminar() {
    let toDo = () => {
      localStorage.clear();
      this.navCtrl.setRoot(PacientesPage);
    };
    let confirm = this.createConfirm('Eliminar', toDo);
    confirm.present();
  }

}
