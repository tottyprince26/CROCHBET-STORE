import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListarProductoComponent } from './pages/producto/listar-producto/listar-producto.component';
import { EditarProductoComponent } from './pages/producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './pages/producto/eliminar-producto/eliminar-producto.component';
import { InsertarProductoComponent } from './pages/producto/insertar-producto/insertar-producto.component';

import { ListarClienteComponent } from './pages/cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './pages/cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './pages/cliente/eliminar-cliente/eliminar-cliente.component';
import { InsertarClienteComponent } from './pages/cliente/insertar-cliente/insertar-cliente.component';
import { ListarProveedorComponent } from './pages/proveedor/listar-proveedor/listar-proveedor.component';
import { EditarProveedorComponent } from './pages/proveedor/editar-proveedor/editar-proveedor.component';
import { EliminarProveedorComponent } from './pages/proveedor/eliminar-proveedor/eliminar-proveedor.component';
import { InsertarProveedorComponent } from './pages/proveedor/insertar-proveedor/insertar-proveedor.component';

import { ListarReseniaComponent } from './pages/resenia/listar-resenia/listar-resenia.component';
import { EditarReseniaComponent } from './pages/resenia/editar-resenia/editar-resenia.component';
import { EliminarReseniaComponent } from './pages/resenia/eliminar-resenia/eliminar-resenia.component';
import { InsertarReseniaComponent } from './pages/resenia/insertar-resenia/insertar-resenia.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { MatTableModule } from '@angular/material/table';
import { ChatComponent } from './components/chat/chat.component';
import { PasarelaPagoComponent } from './components/pasarela-pago/pasarela-pago.component';
import { NgxSpinner } from 'ngx-spinner';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CambiarContrasenaComponent } from './components/cambiar-contrasena/cambiar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    PaginaInicioComponent,
    InsertarProductoComponent,
    ListarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    InsertarClienteComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    InsertarProveedorComponent,
    ListarProveedorComponent,
    EditarProveedorComponent,
    EliminarProveedorComponent,
    InsertarReseniaComponent,
    ListarReseniaComponent,
    EditarReseniaComponent,
    EliminarReseniaComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent,
    CarritoComponent,
    BusquedaComponent,
    AdministracionComponent,
    ChatComponent,
    PasarelaPagoComponent,
    CambiarContrasenaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    NgxSpinnerModule,
    NgxPayPalModule,
    NgbModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
