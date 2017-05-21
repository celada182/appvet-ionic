import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opciones',
  templateUrl: 'opciones.html',
})
export class OpcionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  createConfirm(title,toDo) {
    return this.alertCtrl.create({
      title:title,
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

  onGuardar() {
    let toDo = () => {
      console.log('Guardar datos app');
    };
    let confirm = this.createConfirm('Guardar',toDo);
    confirm.present();
  }

  onCargar() {
    let toDo = () => {
      console.log('Cargar datos app');
    };
    let confirm = this.createConfirm('Cargar',toDo);
    confirm.present();
  }

  onEliminar() {
    let toDo = () => {
      console.log('Eliminar datos app');
    };
    let confirm = this.createConfirm('Eliminar',toDo);
    confirm.present();
  }

}
