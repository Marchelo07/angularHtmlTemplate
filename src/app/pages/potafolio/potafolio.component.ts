import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-potafolio',
  templateUrl: './potafolio.component.html',
  styleUrls: ['./potafolio.component.css']
})
export class PotafolioComponent {

  constructor(public productoService: ProductoService) {

  }

}
