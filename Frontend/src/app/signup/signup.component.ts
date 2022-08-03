import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupUser = {fname : '',
  emailid: '',
 password:''
};
passwordMatch=""
flag:boolean=false;
 showMsg: Boolean=false;
  form:FormGroup|any;
  constructor(private fb:FormBuilder,public auth:AuthServiceService,
    public router:Router){}

 // constructor(private activeModal: NgbActiveModal) {}
  ngOnInit() {

    this.form=new FormGroup({
      fname:new FormControl('', Validators.required),
      emailid:new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password:new FormControl('',Validators.required),
    },
      )
  }
  // closeModal() {
  //   this.activeModal.close('Modal Closed');
    
  // }

  signUp(){
  
    this.auth.userSignup(this.signupUser).subscribe((data)=>{
      this.showMsg=true;
      this.flag=false;
      this.signupUser.fname='';
      this.signupUser.emailid='';
      this.signupUser.password='';
      },
      (error) => {
        this.flag = true;
        this.showMsg=false;
    }
        )
  }
   

}
