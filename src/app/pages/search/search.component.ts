import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductoService
  ) { }


  ngOnInit() {

    this.route.params.subscribe(params => {
      /* producto , es el mismo nombre que se puso en la url en app-routing*/
      this.productoService.buscarProducto(params['producto']);
    })

  }
}
