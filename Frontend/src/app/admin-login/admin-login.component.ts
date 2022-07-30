import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';



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
    // this._auth.model.isAdmin = Cookie.get('isAdmin');
    // console.log(this._auth.model.isAdmin);

    this.form=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
  }
 

  loginAdmin(){

    this._auth.adminLogin(this.User).subscribe(
      res=>{
        // this._auth.setrole(this.role);
        // Cookie.set('isAdmin', 'true');


        localStorage.setItem('token',res.token);
        localStorage.setItem('role', this.role);
        this._router.navigate(['\home_user'])
      },
      (error)=>{
        this.flag=true;
      }


    )

    }
    
      
      // localStorage.setItem('token',data.token)
    
}