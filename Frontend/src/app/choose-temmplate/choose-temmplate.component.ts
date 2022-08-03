import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 
  selector: 'app-choose-temmplate',
  templateUrl: './choose-temmplate.component.html',
  styleUrls: ['./choose-temmplate.component.css']
  
})
export class ChooseTemmplateComponent implements OnInit {

  constructor(private  router:Router ) { }

  ngOnInit(): void {

    
  }
   temp1(){
    this.router.navigate(['\_temp1']);

  }

  temp2(){
    this.router.navigate(['\_temp2']);

  }
  temp3(){
    this.router.navigate(['\_temp3']);

  }
  temp4(){
    this.router.navigate(['\_temp4']);

  }



}
