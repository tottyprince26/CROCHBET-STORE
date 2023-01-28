import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/interfaces/proveedor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProveedorModule { 

static proveedores:Proveedor[]=[

  {id:1, nombre:"Distribuidora Lanas Rey", ruc:"1234856930001", telefono:"0987284618", correo:"lanasrey@gmail.com", direccion:"Cdla. Girasoles mz. 124 vll. 4"},
  {id:2, nombre:"Distribuidora Lanas Elsi", ruc:"8739184763001", telefono:"0987391847", correo:"lanaselsi@gmail.com", direccion:"Cdla. Jardines del salado mz. 362 vll. 2"},
  {id:3, nombre:"Distribuidora Lanas Lanuda", ruc:"6492682733001", telefono:"09649268273", correo:"lanaslanuda@gmail.com", direccion:"Alborada quinta etapa"},
  {id:4, nombre:"Distribuidora Lanas Colores", ruc:"8394758204001", telefono:"0983947582", correo:"lanascolores@gmail.com", direccion:"Cdla. El condor mz.45 vll.1"},
  {id:5, nombre:"Distribuidora Lanas Felicidad", ruc:"9566637482001", telefono:"0989566637", correo:"lanasfelicidad@gmail.com", direccion:"34 y portete "},
  {id:6, nombre:"Distribuidora Lanas Silvia", ruc:"7384729474001", telefono:"0973847294", correo:"lanassilvia@gmail.com", direccion:"Cdla. Abel gilbert mz.77 vll. 5"},
  {id:7, nombre:"Distribuidora Lanas Estrellas del Mar", ruc:"3746662849001", telefono:"0937466628", correo:"lanasestrellasdelmar@gmail.com", direccion:"Samanes 5"},
  {id:8, nombre:"Distribuidora Lanas Chalaquita", ruc:"8392813339001", telefono:"0983928133", correo:"lanaschalaquita@gmail.com", direccion:"Sauces 8"},
  {id:9, nombre:"Distribuidora Lanas Silvia", ruc:"8374917348001", telefono:"0983749173", correo:"lanassilvia@gmail.com", direccion:"Cdla. Renacer mz. 24 vll. 2"},
  {id:10, nombre:"Distribuidora Lanas Clasica", ruc:"7482637418001", telefono:"0974826374", correo:"lanasclasica@gmail.com", direccion:"Francisco segura y la 38"}

]
  filtrpoTitulo:Proveedor[] = [];
  constructor(){
    console.log('ProveedorModule');
  }
}