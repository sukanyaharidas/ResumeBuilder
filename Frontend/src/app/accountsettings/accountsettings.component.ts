import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {
  public inactive1:boolean = true;
  public inactive2:boolean = true;
 public showme:boolean=false
 public showme2:boolean=false



 userData={
  fname:'',
  emailid:'',
  password:''
 }
  constructor(private authservice:AuthServiceService) { }

  ngOnInit(): void {
    
  let userdata = localStorage.getItem('edituserdata');
  console.log(userdata);
  this.authservice.getuserdata(userdata).subscribe((data)=>{
    this.userData=JSON.parse(JSON.stringify(data))
  })
  
  }

  changename(){
    this.inactive1 = !(this.inactive1);
    this.showme=!this.showme
  }

  changemail(){
    this.inactive2= !(this.inactive2)
    this.showme2=!this.showme2
  }
savename(){
  this.showme=!this.showme
  this.inactive1 = !(this.inactive1);
}
savemail(){
  this.inactive2= !(this.inactive2)
  this.showme2=!this.showme2
}

}
