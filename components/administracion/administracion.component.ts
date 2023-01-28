import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductoModule } from 'src/app/modules/producto/producto.module';


@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }




  valorCambio(value: string){
    console.log("nuevo valor:" + value)
 }


 
  actualTag='administracion'
  mostrarComponente(tag:string){
    this.actualTag=tag;
  }

}
