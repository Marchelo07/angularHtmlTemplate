import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(
    private http: HttpClient
  ) {

    this.cargarProductos();
  }

  cargarProductos() {

    return new Promise<boolean>((resolve, reject) => {
      this.http.get<Producto[]>('https://portafolio-70f2c-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe(resp => {
          this.productos = resp;
          this.cargando = false;
          resolve(true);
        });
    });
  }

  getProductoDescripcion(id: string) {
    return this.http.get<ProductoDescripcion>(`https://portafolio-70f2c-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(producto: string) {

    /* validamos si productos ya tiene informacion ya que este no 
    puede tener por qye va a traer informacion  de firebase */

    if (this.productos.length === 0) {
      //cargar productos, volver a llamar la funcion para cargar los productos
      this.cargarProductos().then(() => {
        //poniendo el then se ejecuta una vez que tengamos los productos        
        this.filtrarProductos(producto);
      });
    } else {
      //aplicamos el filtro
      this.filtrarProductos(producto);
    }

  }

  filtrarProductos(termino: string) {
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase(); //para hacer sentitive en la busqueda

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      //si algo coincide el termino que se escribio
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });
  }

}
