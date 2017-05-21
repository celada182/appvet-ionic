import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";
import {PacientesService} from "../../services/pacientes.service";

@IonicPage()
@Component({
  selector: 'page-nuevo-paciente',
  templateUrl: 'nuevo-paciente.html',
})
export class NuevoPacientePage {

  paciente: Paciente;
  editar:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesService: PacientesService) {
    if(this.navParams.data.hasOwnProperty('nombre')){
      this.paciente = this.navParams.data;
      this.editar=true;
    }else{
      this.paciente = new Paciente;
    }
  }

  nuevoPaciente() {
    this.pacientesService.addPaciente(this.paciente);
    this.navCtrl.pop();
  }

  onUpdate(){
    this.pacientesService.updatePaciente(this.paciente);
    this.navCtrl.pop();
  }

  checkForm():boolean{
    return (this.paciente.nombre == '');
  }

}
