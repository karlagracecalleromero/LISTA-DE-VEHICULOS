import { VehiculoService } from './../../servicios/vehiculo.service';
import { Vehiculo } from './../../Utilitarios/modelos/vehiculos';
import { Component , OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pag-vehiculo',
  templateUrl: './pag-vehiculo.component.html',
  styleUrl: './pag-vehiculo.component.css'
})
export class PagVehiculoComponent  implements OnInit{


  vehiculo?: Vehiculo ={
    codigo:"",



  }
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService
    )

  {

  }
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.vehiculoService.getVehiculo ( params['codigo']).subscribe(data =>{
        this.vehiculo =data.data})


    })
  }

}




