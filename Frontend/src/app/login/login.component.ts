import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


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
    //  this._auth.model2.isUser = Cookie.get('isUser');
    //  console.log(this._auth.model2.isUser);

    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)S
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
  }
 

  loginUser(){
    this._auth.login(this.User).subscribe(
      res=>{
        // this._auth.setrole(this.role);

        // Cookie.set('isUser', 'true');
        

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
