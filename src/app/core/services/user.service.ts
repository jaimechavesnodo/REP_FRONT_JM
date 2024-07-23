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

  saveProductsCart(data:object){
    return this.http.post(`https://jmbackend.azurewebsites.net/Shopping/saveProductsCart`, data);
  }

  getCartData(iduser:any){
    return this.http.get(`https://jmbackend.azurewebsites.net/Shopping/getCartData/${iduser}`);
  }

  deleteProduct(iduser:any, idproduct:any){
    return this.http.delete(`https://jmbackend.azurewebsites.net/Shopping/deleteProduct/${iduser}/${idproduct}`);
  }

  CreateRedeemtion(data:object){
    return this.http.post(`https://jmbackend.azurewebsites.net/Redemptions/CreateRedeemtion`, data);
  }

  getPointClient(iduser:any){
    return this.http.get(`https://jmbackend.azurewebsites.net/PointClient/getPointClient/${iduser}`);
  }

  getTotalSummary(iduser:any){
    return this.http.get(`https://jmbackend.azurewebsites.net/Shopping/totalSummary/${iduser}`);
  }

  getRedemptionsCustomer(iduser:any, name:any, date:any, page:any, limit:any){
    return this.http.get(`https://jmbackend.azurewebsites.net/Redemptions/getRedemptionsCustomer/${iduser}?orderName=${name}&redemptionDate=${date}&page=${page}&limit=${limit}`);
  }

}
