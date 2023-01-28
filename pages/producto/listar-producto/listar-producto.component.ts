import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import { EditarClienteComponent } from '../../cliente/editar-cliente/editar-cliente.component';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { EliminarProductoComponent } from '../eliminar-producto/eliminar-producto.component';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent {
  constructor(public dialog:MatDialog){}

  titulo:string="";
  precio:number=0;
  miImagen: string='';
  descripcion:string="";
  categoria:string="";

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  productObject=ProductoModule.productos;

  displayedColumns: string[] = ['id', 'title', 'price','image', 'description', 'category', 'actions'];



  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
  }

  onSubmit(){
    let nuevo={
      id: this.productObject.length+1,
      title: this.titulo,
      price: this.precio,
      image: this.miImagen,
      description: this.descripcion,
      category: this.categoria
    }
    ProductoModule.productos.push(nuevo);
    let existe=false;
    for(let i=0; i<ProductoModule.categorias.length; i++){
      if (ProductoModule.categorias[i]==this.categoria.toUpperCase()){
        existe=true;
      }
    }
    if(existe==false){
      ProductoModule.categorias.push(this.categoria.toUpperCase());
    }
    
   }


  estado(estatus:string){
    this.Actualstatus=estatus;
  }

  editarProducto(idCliente:string, titulo:string, precio:number, imagen:string, descripcion:string, categoria:string){
      this.dialog.open(EditarProductoComponent, {
        data: {
                'id':idCliente,
                'title':titulo,
                'price':precio,
                'image':imagen,
                'description':descripcion,
                'category':categoria
              }
      });
  }

  eliminarProducto(idCliente:string){
    this.dialog.open(EliminarProductoComponent,{
      data: <number><unknown>idCliente
    });
    
    this.dialog.afterAllClosed.subscribe(result=>{
      this.productObject=ProductoModule.productos;
      this.dataSource=new MatTableDataSource<Product>(this.productObject as Product[]);
    });
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  } 
}
