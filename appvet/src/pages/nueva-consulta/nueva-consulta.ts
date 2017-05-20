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
  editar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesService: PacientesService) {
    this.paciente = this.navParams.get('paciente');
    if(typeof this.navParams.get('index') != 'undefined'){
      this.consulta = this.paciente.consultas[this.navParams.get('index')];
      this.editar = true;
    }else{
      this.consulta = new Consulta;
    }
  }

  nuevaConsulta() {
    this.pacientesService.addConsulta(this.paciente, this.consulta);
    this.navCtrl.pop();
  }

  onUpdate(){
    this.pacientesService.updateConsulta(this.paciente,this.consulta, this.navParams.get('index'));
    this.navCtrl.pop();
  }

}
