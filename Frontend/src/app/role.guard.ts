import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public router:Router){}
  canActivate(): boolean {

    if(localStorage.getItem('role') === 'admin'){
      return true;
       }
    else{
        this.router.navigate(['\login'])
       return false;
     }
  
}

}
