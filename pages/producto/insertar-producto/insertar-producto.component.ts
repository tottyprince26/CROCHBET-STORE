import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.component.html',
  styleUrls: ['./insertar-producto.component.css']
})
export class InsertarProductoComponent {
  

  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) {
    this.formReactive=this.formBuilder.group(
      {
        titulo:['',[Validators.required,, Validators.minLength(3), Validators.maxLength(20)]],//Validators.pattern("[A-Za-z]")
        precio:['',[Validators.required,Validators.minLength(1), Validators.pattern(/^[0-9]{1,4}$/i)]],
        imagen:['',[Validators.required]],
        descripcion:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        categoria:['',[Validators.required,Validators.minLength(4)]]      }
    )
  }
  
  titulo:string="";
  precio:number=0;
  miImagen: string='';
  descripcion:string="";
  categoria:string="";

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  productObject=ProductoModule.productos;

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
    Swal.fire({
      title: 'INSERTADO EXITOSAMENTE',
      text: 'Usted ha insertado el producto ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.titulo="";
    this.precio=0;
    this.miImagen='';
    this.descripcion="";
    this.categoria="";
   }

   //validar p
   getValue(value:string){
    return this.formReactive.get(value)
  }

 
  abrirVentana(input:string){
    if(input=="titulo"){
      Swal.fire(
        "TITULO INCORRECTO !",
        "El titulo debe tener un min de 3 y max. de 20 caracteres <br> Ejemplo: Canasta de plastico",
        "error"
      );
    }else if(input=="precio"){
      Swal.fire(
        "PRECIO INCORRECTO !",
        "El precio debe tener un min de 1 y max. de 4 numeros <br> Ejemplo: 1000",
        "error"
      );
    }else if(input=="imagen"){
      Swal.fire(
        "IMAGEN INCORRECTO !",
        "La imagen debe es obligatoria, y debe ser valida (es decir debe cargar en el cuadro del formulario).",
        "error"
      );
    }else if(input=="descripcion"){
      Swal.fire(
        "DESCRIPCION INCORRECTO !",
        "La descripcion debe tener un min de 10 y max. de 100 caracteres <br> Ejemplo: Esto es una canasta",
        "error"
      );
    }else if(input== "categoria"){
      Swal.fire(
        "CATEGORIA INCORRECTO !",
        "La categoria debe tener un min de 4 caracteres <br> Ejemplo: canasta",
        "error"
      );
    }
  }


  //validacion imagen:
  imageDefault='https://www.grupomisol.com/wp-content/uploads/2014/11/imagen-no-disponible.gif';
  estado_imagen=true;

  evitarErrorImg2(){  
    console.log("error en la imagen");
    this.estado_imagen=false;
    this.miImagen=this.imageDefault;
  }

  actualizar(){
    console.log("CARGANDO");
    
    console.log('true');
  }


  cargarImagen(){
     return  this.miImagen;
  }
}
