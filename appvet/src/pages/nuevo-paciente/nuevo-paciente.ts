import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";

@IonicPage()
@Component({
  selector: 'page-nuevo-paciente',
  templateUrl: 'nuevo-paciente.html',
})
export class NuevoPacientePage {

  paciente: Paciente;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paciente = new Paciente;
  }

  nuevoPaciente(){
    console.log(this.paciente);
  }

}
