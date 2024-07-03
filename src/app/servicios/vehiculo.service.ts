import { Injectable } from '@angular/core';
import { Vehiculo } from '../Utilitarios/modelos/vehiculos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // Agrega esta línea

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  baseUrl: string = 'https://epico.gob.ec/vehiculo/public/api/';
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json' })}


  constructor( private http: HttpClient ) { }


  getVehiculos(filtro?:string,rows?:number,page?:number):Observable<Respuesta> {
    let body =new HttpParams();
    body = filtro ? body.set('filtro',filtro) :body;
    body = rows ? body.set('rows',rows) :body;
    body = page ? body.set('page',page) :body;
   //  return this.http.get<Respuesta>(this.baseUrl + "vehiculos/",{params: body}).pipe(map(respuesta => respuesta.data))
     return this.http.get<Respuesta>(this.baseUrl + "vehiculos/",{params: body})
   }


  addVehiculo(vehiculo :Vehiculo){
    return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo );
    };


  getVehiculo(codigo:string) : Observable<Respuesta>{
  return this.http.get<Respuesta>(this.baseUrl + 'vehiculo/'+ codigo);
  }

  updateAuto(auto:string,codigo:string){
    return this.http.put<Respuesta>(this.baseUrl+'vehiculo/'+codigo, auto, this.httpOptions)
  }
  deleteAuto(codigo:string){
    return this.http.delete<Respuesta>(this.baseUrl+ 'vehiculo/'+codigo);
  }






  // getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
  //   const escucha : Observable<Array<Vehiculo>>= new Observable(escuchando =>{
  //     let lista = this.listaVehiculos.filter(elem => elem.marca?.toLowerCase().includes(filtro.toLowerCase()))
  //     escuchando.next(lista);
  //   });

  //   return escucha;
  // }




//   getVehiculo(codigo:string):Observable<Vehiculo | undefined> {
//     const escucha : Observable <Vehiculo|undefined>= new Observable(escuchando =>{
//       setTimeout(()=>{
//         let vehiculo = this.listaVehiculos.find (ele => ele.codigo == codigo)
//         escuchando.next(vehiculo); // next, error , complete
//       },100)

//     });
//         return escucha
//   }



//   addvehiculo(vehiculo: Vehiculo){
//     this.listaVehiculos.push(vehiculo);
//   }




//   private  listaVehiculos: Array<Vehiculo> =
//   [
//     {"codigo":"A001", "marca":"Toyota", "modelo":"Corolla", "color":"Blanco", "foto":null, "anio":2023, "calificacion":4, "kilometraje": 10000, "precio": 25000},
//     {"codigo":"A002", "marca":"Toyota", "modelo":"Camry", "color":"Negro", "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlS1VMjmA_FGve5Ln5z-8orD8jIisVXm9wg&s", "anio":2022, "calificacion":4, "kilometraje": 12000, "precio": 27000},
//     {"codigo":"A003", "marca":"Honda", "modelo":"Civic", "color":"Rojo", "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHS1N01KDBRG2AK6xDRNppNKP1ZhPOnMvGQ&s", "anio":2022, "calificacion":5, "kilometraje": 15000, "precio": 22000},
//     {"codigo":"A004", "marca":"Honda", "modelo":"Accord", "color":"Blanco", "foto":"https://img.remediosdigitales.com/1dd87c/honda-accord-2018-mexico_/1366_2000.jpg", "anio":2021, "calificacion":3, "kilometraje": 20000, "precio": 30000},
//     {"codigo":"A006", "marca":"Ford", "modelo":"Explorer", "color":"Gris", "foto":null, "anio":2022, "calificacion":4, "kilometraje": 15000, "precio": 28000},
//     {"codigo":"A007", "marca":"Chevrolet", "modelo":"Camaro", "color":"Amarillo", "foto":"https://i.pinimg.com/736x/e0/3c/49/e03c49393e9b59b52a260a85c7025321.jpg", "anio":2020, "calificacion":4, "kilometraje": 25000, "precio": 28000},
//     {"codigo":"A008", "marca":"Chevrolet", "modelo":"Tahoe", "color":"Negro", "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5oNnhJo2GY1XPG73na5-yOmqetTpF8Br4A&s", "anio":2021, "calificacion":5, "kilometraje": 20000, "precio": 35000},
//     {"codigo":"A009", "marca":"Nissan", "modelo":"Altima", "color":"Gris", "foto":null, "anio":2024, "calificacion":2, "kilometraje": 8000, "precio": 27000},
//     {"codigo":"A010", "marca":"Nissan", "modelo":"Maxima", "color":"Azul", "foto":"https://wieck-nissanao-production.s3.amazonaws.com/photos/ebc8585cef83f79d50300b50bb763aaeb425875d/thumbnail-364x204.jpg", "anio":2023, "calificacion":4, "kilometraje": 12000, "precio": 30000},
//     {"codigo":"A011", "marca":"Mazda", "modelo":"CX-5", "color":"Rojo", "foto":null, "anio":2023, "calificacion":4, "kilometraje": 12000, "precio": 29000},
//     {"codigo":"A012", "marca":"Mazda", "modelo":"Mazda3", "color":"Blanco", "foto":null, "anio":2022, "calificacion":3, "kilometraje": 15000, "precio": 22000},

//   ];
// }

}



export interface Respuesta{
  codigo: string;
  mensaje:string;
  data:Array<Vehiculo>|Vehiculo|any;
  rows:number;
  pages:number;
  records:number;
  page:number;

  }
