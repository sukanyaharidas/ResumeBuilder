import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';
@Component({
  selector: 'app-temp1link',
  templateUrl: './temp1link.component.html',
  styleUrls: ['./temp1link.component.css']
})
export class Temp1linkComponent implements OnInit {
  Data:any={
    
  }
  id:any='temp1';
  imageUrl:String='';
     

  constructor(private resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
  
    console.log(this.Data);
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
      console.log(this.imageUrl);

  }

)}
}
