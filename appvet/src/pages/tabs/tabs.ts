import {Component} from '@angular/core';
import {PacienteDetallesPage} from "../paciente-detalles/paciente-detalles";
import {PacienteConsultasPage} from "../paciente-consultas/paciente-consultas";
@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="pacienteConsultasPage" tabTitle="Consultas" tabIcon="paper"></ion-tab>
      <ion-tab [root]="pacienteDetallesPage" tabTitle="Detalles" tabIcon="clipboard"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  pacienteDetallesPage = PacienteDetallesPage;
  pacienteConsultasPage = PacienteConsultasPage;
}

