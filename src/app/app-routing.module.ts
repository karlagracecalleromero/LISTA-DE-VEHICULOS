import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagVehiculoComponent } from './paginas/pag-vehiculo/pag-vehiculo.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { PagVehiculoRegistroComponent } from './paginas/pag-vehiculo-registro/pag-vehiculo-registro.component';
import { RegistroUsuarioComponent } from './paginas/registro-usuario/registro-usuario.component';
import { EditarAutoComponent } from './paginas/editar-auto/editar-auto.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent
  },
  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "registro",
    component: RegistroUsuarioComponent,
    pathMatch: "full"
  },
  {
    path:'vehiculos/editar/:codigo',
    component: EditarAutoComponent,
    pathMatch: "full"
  },
  {
    path:'clientes',
    component: ListaClientesComponent,
    pathMatch: "full"
  },
  {
    path:'CrearCliente',
    component: RegistroUsuarioComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
