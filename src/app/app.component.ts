import { Component } from '@angular/core';

import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oscar Angular';

  constructor(public infoPaginaService: InfoPaginaService, public productosServide: ProductosService ){

  }
}
