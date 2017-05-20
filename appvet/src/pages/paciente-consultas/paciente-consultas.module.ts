import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteConsultasPage } from './paciente-consultas';

@NgModule({
  declarations: [
    PacienteConsultasPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteConsultasPage),
  ],
  exports: [
    PacienteConsultasPage
  ]
})
export class PacienteConsultasPageModule {}
