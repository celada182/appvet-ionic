import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PacientesPage} from "../pacientes/pacientes";

@IonicPage()
@Component({
  selector: 'page-paciente-detalles',
  templateUrl: 'paciente-detalles.html',
})
export class PacienteDetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onBackToPacientes(){
    this.navCtrl.setRoot(PacientesPage,{},{
      animate:true,
      direction:'back'
    });
  }

}
