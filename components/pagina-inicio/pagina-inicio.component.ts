import { Component, Inject, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';
import { ProductsService } from  '../../services/product/products.service';
import { CarritoComponent } from '../carrito/carrito.component';
import {MatDialog} from '@angular/material/dialog';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';


@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {

  constructor(private router:Router,
    private route:ActivatedRoute,
    //private productsService:ProductsService,
    public dialog:MatDialog){}

  moduloProducto=ProductoModule.productos;

  categorias=ProductoModule.categorias;

  usuario:string='';

  rol:string='';

  miCarrito=(new CarritoModule());

  //ropaPlatzi:Product[]=[{id:'',title:'',price:0,description:'',category:'',image:''}];
 
  ngOnInit(): void {
    this.usuario=this.route.snapshot.params['usuario'];
    this.rol=this.route.snapshot.params['rol'];
    /*this.productsService.getAllProducts().subscribe((data)=>{
      this.ropaPlatzi=data;
      console.log(this.ropaPlatzi);
    });*/

    /*this.productsService.getProducts().subscribe((data)=>{
      console.log(data);
    });*/
  }

  carrito=[{}];
  //desplegar texto del carrito
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
    this.dialog.open(CarritoComponent,{data:this.rol});
  }
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


  filtrarCategoria(categoria:string){
    let arrayFiltrado:Product[]=[];
    let contador=1;
    for(let item of this.moduloProducto){
      if(item.category.toLocaleLowerCase()==categoria.toLocaleLowerCase()&&contador<=4){
        arrayFiltrado.push(item);
        contador++;
      }
    }
    return arrayFiltrado;
  }


  noDisponible(){
      // opcion deshabilitada por el momento
      Swal.fire({
        title: 'Opcion deshabilitada',
        text: 'Esta opcion se habilitara en un futuro',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
  }


  buscar(filtro:string){

    this.router.navigate(['busqueda',this.usuario,filtro,this.rol,'categoria']);
    console.log(filtro);
    
  }
}
