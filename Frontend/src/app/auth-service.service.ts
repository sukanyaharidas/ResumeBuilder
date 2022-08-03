import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 model: any = {};
 
 model2: any = {};

  constructor(public http:HttpClient) { }

  userSignup(users:any){
    console.log(users);
    return this.http.post<any>('http://localhost:3000/signup', {users});
    }


  login(authData:any){
    console.log(authData);
    return this.http.post<any>('http://localhost:3000/login',{authData});
  
    }
    getuserdata(id:any){
      return this.http.get('http://localhost:3000' +id)
    }

    adminLogin(data:any){
      console.log(data);
      return this.http.post<any>('http://localhost:3000/login_admin', {data});
    }


    loggedIn(){
     
      return !!localStorage.getItem('token');
    }

    getToken(){
      return  localStorage.getItem('token');
    }

}
