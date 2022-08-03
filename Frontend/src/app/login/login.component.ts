import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {username : '',
          password : ''
  };

  form:FormGroup|any;
  activeModal: any;
  modalService: any;
  exampleModal: any;

  flag:boolean=false;
  role:any='user';

  constructor(private _auth:AuthServiceService,private _router:Router, ) {}
  ngOnInit() {
    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    },
      )
  }
 

  loginUser(){
    this._auth.login(this.User).subscribe(
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
