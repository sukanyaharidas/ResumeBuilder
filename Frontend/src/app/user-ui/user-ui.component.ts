import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ResumeserviceService } from '../resumeservice.service';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUIComponent implements OnInit {


  Data:any={
    
  }
  User:any={}

  name:any='';
  role:any=''
  
 constructor(private resumeservice:ResumeserviceService, public authservice:AuthServiceService) {}
 ngOnInit() {
  //   console.log(this.Data);
  //  this.resumeservice.getdata().subscribe((data:any)=>{
  //    this.Data = JSON.parse(JSON.stringify(data))
  //    console.log(this.Data);

     this.role=localStorage.getItem('role');
     console.log("role is",this.role);

   


   this.authservice.getName().subscribe((data:any)=>{
    this.User= JSON.parse(JSON.stringify(data))
    this.name=data.fname.toUpperCase();

    console.log("my name is",this.name);
 })
}
}
