import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form1Component } from '../form1/form1.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { Template1Component } from '../template1/template1.component';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
// import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modalService: NgbModal, public auth:AuthServiceService, public router:Router) { }
  openModal() {
    //ModalComponent is component name where modal is declare
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openModalSignUp() {
    //ModalComponent is component name where modal is declare
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  logoutUser(){
    // Cookie.set('isUser', 'false');
    // Cookie.set('isAdmin', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
    // Cookie.set('isAdmin', 'false');

  }

}
