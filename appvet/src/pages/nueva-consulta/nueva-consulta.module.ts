import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaConsultaPage } from './nueva-consulta';

@NgModule({
  declarations: [
    NuevaConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaConsultaPage),
  ],
  exports: [
    NuevaConsultaPage
  ]
})
export class NuevaConsultaPageModule {}
