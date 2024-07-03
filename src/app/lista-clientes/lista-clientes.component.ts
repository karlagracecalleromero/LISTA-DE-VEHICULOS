import { ClienteServise } from './../servicios/cliente.servise';
import { Component , Input , OnInit} from '@angular/core';



@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})


export class ListaClientesComponent implements OnInit{

  @Input()
  listaClientes:Array<any> =[];

   constructor(
   private ClienteServise : ClienteServise,
   )
   {

   }

   ngOnInit(){
    this.getClientes()
   }

   getClientes(){
    this.ClienteServise.getClientes().subscribe((data) =>{
      this.listaClientes = data.data
    })
   }

   }


