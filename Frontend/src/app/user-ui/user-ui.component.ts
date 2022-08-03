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

  
 constructor(private resumeservice:ResumeserviceService) {}
 ngOnInit() {
    console.log(this.Data);
   this.resumeservice.getdata().subscribe((data:any)=>{
     this.Data = JSON.parse(JSON.stringify(data))
     console.log(this.Data);
    

   })

 }
}
