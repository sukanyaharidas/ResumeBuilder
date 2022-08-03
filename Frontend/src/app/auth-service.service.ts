import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 Adminrole=false;
 Userrole=false;
  constructor(public http:HttpClient) { }

  userSignup(users:any){
    console.log(users);
    return this.http.post<any>('http://localhost:4000/signup', {users});
    }


  login(authData:any){
    console.log(authData);
    return this.http.post<any>('http://localhost:4000/login',{authData});
  
    }
    getuserdata(id:any){
      return this.http.get('http://localhost:3000' +id)
    }

    adminLogin(data:any){
      console.log(data);
      return this.http.post<any>('http://localhost:4000/login_admin', {data});
    }


    loggedIn(){
      return !!localStorage.getItem('token');
    }

    getToken(){
      return  localStorage.getItem('token');
    }


    getAdminrole(){
      this.Adminrole=true;
      this.Userrole=false;
    }
    getUserrole(){
      this.Userrole=true;
      this.Adminrole=false;
    }

    getusercred(){
      return this.http.get('http://localhost:4000/api/displayusercred')
    }
    deleteusercred(id:any){
      return this.http.delete('http://localhost:4000/api/deleteusercred/'+id)
    }

    getadmindata(){
      return this.http.get('http://localhost:4000/getadmindata')
    }
    updateadminmail(admindata:any){
      console.log(admindata);
      
      return this.http.put('http://localhost:4000/updateadminmail',admindata)
      .subscribe(adminmail=>{
        console.log(admindata);
        
      })
    }
}
