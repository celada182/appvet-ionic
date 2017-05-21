import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from "@angular/http";

import {MyApp} from './app.component';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NuevaConsultaPage} from "../pages/nueva-consulta/nueva-consulta";
import {NuevoPacientePage} from "../pages/nuevo-paciente/nuevo-paciente";
import {PacienteConsultasPage} from "../pages/paciente-consultas/paciente-consultas";
import {PacienteDetallesPage} from "../pages/paciente-detalles/paciente-detalles";
import {PacientesPage} from "../pages/pacientes/pacientes";
import {PacientesService} from "../services/pacientes.service";
import {DatabaseService} from "../services/database.service";


@NgModule({
  declarations: [
    MyApp,
    NuevaConsultaPage,
    NuevoPacientePage,
    PacienteConsultasPage,
    PacienteDetallesPage,
    PacientesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NuevaConsultaPage,
    NuevoPacientePage,
    PacienteConsultasPage,
    PacienteDetallesPage,
    PacientesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacientesService,
    DatabaseService
  ]
})
export class AppModule {
}
