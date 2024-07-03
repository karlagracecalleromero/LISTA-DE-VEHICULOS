import { NgModule } from "@angular/core";
import { AespacioPipe } from "./pipes/Aespacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[

    AespacioPipe,
    CalificacionComponent
  ],
  imports:[
    CommonModule

  ],
  exports:[
    AespacioPipe,
    CalificacionComponent

  ]

})

export class UtilitariosModule {

}
