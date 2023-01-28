import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteModule } from 'src/app/modules/cliente/cliente.module';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent {
  constructor(public dialog:MatDialog){}
  Actualstatus="agregar";

  displayedColumns: string[] = ['id', 'nombre', 'apellido','ciudad', 'direccion', 'telefono', 'correo', 'actions'];

  dataSource:any=[];

  clientesObject=ClienteModule.clientes;

  ngOnInit(): void {
    this.dataSource=new MatTableDataSource<Cliente>(this.clientesObject as Cliente[]);
  }

  editarCliente(idCliente:string, nombre:string, apellido:number, ciudad:string, direccion:string, telefono:string, correo:string){
    this.dialog.open(EditarClienteComponent, {
      data: {
              'id':idCliente,
              'nombre':nombre,
              'apellido':apellido,
              'ciudad':ciudad,
              'direccion': direccion,
              'telefono': telefono,
              'correo': correo
            }
    });
}

eliminarCliente(idCliente:string){
  this.dialog.open(EliminarClienteComponent,{
    data: <number><unknown>idCliente
  });

  this.dialog.afterAllClosed.subscribe(result=>{
    this.clientesObject=ClienteModule.clientes;
    this.dataSource=new MatTableDataSource<Cliente>(this.clientesObject as Cliente[]);
  });
}


estado(estatus:string){
  this.Actualstatus=estatus;
}


filtrar(event: Event) {
  const filtro = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filtro.trim().toLowerCase();
} 

}
