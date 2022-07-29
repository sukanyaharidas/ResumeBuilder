import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {
  Data:any=[]
  constructor(private resumeservice:ResumeserviceService) { }

  ngOnInit(): void {

    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
    })
  }


}
