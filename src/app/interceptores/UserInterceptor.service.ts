import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()



export class UserInterceptorService  implements HttpInterceptor{

usuario: string = "karla.calle";
clave:string = "user-request";

constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>
  {
  let clone = req.clone({
    headers: req.headers.append(this.clave,this.usuario)});
  return next.handle(clone)
   }




}
