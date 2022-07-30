import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUIComponent implements OnInit {


  constructor(public _auth:AuthServiceService) { }

  ngOnInit(): void {


  

  }

}
