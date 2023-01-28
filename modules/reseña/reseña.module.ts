import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reseña } from 'src/app/interfaces/reseña';
import { NgFor } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReseñaModule {
  static reseñas:Reseña[]=[
    {id:1,nombre:'manolo',apellido:'pancardo',email:'manolopancardo@gmail.com',mensaje:'cuando traen nuevos modelos?'},
    {id:2,nombre:'juan',apellido:'Zurita',email:'jazminpinto@gmail.com',mensaje:'bonitos diseños, pero deberian agregar mas :3'},
    {id:3,nombre:'Austin',apellido:'Salguero',email:'pedroZola2000@gmailcom',mensaje:'bonitos diseños, expondran mas ahora que viene el carnaval?'},
    {id:4,nombre:'Milton',apellido:'Elizalde',email:'miltonelizalde@gmail.com',mensaje:'traigan mas ropa para hombres plis'},
    {id:5,nombre:'betsi',apellido:'sicha',email:'betsisicha@gmail.com',mensaje:'tienen local en fisico? estaria bueno, igual tienen excelentes productos'},
    {id:6,nombre:'ruth',apellido:'Quito',email:'ruthquito@gmail.com',mensaje:'nada que refutar, gran servicio'},
    {id:7,nombre:'carla',apellido:'arias',email:'carlaarias@gmail.com',mensaje:'espero con ansias nuevos modelos'},
    {id:8,nombre:'rosa',apellido:'santacruz',email:'rosasantac@gmail.com',mensaje:'buen sitio y buena ropa'},
    {id:9,nombre:'valentina',apellido:'zuñiga',email:'vzuñiga2000@gmail.com',mensaje:'tienen bonitos diseños de todas las tallas'},
    {id:10,nombre:'gerard',apellido:'pique',email:'gerardpique@gmail.com',mensaje:'llego en twinkly y cargo un casio'},
  ]
 }
