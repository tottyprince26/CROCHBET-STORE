import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent {


  formReactive:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,public http:HttpClient) {
    this.formReactive=this.formBuilder.group(
      {
        nombre:['',[Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i)]],//Validators.pattern("[A-Za-z]")
        apellido:['',[Validators.required,Validators.maxLength(20), Validators.pattern(/^[a-z ,.'-]+$/i) ]],
        ciudad:['',[Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
        direccion:['',[Validators.required,Validators.maxLength(20)]],
        telefono:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[0-9]{10}$/i)]],
        correo: ['',[Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]]
      }
    )
  }

  nombre:string="";
  apellido: string='';
  ciudad:string="";
  direccion:string="";
  telefono: string='';
  correo: string='';

  Actualstatus="agregar";

  dataSource:any=[];

  //productObject:ProductoModule=new ProductoModule();

  clientesObject=ClienteModule.clientes;

  onSubmit(){
    let nuevo={
      id: this.clientesObject.length+1,
      nombre: this.nombre,
      apellido: this.apellido,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefono: this.telefono,
      correo: this.correo
    }
    ClienteModule.clientes.push(nuevo);
    Swal.fire({
      title: 'OPERACIÓN EXITOSA',
      text: 'Usted ha insertado el cliente ',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    this.nombre="";
    this.apellido="";
    this.ciudad="";
    this.direccion= "";
    this.telefono= "";
    this.correo="";
   }

   getValue(value:string){
    return this.formReactive.get(value)
  }

  abrirVentana(input:string){
    if(input=="nombre"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El nombre no debe tener un mas de 20 caracteres, y no incluye números <br> Ejemplo: Ruth Maria",
        "error"
      );
    }else if(input=="apellido"){
      Swal.fire(
        "NOMBRE INCORRECTO !",
        "El apellido no debe tener un mas de 20 caracteres, y no incluye números <br> Ejemplo: Quito Yambay",
        "error"
      );
    }else if(input=="direccion"){
      Swal.fire(
        "DIRECCIÓN INCORRECTO !",
        "Debe ingresar su dirección<br> Ejemplo: Coop. Juan Pablo II",
        "error"
      );
    }else if(input=="ciudad"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Debe llenar este campo con ciudades ecuatorianas<br>",
        "error"
      );
    }else if(input== "telefono"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "El telefono debe: <br>1.- Tener un max. de 10 números <br> Ejemplo: 0934299134",
        "error"
      );
    }else if(input== "correo"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "Ingrese correctamente su correo: <br>Ejemplo: ruth11@gmail.com",
        "error"
      );
    }

  }
}
