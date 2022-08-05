import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeserviceService } from '../resumeservice.service';
@Component({
 
  selector: 'app-choose-temmplate',
  templateUrl: './choose-temmplate.component.html',
  styleUrls: ['./choose-temmplate.component.css']
  
})
export class ChooseTemmplateComponent implements OnInit {


  mytemp=[];
  i=0;j=0;k=0;l=0;
  constructor(public  router:Router, public resumeservice:ResumeserviceService ) { }

  ngOnInit(): void {
    this.resumeservice.getavlTemps().subscribe((data:any)=>{
      // this.Data = JSON.parse(JSON.stringify(data))
      // console.log("incoming temp data",this.Data)
      this.mytemp=data.avlTemp;
      console.log('data in ',this.mytemp);
      // this.mytemp = this.unique.filter((item, i, ar) => ar.indexOf(item) === i);
      // console.log("incoming temp data index 0",this.mytemp)
    
    
      for(let a=0;a<this.mytemp.length;a++){
        
        if(this.mytemp[a]=='temp1'){
             this.i++;
            
        }
        else if(this.mytemp[a]==='temp2'){
          this.j++;
      }
     else  if(this.mytemp[a]==='temp3'){
        this.k++;
      }
     else if(this.mytemp[a]==='temp4'){
        this.l++;
      }
      }
    
    })
    
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
