import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CarritoModule {

  static listaCarrito: Product[]=[];
  constructor() { }

  static addOnCarrito(producto:Product){
    CarritoModule.listaCarrito.push(producto);
  }

  static eliminarDelCarrito(producto:Product){
    CarritoModule.listaCarrito.splice(CarritoModule.listaCarrito.indexOf(producto),1);
  }

  static eliminarTodoDelCarrito(){
    CarritoModule.listaCarrito=[];
  }

  static geTotalCarrito(){
    let total=0;
    CarritoModule.listaCarrito.forEach((producto)=>{
      total+=producto.price;
    });
    return total;
  }
 }
