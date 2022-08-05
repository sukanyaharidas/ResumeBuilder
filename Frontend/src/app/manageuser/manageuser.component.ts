import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  userdata :any
  constructor( private authservice:AuthServiceService) { }

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