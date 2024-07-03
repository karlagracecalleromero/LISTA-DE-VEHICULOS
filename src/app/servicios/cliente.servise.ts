import { Observable } from 'rxjs';
import { Cliente } from './../Utilitarios/modelos/cliente';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; // Agrega esta línea
import { Respuesta } from './vehiculo.service';

@Injectable({
  providedIn: 'root'
})

export class ClienteServise{
  baseUrl: string = 'https://epico.gob.ec/vehiculo/public/api/';
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json' })}


  constructor( private http: HttpClient ) { }

  addCliente(cliente :Cliente):Observable<Respuesta>{
    return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente );
    };

    getClientes(filtro?:string,rows?:number,page?:number):Observable<Respuesta> {
      let body =new HttpParams();
      body = filtro ? body.set('filtro',filtro) :body;
      body = rows ? body.set('rows',rows) :body;
      body = page ? body.set('page',page) :body;
     //  return this.http.get<Respuesta>(this.baseUrl + "vehiculos/",{params: body}).pipe(map(respuesta => respuesta.data))
       return this.http.get<Respuesta>(this.baseUrl + "clientes/",{params: body})
     }







}
