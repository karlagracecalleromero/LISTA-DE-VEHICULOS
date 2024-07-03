import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ClienteServise } from '../../servicios/cliente.servise';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent implements OnInit {


  formulario: FormGroup;



    constructor(
      private clienteServise : ClienteServise,
      private FormBuilder :FormBuilder
    ) {
      this.formulario =this.FormBuilder.group({
      "nombre": ['', Validators.required],
      "apellido": ['', Validators.required],
      "password": [''],
      "telefono": [''],
      "email": [''],

      })
    }

    ngOnInit() {
    }



    registrar(){
      console.log(this.formulario);

      if (this.formulario.valid) {
        this.clienteServise.addCliente({ ...this.formulario.value }).subscribe(
          respuesta => {
            console.log(respuesta);

            if (respuesta.codigo == '1') {
              Swal.fire({
                title: "Mensaje",
                text: "Cliente Registrado con Éxito",
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

    contactar: boolean = false;
    toggleContact(event: any) {
      this.contactar = event.target.checked;
      if (this.contactar) {
        this.formulario.get('telefono')?.enable();
        this.formulario.get('email')?.enable();
      } else {
        this.formulario.get('telefono')?.disable();
        this.formulario.get('email')?.disable();
      }
    }


  }
