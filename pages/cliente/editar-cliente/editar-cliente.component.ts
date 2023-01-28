import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  nombre:string="";
  apellido:string="";
  ciudad:string="";
  direccion:string="";
  telefono: string='';
  correo: string = ""

  id=0;
  formReactive: any;

  constructor(private formBuilder:FormBuilder, public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.ciudad=data.ciudad;
      this.direccion=data.direccion;
      this.telefono=data.telefono;
      this.correo=data.correo;

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



  clientesObject=ClienteModule.clientes;

  ngOnInit(): void {

  }

  modificarCliente(){
    for (let index = 0; index < this.clientesObject.length; index++) {
      if(this.clientesObject[index].id==this.id){
          this.clientesObject[index].nombre=this.nombre;
          this.clientesObject[index].apellido=this.apellido;
          this.clientesObject[index].ciudad=this.ciudad;
          this.clientesObject[index].direccion=this.direccion;
          this.clientesObject[index].telefono=this.telefono;
          this.clientesObject[index].correo=this.correo;
        Swal.fire({
          title: 'OPERACIÓN EXITOSA',
          text: 'Usted ha editado el cliente con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
      }
    }
  }

  salir(){
    this.dialogRef.close();
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
        "APELLIDO INCORRECTO!",
        "Su nombre debe tener un máximo de 20 caracteres <br> Ejemplo: Quito Yambay",
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
        "Debe llenar este campo, con ciudades ecuatorianas<br>",
        "error"
      );

    }else if(input== "telefono"){
      Swal.fire(
        "CIUDAD INCORRECTO !",
        "El telefono debe: <br>1.- Tener 10 números <br> Ejemplo: 0934299134",
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
