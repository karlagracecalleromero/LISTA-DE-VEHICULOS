import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../Utilitarios/modelos/vehiculos';
import { VehiculoService } from '../../servicios/vehiculo.service';
import Swal from 'sweetalert2';  //MODELO PARA MENSAJES
@Component({
  selector: 'app-pag-vehiculo-registro',
  templateUrl: './pag-vehiculo-registro.component.html',
  styleUrl: './pag-vehiculo-registro.component.css'
})
export class PagVehiculoRegistroComponent implements OnInit {


  formulario: FormGroup;


  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder : FormBuilder
  ){

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "codigo_confirm":[],
      "marca": ['', Validators.required],
      "modelo": ['', Validators.required],
      "anio": ['', Validators.required],
      "color": ['', Validators.required],
      "kilometraje": ['', Validators.required],
      "precio": ['', Validators.required],
      "calificacion": ['', Validators.required]

    },
    {
      //VALIDADORES DEL FROMULARIO
      validators: validarCodigoComparativo()
    }

    )
  }
  ngOnInit() {

  }
  guardar(){
    console.log(this.formulario);

    if (this.formulario.valid) {
      this.vehiculoService.addVehiculo({ ...this.formulario.value }).subscribe(
        respuesta => {
          console.log(respuesta);

          if (respuesta.codigo == '1') {
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo Registrado con Éxito",
              icon: "success"
            });
            this.formulario.reset()
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

export function validadorCodigo(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors| null => {
    console.log(control)
    const codigoV = /^[A-Z]\d{3}$/
    let value =control.value
    if (codigoV.test(value))
      {
        return null;
      }
      return {'codigoValidate': true}

  }
}


export function validarCodigoComparativo(){
  return(formulario: FormGroup): ValidationErrors|null =>{
    let valor = formulario.controls['codigo'].value
    let valor2 = formulario.controls['codigo_confirm'].value
    if (valor === valor2){
      return null;
    }
    return{'codigo_comparativo': true}

  }
}
