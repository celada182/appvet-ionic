import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoPacientePage } from './nuevo-paciente';

@NgModule({
  declarations: [
    NuevoPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoPacientePage),
  ],
  exports: [
    NuevoPacientePage
  ]
})
export class NuevoPacientePageModule {}
