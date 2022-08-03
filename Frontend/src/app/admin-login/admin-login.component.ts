import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  User = {username : '',
          password : ''
  };

  form:FormGroup|any;
  activeModal: any;
  modalService: any;
  exampleModal: any;
  flag:boolean=false;
  role:any='admin';
  
  constructor(private _auth:AuthServiceService,private _router:Router, ) {}
  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    },
      )
  }
 
  loginAdmin(){
    this._auth.adminLogin(this.User).subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('role', this.role);
        this._router.navigate(['\home_user'])
      },
      (error)=>{
        this.flag=true;
      }
    )
    }    
}