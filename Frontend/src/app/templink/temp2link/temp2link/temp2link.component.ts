import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';
@Component({
  selector: 'app-temp2link',
  templateUrl: './temp2link.component.html',
  styleUrls: ['./temp2link.component.css']
})
export class Temp2linkComponent implements OnInit {
  Data:any={}
  id:any='temp2';
  imageUrl:String='';
  constructor(private resumeservice:ResumeserviceService) { }

  ngOnInit(): void {

    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
    })
   
  }

}
