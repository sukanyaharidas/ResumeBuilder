import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';
@Component({
  selector: 'app-temp4link',
  templateUrl: './temp4link.component.html',
  styleUrls: ['./temp4link.component.css']
})
export class Temp4linkComponent implements OnInit {
  Data:any={}
  id:any='temp4';
 constructor(private resumeservice:ResumeserviceService) {}
 ngOnInit() {
   
   this.resumeservice.getdata().subscribe((data:any)=>{
     this.Data = JSON.parse(JSON.stringify(data))
     console.log(this.Data);
   })
  }

}
