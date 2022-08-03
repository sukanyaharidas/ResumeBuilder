import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrls: ['./accountsettings.component.css']
})
export class AccountsettingsComponent implements OnInit {
  public inactive1:boolean = true;
 public showme:boolean=false
 public showme2:boolean=false

public inactive2:boolean=true
public showme3:boolean=false
 admindata={

  email:'',
  password:''
 }
  constructor(private authservice:AuthServiceService) { }

  ngOnInit(): void {
    
    this.authservice.getadmindata().subscribe((admindata:any)=>{
      this.admindata= JSON.parse(JSON.stringify(admindata))
      console.log(this.admindata);
  })
  
  }

  changemail(){
    this.inactive1 = !(this.inactive1);
    this.showme=!this.showme
  }

  changepwd(){
 
    this.showme2=!this.showme2
  }
  editadminmail(){
    this.authservice.updateadminmail(this.admindata);
  }

newpwd(){}

}
