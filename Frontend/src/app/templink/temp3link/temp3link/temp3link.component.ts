import { Component, OnInit } from '@angular/core';

import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-temp3link',
  templateUrl: './temp3link.component.html',
  styleUrls: ['./temp3link.component.css']
})
export class Temp3linkComponent implements OnInit {
  Data:any={
    
  }
  imageUrl:String='';
  id:any='temp3';
  constructor(private resumeservice:ResumeserviceService) {}
  ngOnInit() {
    
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
    })
  }

}
