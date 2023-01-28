import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioModule } from 'src/app/modules/usuario/usuario.module';
import Swal from 'sweetalert2';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  formReactive:FormGroup;
  
  constructor(private formBuilder:FormBuilder,private router:Router,
    private route:ActivatedRoute,
    //private productsService:ProductsService,
    public dialog:MatDialog) { 
      this.formReactive=this.formBuilder.group(
        {
          nombre:['',[Validators.required]],//Validators.pattern("[A-Za-z]")
          contrasena:['',[Validators.required]],
          direccion:['',[Validators.required]],
          postal:['',[Validators.required]],
          nacimiento:['',[Validators.required]]     
        }
      )

    }


  usuario:string= '';
  nombre:string= '';
  contrasena:string= '';
  direccion:string= '';
  postal:string= '';
  nacimiento:string= '';
  usuarios:Usuario[]=UsuarioModule.usuarios;
  ngOnInit() {
    this.usuario=this.route.snapshot.params['usuario'];
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].user.toLowerCase()==this.usuario.toLowerCase()){
        this.nombre=this.usuarios[i].nombre;
        this.contrasena=this.usuarios[i].password;
        this.direccion=this.usuarios[i].direccion;
        this.postal=this.usuarios[i].postal;
        this.nacimiento=this.usuarios[i].nacimiento;
        //transformar fecha de nacimiento a tipo de dato Date
      }
    } 
  }


  guardarCambios(){
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].user.toLowerCase()==this.usuario.toLowerCase()){
        this.usuarios[i].nombre=this.nombre;
        this.usuarios[i].direccion=this.direccion;
        this.usuarios[i].postal=this.postal;
        this.usuarios[i].nacimiento=this.nacimiento;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cambios guardados',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } 
  }

  cambiarContrasena(){
    //abrir modal para cambiar contraseña (componente cambiarContrasena)
    this.dialog.open(CambiarContrasenaComponent,{data:this.contrasena});
  }
}
