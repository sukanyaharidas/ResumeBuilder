import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {
  Data:any=[]
  constructor(private resumeservice:ResumeserviceService) { }

  ngOnInit(): void {

    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
    })
  }

}
