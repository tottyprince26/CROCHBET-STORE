import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-proveedor',
  templateUrl: './insertar-proveedor.component.html',
  styleUrls: ['./insertar-proveedor.component.css']
})
export class InsertarProveedorComponent {

  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) {
    this.formReactive=this.formBuilder.group(
      {
        nombre:['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
        ruc:['',[Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern(/^[0-9]{13}$/i)]],
        telefono:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]{10}$/i)]],
        correo: ['',[Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
        direccion:['',[Validators.required, Validators.maxLength(70)]],
      }
    )
  }

  nombre:string="";
  ruc:string="";
  telefono: string="";
  correo:string="";
  direccion:string="";

  Actualstatus="agregar";

  dataSource:any=[];


  proveedorObject=ProveedorModule.proveedores;

  getValue(value:string){
    return this.formReactive.get(value)
  }

  onSubmit(){
    let nuevo={
      id: this.proveedorObject.length+1,
      nombre: this.nombre,
      ruc: this.ruc,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion
    }
    ProveedorModule.proveedores.push(nuevo);
    let existe=false;
    
    
    Swal.fire({
      title: 'INSERTADO EXITOSAMENTE',
      text: 'Usted ha insertado al proveedor ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.nombre="";
    this.ruc="";
    this.telefono="";
    this.correo="";
    this.direccion="";
   }

   abrirVentana(input:string){
    if(input=="nombre"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre debe tener un máximo de 40 caracteres <br> Ejemplo: Distribuidora:Lanas XYZ",
        "error"
      );
    }else if(input=="ruc"){
      Swal.fire(
        "RUC INCORRECTO!",
        "El RUC debe tener un máximo de 13 caracteres <br> Ejemplo: 1234567894001",
        "error"
      );
    }else if(input=="telefono"){
      Swal.fire(
        "TELEFONO INCORRECTO!",
        "El Telefono debe tener un máximo de 10 caracteres <br> Ejemplo: 0978364762",
        "error"
      );
    }else if(input=="correo"){
      Swal.fire(
        "CORREO INCORRECTO!",
        "El Correo debe tener un máximo de 40 caracteres <br> Ejemplo: lanaslolita@gmail.com",
        "error"
      );
    }else if(input=="direccion"){
      Swal.fire(
        "DIRECCION INCORRECTO!",
        "El Direccion debe tener un máximo de 70 caracteres <br> Ejemplo: cdla. Albert gilbert mz.972 vll. 5",
        "error"
      );
    }
  }
}
