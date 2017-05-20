import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {NuevoPacientePage} from "../nuevo-paciente/nuevo-paciente";
import {PacientesService} from "../../services/pacientes.service";
import {Paciente} from "../../models/paciente";

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage implements OnInit {

  tabsPage = TabsPage;
  nuevoPacientePage = NuevoPacientePage;
  pacientes: Paciente[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pacientesService: PacientesService) {
  }

  ngOnInit() {
    this.pacientes = this.pacientesService.getPacientes();
  }

}
