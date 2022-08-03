import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {
  Data:any={
    
  }
id:any='temp1';
imageUrl:String='';
temparray=[];  
unique=[];

  constructor(public resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
    console.log(this.Data);
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
      console.log(this.imageUrl);
    })
  
  this.resumeservice.getTemp().subscribe((data:any)=>{
    this.Data = JSON.parse(JSON.stringify(data))
    console.log('data in myresume',data);
    this.unique=data.tempid;
    console.log('data in ',this.temparray);
    this.temparray = this.unique.filter((item, i, ar) => ar.indexOf(item) === i);
    
  })
  }

  }
  