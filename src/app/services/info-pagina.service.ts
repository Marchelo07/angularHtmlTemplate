import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoEquipo, InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  
  infoEquipo: InfoEquipo []= [];

  constructor(private http: HttpClient) {

    this.cargaInfo();
    this.cargaEquipo();
  }

  private cargaInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((data: InfoPagina) => {
        // console.log(data)
        this.cargada = true;
        this.info = data;
      });
  }

  private cargaEquipo(){
    this.http.get<InfoEquipo[]>('https://portafolio-70f2c-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((data) => {
        this.infoEquipo = data;
        this.cargada = true;
      });
  }
}
