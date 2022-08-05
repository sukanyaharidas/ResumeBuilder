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
    return this.http.post<any>('http://localhost:3000/api/signup', {users});
    }


  login(authData:any){
    console.log(authData);
    return this.http.post<any>('http://localhost:3000/api/login',{authData});
  
    }
    getuserdata(id:any){
      return this.http.get('http://localhost:3000' +id)
    }

    adminLogin(data:any){
      console.log(data);
      return this.http.post<any>('http://localhost:3000/api/login_admin', {data});
    }


    loggedIn(){
     
      return !!localStorage.getItem('token');
    }

    getToken(){
      return  localStorage.getItem('token');
    }

    getusercred(){
      return this.http.get('http://localhost:3000/api/displayusercred')
    }
    deleteusercred(id:any){
      return this.http.delete('http://localhost:3000/api/deleteusercred/'+id)
    }

    mailsend(mail:any){
return this.http.post('http://localhost:3000/api/sendmail',{mail})
    }

}
