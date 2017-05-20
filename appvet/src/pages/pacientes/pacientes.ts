import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {NuevoPacientePage} from "../nuevo-paciente/nuevo-paciente";

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {

  tabsPage = TabsPage;
  nuevoPacientePage = NuevoPacientePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
