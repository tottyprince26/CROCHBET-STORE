import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { window } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor(private router:Router,
    private route:ActivatedRoute,
    public dialog:MatDialog){

    }
  
    moduloProducto=ProductoModule.productos;




    ngOnInit(): void {

    }

    ngOnChanges(): void {

    }

    filtrarProductos(){
      let arrayProductos:Product[]=[];
      let filtrado=this.route.snapshot.params['filtro'];
      let tipo=this.route.snapshot.params['tipo'];

     

      console.log(filtrado)
      var regex = new RegExp(filtrado,'gi');
      console.log(regex);

      if(filtrado=='todos'){
        return this.moduloProducto;
      }else{
        if (tipo=='categoria'){
          arrayProductos=this.moduloProducto.filter(producto => producto.category.search(regex)!=-1 );
          return arrayProductos;
        }else {
          arrayProductos=this.moduloProducto.filter(producto => producto.title.search(regex)!=-1 );
          return arrayProductos;
        }
        
      }
      
    }


    despliegue='none';
      //cambiar estado de despliegue del texto carrito
  desplegarTextoCarrito(){
    if(this.despliegue=='none'){
      this.despliegue='flex';
    }
  }
  ocultarTextoCarrito(){
    if(this.despliegue=='flex'){
      this.despliegue='none';
    }
  }

  mostrarCarrito(){
    this.dialog.open(CarritoComponent,{});
  }

  
  carrito=[{}];
  confirmation:any;
  verProducto(indice:number){
    indice=indice-1;
    this.confirmation=Swal.fire({
      title: this.moduloProducto[indice].title,
      text: "Quieres agregar este producto al carrito?",
      html: "<p>"+this.moduloProducto[indice].description+"</p>"
      +"<p>Precio: $"+this.moduloProducto[indice].price+"</p>",
      imageUrl: this.moduloProducto[indice].image,
      imageWidth: 250,
      imageHeight: 225,
      imageAlt: this.moduloProducto[indice].image,
      showCancelButton: true,
      confirmButtonText: "AGREGAR",
      cancelButtonText: "SALIR",
      confirmButtonColor: "black",
      cancelButtonColor: "red",
      reverseButtons: true
    }).then ((result) => {
      if(result.isConfirmed){
        CarritoModule.addOnCarrito(this.moduloProducto[indice]);
        Swal.fire(
          'Producto agregado',
          'El producto ha sido agregado al carrito',
          'success'
        )
        }
        this.carrito.push(this.moduloProducto[indice]);
        console.log(this.carrito);
      })
  }
}
