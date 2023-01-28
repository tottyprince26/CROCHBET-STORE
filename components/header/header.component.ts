import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router,
    private route:ActivatedRoute) { }

  rol='cliente';

  filtro: string = '';

  buscar(){

    this.router.navigate(['busqueda',this.user,this.filtro,this.rol,'titulo']);
    console.log(this.filtro);

  }

  buscarTodos(){
    this.router.navigate(['busqueda',this.user,'todos',this.rol,'titulo']);
    console.log('todos');
  }

  @Input()
  actualUser!: string;

  user: string = '';

  accion='Cerrar Sesion'


  ngOnInit(): void {
    
    let usuario=this.route.snapshot.params['usuario'];
    console.log('usuario: '+usuario);
    
    if(this.actualUser == null && usuario != null){
      this.user = usuario;
    }
    else{
      this.user= this.actualUser;
    }
    
    this.rol=this.route.snapshot.params['rol'];
    
    if(this.rol=='invitado'){
      this.accion='Salir';
    }
  }


  cerrarSesion(){
    try{
      CarritoModule.eliminarTodoDelCarrito();
      localStorage.removeItem('usuario');
      localStorage.removeItem('rol');
    }catch(error){
      console.log(error);
    }
    this.router.navigate(['']);
  }

  verPerfil(){
    if(this.rol!='invitado'){
      this.router.navigate(['perfil',this.user,this.rol]);
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Debe iniciar sesion para acceder a su perfil',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  verProductos(){
    this.router.navigate(['inicio',this.user,this.rol]);
  }

  verResenas(){
    this.router.navigate(['insertarResenia',this.user,this.rol]);
  }

  verAdministracion(){
    // opcion deshabilitada por el momento
   /* Swal.fire({
      title: 'Opcion deshabilitada',
      text: 'Esta opcion se habilitara en un futuro',
      icon: 'warning',
      confirmButtonText: 'OK'
    })*/
    this.router.navigate(['administracion',this.user,'admin','administracion']);
  }
}
