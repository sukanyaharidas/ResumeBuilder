import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logged-inheader',
  templateUrl: './logged-inheader.component.html',
  styleUrls: ['./logged-inheader.component.css']
})
export class LoggedINheaderComponent implements OnInit {

  constructor(public auth:AuthServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
