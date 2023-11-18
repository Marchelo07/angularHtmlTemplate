import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public _servicio: InfoPaginaService,
    private router: Router,
  ) { }

  buscarProducto(texto: string) {

    if (texto.length < 1) {
      return;
    }

    this.router.navigate(['/search', texto]);

  }
}
