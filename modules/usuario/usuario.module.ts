import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from 'src/app/interfaces/usuario';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { 

  static usuarios:Usuario[]=[
    {'user':'boomer','password':'Canasta_2#','nombre':'Boomer','direccion':'Calle 1','postal':'12345','nacimiento':'1980-01-01'},
  ]

}
