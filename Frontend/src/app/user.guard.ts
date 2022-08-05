import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(public router:Router){}
  canActivate(): boolean {

    if(localStorage.getItem('role') === 'user'){
      return true;
       }
    else{
        this.router.navigate(['\login'])
       return false;
     }
  
}
}
