import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mytemplates',
  templateUrl: './mytemplates.component.html',
  styleUrls: ['./mytemplates.component.css']
})
export class MytemplatesComponent implements OnInit {



 
  Data:any=[];
  mytemp=[];
  temparray=[];  
  unique=[];

  i=0;j=0;k=0;l=0;
  tempid:any='';

  constructor(public resumeservice:ResumeserviceService, public router:Router) { }

  ngOnInit(): void {

this.resumeservice.getavlTemps().subscribe((data:any)=>{
  this.Data = JSON.parse(JSON.stringify(data))
  console.log("incoming temp data",this.Data)
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


  

  deleteTemp1(temp:any){

this.resumeservice.deleteavlTemp(temp).subscribe((data)=>{
  console.log(data);
  this.router.navigate(['/_templates']);
  // window.location.reload();
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/_templates']);
  })})
}

  deleteTemp2(temp:any){

    this.resumeservice.deleteavlTemp(temp).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/_templates']);
  // window.location.reload();
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/_templates']);
  })
    })
  }
  
  deleteTemp3(temp:any){

    this.resumeservice.deleteavlTemp(temp).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/_templates']);
      // window.location.reload();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/_templates']);
      })

    })
  }
  
  deleteTemp4(temp:any){

    this.resumeservice.deleteavlTemp(temp).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/_templates']);
  // window.location.reload();
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/_templates']);
  })

    })
  }

addavltemp(){
  console.log(this.tempid)
  this.resumeservice.addavlTemp(this.tempid).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/_templates']);
  // window.location.reload();
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/_templates']);
  })

  })
}
//     console.log('temp isss',temp);
//    this.resumeservice.removeTemp(temp);
//    this.mytemp= this.resumeservice.getTemps();
//  console.log("available temps",this.mytemp)
//     for (let a = 0; a < 4; a++) {
//       if(this.mytemp.value==='temp1'){
//         this.i++;

//       }
//       if(this.mytemp.value==='temp2'){
//         this.j++;

//       }
//       if(this.mytemp.value==='temp3'){
//        this.k++;

//       }
//       if(this.mytemp.value==='temp4'){
//         this.l++;

//       }
//     }
    
//   }
  }


