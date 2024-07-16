import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient)

  createUser(data:object){
    return this.http.post(`https://jmbackend.azurewebsites.net/User/createUser`, data);
  }

  loginUser(data:object){
    return this.http.post(`https://jmbackend.azurewebsites.net/User/login`, data);
  }

  recoverPassword(data:object, iduser:any){
    return this.http.post(`https://jmbackend.azurewebsites.net/User/recoverPassword/${iduser}`, data);
  }

  emailRecoverPassword(data:object){
    return this.http.post(`https://jmbackend.azurewebsites.net/User/emailRecoverPassword`, data);
  }
}
