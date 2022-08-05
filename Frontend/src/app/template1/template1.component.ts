import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { AuthServiceService } from '../auth-service.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  show:boolean=false
  
  Data:any={
    
   }


id:any='temp1';
imageUrl:String='';
   
  constructor(private resumeservice:ResumeserviceService,private authservice:AuthServiceService,private toast:NgToastService) {}
  ngOnInit() {
     console.log(this.Data);
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
      console.log(this.imageUrl);

    })



  }


    downloadpdf()
    {
    let data = document.getElementById('contentToConvert') as HTMLElement
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF  

    console.log('pdf data is',pdf);
    });
    }

saveTemp(){
  this.resumeservice.sendTempid(this.id);
}

// copylink(input:any){
//   input.select();
//   document.execCommand('copy');
//   console.log(input);

// }

sendmail(){
  this.authservice.mailsend('http://localhost:4200/temp1link').subscribe((mail:any)=>{
    var respons = JSON.parse(JSON.stringify(mail))
    // console.log("happened")
   this.toast.success({detail:"Success Message",summary:"Mail Sent",duration:5000})
})

}
}