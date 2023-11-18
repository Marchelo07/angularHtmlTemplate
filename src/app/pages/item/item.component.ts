import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto !: ProductoDescripcion;
  productoId!: string;

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      console.log(parametros);

      this.productoService.getProductoDescripcion(parametros['id']).subscribe(resp => {
        this.productoId = parametros['id'];
        this.producto = resp;
      });
    });

  }

}
