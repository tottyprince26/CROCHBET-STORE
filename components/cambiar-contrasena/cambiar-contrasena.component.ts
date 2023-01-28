import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.css']
})
export class CambiarContrasenaComponent {
  
  actualContrasena:string='';
  oldContrasena:string='';
  firstContrasena:string='';
  secondContrasena:string='';
  formReactive:FormGroup;

   constructor(public dialogRef: MatDialogRef<CambiarContrasenaComponent>,private formBuilder:FormBuilder,
    //private productsService:ProductsService,
    @Inject(MAT_DIALOG_DATA) public data:string) {

      this.actualContrasena=data;
      this.formReactive=this.formBuilder.group(
        {
          old:['',[Validators.required,Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/i)]],//Validators.pattern("[A-Za-z]")
          new:['',[Validators.required,Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/i)]],
          renew:['',[Validators.required,Validators.pattern(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,})/i)]] 
        }
      )

    }
    

  ngOnInit() {
    
  }

  CambiarContrasena(){
    console.log(this.actualContrasena);
    if(this.firstContrasena==this.secondContrasena&&this.actualContrasena==this.oldContrasena){
      console.log("Contraseña cambiada");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Contraseña cambiada',
        showConfirmButton: false,
        timer: 1500
      });
      this.dialogRef.close();
    }else if(this.actualContrasena!=this.oldContrasena){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña actual no es correcta',
      });

    }
    else if(this.firstContrasena!=this.secondContrasena){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseña nueva y la confirmacion no coinciden',
      });

    }
    
  }


  salir(){
    //this.dialog.closeAll();
    this.dialogRef.close();
  }


  //validar

  inputColorPass:string='white';
  inputColorPass2:string='white';
  inputColorPass3:string='white';
  
  getValue(value:string){
    return this.formReactive.get(value)
  }

  sendAction(input:string){


    if(this.getValue('old')?.invalid && input=="old"){
      this.inputColorPass='pink';
    }else if(this.getValue('old')?.valid && input=="old"){
      this.inputColorPass='lightgreen';
    }

    if(this.getValue('new')?.invalid && input=="new"){
      this.inputColorPass2='pink';
    }else if(this.getValue('new')?.valid && input=="new"){
      this.inputColorPass2='lightgreen';
    }

    if(this.getValue('renew')?.invalid && input=="renew"){
      this.inputColorPass3='pink';
    }else if(this.getValue('renew')?.valid && input=="renew"){
      this.inputColorPass3='lightgreen';
    }

    if(this.firstContrasena!=this.secondContrasena){
      this.inputColorPass3='yellow';
      this.inputColorPass2='yellow';
    }else if(this.firstContrasena==this.secondContrasena){
      this.inputColorPass3='lightgreen';
      this.inputColorPass2='lightgreen';
    }
  }
}
