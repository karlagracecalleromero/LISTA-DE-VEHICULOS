import { Vehiculo } from './../../Utilitarios/modelos/vehiculos';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from './../../servicios/vehiculo.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrl: './editar-auto.component.css'
})
export class EditarAutoComponent implements OnInit {
  formulario: FormGroup
  vehiculo?: any= {};

  constructor(
   private VehiculoService: VehiculoService,
   private fb: FormBuilder,
   private activeRoute:ActivatedRoute
 ) {
   this.formulario = this.fb.group({
     "codigo": [''],
    "marca": [''],
     "modelo": [''],
      "foto": [''],
      "anio": [''],
     "kilometraje": [],
     "precio": [],
     "calificacion": [''],

   })

 }
 id:any
  ngOnInit(): void {
   this.activeRoute.params.subscribe(params =>{
     console.log(params['codigo']);
     this.id = params['codigo']

     this.VehiculoService.getVehiculo(params['codigo']).subscribe(data =>{
       this.vehiculo= data.data

       this.formulario = this.fb.group({
         "codigo": [[this.vehiculo?.codigo], Validators.required],
        "marca": [this.vehiculo?.marca , Validators.required] ,
         "modelo": [this.vehiculo?.modelo, Validators.required],
          "foto": [this.vehiculo?.foto],
          "anio": [this.vehiculo?.anio, Validators.required],
         "kilometraje": [this.vehiculo?.kilometraje , Validators.required],
         "precio": [this.vehiculo?.precio, Validators.required],
         "calificacion": [this.vehiculo?.calificacion, Validators.required],

       })

     })
   })
   }

 guardarEdit() {
   if (this.formulario.valid) {
     this.VehiculoService.updateAuto({ ...this.formulario.value },this.id).subscribe(
     respuesta => {
       console.log(respuesta);

       if (respuesta.codigo == '1') {
         Swal.fire({
           title: "Mensaje",
           text: "Actualización Exitosa",
           icon: "success"
         });
         this.formulario.disable()
       }
     }
   );
 } else {
 console.log(this.formulario);

   Swal.fire({
     title: "Mensaje",
     text: "Faltan llenar campos",
     icon: "error"
   });
 }
 }


 }
