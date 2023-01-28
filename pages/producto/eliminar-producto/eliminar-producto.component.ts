import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoModule } from 'src/app/modules/producto/producto.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent {
  id=0;

  constructor(public dialogRef: MatDialogRef<EliminarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number){
      this.id=data;
      console.log(this.id);
    }


  productObject=ProductoModule.productos;

  ngOnInit(): void {
    
  }

  eliminarProducto(){
    for (let index = 0; index < this.productObject.length; index++) {
      if(this.productObject[index].id==this.id){
        this.productObject.splice(index,1);
        Swal.fire({
          title: 'ELIMINADO EXITOSAMENTE',
          text: 'Usted ha eliminado el cliente con id : '+this.id,
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
