import {Component} from '@angular/core';
import {PacienteDetallesPage} from "../paciente-detalles/paciente-detalles";
import {PacienteConsultasPage} from "../paciente-consultas/paciente-consultas";
import {Paciente} from "../../models/paciente";
import {NavParams} from "ionic-angular";
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="pacienteConsultasPage" [rootParams]="paciente" tabTitle="Consultas" tabIcon="paper"></ion-tab>
      <ion-tab [root]="pacienteDetallesPage" [rootParams]="paciente" tabTitle="Detalles" tabIcon="clipboard"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  pacienteDetallesPage = PacienteDetallesPage;
  pacienteConsultasPage = PacienteConsultasPage;
  paciente: Paciente;

  constructor(private navParams: NavParams) {
    this.paciente = this.navParams.data;
    console.log(this.paciente);
  }
}

