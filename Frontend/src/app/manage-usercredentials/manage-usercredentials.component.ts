import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-manage-usercredentials',
  templateUrl: './manage-usercredentials.component.html',
  styleUrls: ['./manage-usercredentials.component.css']
})
export class ManageUsercredentialsComponent implements OnInit {
  userdata :any
  constructor(private authservice:AuthServiceService) { }

  ngOnInit(): void {
this.authservice.getusercred().subscribe((data1:any)=>{
  this.userdata= JSON.parse(JSON.stringify(data1))
  console.log(this.userdata);
  
})

  }

  deleteusercred(item:any){
    if(confirm('Are you sure want to delete record?'))
    this.authservice.deleteusercred(item._id)
    .subscribe((data1)=>{
      this.userdata=this.userdata.filter((p:any)=>p !==item)
      alert('UserCredentials Deleted')
    })
  }

}
