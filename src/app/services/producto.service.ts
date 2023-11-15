import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando: boolean = true;
  productos: Producto[] = [];

  constructor(
    private http: HttpClient
  ) {

    this.cargarProductos();
  }

  cargarProductos() {

    this.http.get<Producto[]>('https://portafolio-70f2c-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe(resp => {
        console.log(resp)
        this.productos = resp;
        this.cargando = false;
      });

  }

}
