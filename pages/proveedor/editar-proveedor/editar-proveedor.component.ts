import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  nombre:string="";
  ruc:string="";
  telefono:string="";
  correo:string=""; 
  direccion:string=""; 

  id=0;
  formReactive: any;
  constructor(private formBuilder:FormBuilder, public dialogRef: MatDialogRef<EditarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Proveedor){
      this.id=data.id;
      console.log(this.id);
      this.nombre=data.nombre;
      this.ruc=data.ruc;
      this.telefono=data.telefono;
      this.correo=data.correo;
      this.direccion=data.direccion;

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


  proveedorObject=ProveedorModule.proveedores;

  ngOnInit(): void {
    
  }

  modificarProveedor(){
    for (let index = 0; index < this.proveedorObject.length; index++) {
      if(this.proveedorObject[index].id==this.id){
        this.proveedorObject[index].nombre=this.nombre;
        this.proveedorObject[index].ruc=this.ruc;
        this.proveedorObject[index].telefono=this.telefono;
        this.proveedorObject[index].correo=this.correo;
        this.proveedorObject[index].direccion=this.direccion;
        Swal.fire({
          title: 'OPERACION EXITOSAMENTE',
          text: 'Usted ha completado exitosamente la operacion del proveedor con id : '+this.id,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        this.dialogRef.close();
      }
    }
  }

  getValue(value:string){
    return this.formReactive.get(value)
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

  salir(){
    this.dialogRef.close();
  }
}
