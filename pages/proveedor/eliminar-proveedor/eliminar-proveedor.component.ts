import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProveedorModule } from 'src/app/modules/proveedor/proveedor.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarProveedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number){
      this.id=data;
      console.log(this.id);
    }


  proveedorObject=ProveedorModule.proveedores;

  ngOnInit(): void {
    
  }

  eliminarProveedor(){
    for (let index = 0; index < this.proveedorObject.length; index++) {
      if(this.proveedorObject[index].id==this.id){
        this.proveedorObject.splice(index,1);
        Swal.fire({
          title: 'ELIMINADO EXITOSAMENTE',
          text: 'Usted ha eliminado el proveedor con id : '+this.id,
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
}
