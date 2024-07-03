
import { RouterModule } from '@angular/router';
import { UtilitariosModule } from './../Utilitarios/UtilitariosModule';

import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagVehiculoRegistroComponent } from './pag-vehiculo-registro/pag-vehiculo-registro.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilitariosModule,
    RouterModule,
    ReactiveFormsModule
  ],

  declarations:[
    PagListaVehiculosComponent,
    PagVehiculoRegistroComponent,
    RegistroUsuarioComponent
  ],


  exports:[
    PagListaVehiculosComponent,
    PagVehiculoRegistroComponent,
    RegistroUsuarioComponent,
    UtilitariosModule,
  ],

})
export class PaginaModule{

}
