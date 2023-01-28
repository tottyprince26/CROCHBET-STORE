import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InsertarReseniaComponent } from './pages/resenia/insertar-resenia/insertar-resenia.component';
 
const routes: Routes = [
  {path:"",component:InicioSesionComponent},
  {path:"inicio/:usuario/:rol",component:PaginaInicioComponent,pathMatch:'full'},
  {path:"busqueda/:usuario/:filtro/:rol/:tipo",component:BusquedaComponent,pathMatch:'full'},
  {path:"perfil/:usuario/:rol",component:PerfilComponent,pathMatch:'full'},
  {path:"insertarResenia/:usuario/:rol",component:InsertarReseniaComponent,pathMatch:'full'},
  {path:"administracion/:usuario/:rol",component:AdministracionComponent,pathMatch:'full'},
  {path:"administracion/:usuario/:rol/:modulo",component:AdministracionComponent,pathMatch:'full'},
  {path:"pasarela",component:PasarelaPagoComponent},
  {path:"resena/:usuario/:rol",component:InsertarReseniaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
