import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let  token = localStorage.getItem("token");
    if(token)
{
  let clonedRequst = request.clone({
    headers:request.headers.append("token",token)
  })
  return next.handle(clonedRequst);
}

return next.handle(request);

  }
}
