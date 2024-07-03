
import { VehiculoService } from './../../servicios/vehiculo.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';  //MODELO PARA MENSAJES

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen=true;
  //filtro: string =" ";
  //public _filtro: string="";
  public rows: number = 10;
  public page: number = 1
  public filtro: string ="";


  // get filtro(){
  //   return this._filtro
  // }

  // set filtro(data:string){
  //   this._filtro=data;
  //   this.consultaVehiculo()
  // }



  @Input()
  valor:string='';
  listaVehiculos:Array<any> =[];





  constructor(
    private vehiculoService : VehiculoService,


  ) {


   }

  ngOnInit() {
   console.log("Ingreso a ejecutarse")
   this.getAutos()






  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  getAutos() {
    this.vehiculoService.getVehiculos().subscribe((data) => {
     this.listaVehiculos = data.data
    })
  }
  consultaVehiculo()
  {
    this.vehiculoService.getVehiculos(this.filtro).subscribe(data =>{
        this.listaVehiculos = data.data; })

  }
  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro, this.rows , this.page).subscribe(data =>{
        this.listaVehiculos = data.data;
        this.paginar(data.pages)
      })

  }

  recepcion(dato:number){
    console.log('Dato:',dato )

  }

  deleteVehiculo(codigo: string) {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
      icon: "question"
      }).then((result) => {
      if (result.isConfirmed) {
        this.vehiculoService.deleteAuto(codigo).subscribe((data) => {
            Swal.fire("Registro Eliminado con Éxito!", "", "success");
            this.consultaVehiculos();
        });
      } else if (result.isDenied) {
        Swal.fire("No eliminado!", "", "info");
      }
    });
  }



cambiarPag(pagina: number) {
  if (pagina >= 1 && pagina <= this.listaPags.length) {
     this.page = pagina;
     this.consultaVehiculos();
  }
}

listaPags: Array<number> = [];
paginar(pag: number) {
  this.listaPags = [];
  for (let i = 1; i <= pag; i++) {
    this.listaPags.push(i)
  }
}

}
