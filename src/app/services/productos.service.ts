import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

cargando = true;
productos: Productos[] = [];
productoFiltrado: Productos[] = [];

  constructor( private http: HttpClient ) {

      this.cargarProductos();

  }



  private cargarProductos(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-26fa2.firebaseio.com/productos_idx.json')
         .subscribe( (resp: Productos[]) => {
          this.productos = resp;
          //console.log(this.productos);
          setTimeout(()=>{
            this.cargando = false;
            resolve();
          },1000);
        });
    });
  }

  getProducto(id:string){

    return this.http.get(`https://angular-html-26fa2.firebaseio.com/productos/${ id }.json`)

  }

  buscarProducto(termino: string){

    if ( this.productos.length === 0 ){
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });

    }else{
      this.filtrarProductos(termino);
    }
  }

  filtrarProductos(termino: string){
   //console.log(this.productos);
   this.productoFiltrado = [];
   termino = termino.toLocaleLowerCase();
     this.productos.forEach( prod =>{
       if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLocaleLowerCase().indexOf( termino ) >= 0 ) {
         this.productoFiltrado.push( prod );
       }
     });

  }

}
