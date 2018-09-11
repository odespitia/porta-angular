import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

cargando = true;
productos: Productos[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  private cargarProductos(){
      this.http.get('https://angular-html-26fa2.firebaseio.com/productos_idx.json')
         .subscribe( (resp: Productos[]) => {
          this.productos = resp;
          console.log(this.productos);
          setTimeout(()=>{
            this.cargando = false;
          },1000);
        });
  }

  getProducto(id:string){

    return this.http.get(`https://angular-html-26fa2.firebaseio.com/productos/${ id }.json`)

  }

}
