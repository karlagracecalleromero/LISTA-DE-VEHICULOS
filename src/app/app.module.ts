import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './paginas/PaginaModule';
import { PagVehiculoComponent } from './paginas/pag-vehiculo/pag-vehiculo.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarAutoComponent } from './paginas/editar-auto/editar-auto.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';






@NgModule({
  declarations: [
    AppComponent,
    PagVehiculoComponent,
    NotFoundComponent,
    EditarAutoComponent,
    ListaClientesComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PaginaModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptorService,
      multi:true
    }

  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
