import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  role:any='';
  userRole:boolean=false;
  adminRole:boolean=false;
  constructor(public auth:AuthServiceService) { }

  ngOnInit(): void {
    this.role= localStorage.getItem('role');
    if(this.role==='user')
    {
      this.userRole=true;
      this.adminRole=false;
    }
    else{
      this.userRole=false;
      this.adminRole=true;
    }
  }

}
