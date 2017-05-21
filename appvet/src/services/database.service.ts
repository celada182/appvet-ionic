import {Http, Headers} from "@angular/http";
import {Paciente} from "../models/paciente";
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";

@Injectable()
export class DatabaseService {
  server: string;
  APIcreate: string = '/api/pacientes/create';
  APIclear: string = '/api/pacientes/clear';

  constructor(public http: Http) {

  }

  setServer(ip: string, puerto: number) {
    this.server = 'http://' + ip + ':' + puerto;
  }

  clearPacientes() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(this.server + this.APIclear, {headers: headers})
        .map(res => res.json())
        .subscribe(
          data => resolve(data),
          err => reject({error:'error de conexion'})
        );
    });
  }

  savePacientes(pacientes: Paciente[]) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + this.APIcreate, JSON.stringify(pacientes), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}