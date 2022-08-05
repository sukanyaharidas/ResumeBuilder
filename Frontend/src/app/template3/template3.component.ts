import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
import { AuthServiceService } from '../auth-service.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {

  show:boolean=true
  Data:any={
    
   }
   imageUrl:String='';
   id:any='temp3';
  constructor(private resumeservice:ResumeserviceService,public authservice:AuthServiceService,private toast:NgToastService) {}
  ngOnInit() {
    
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
      this.imageUrl=data.profileImage;
    })
  }


  downloadpdf()
    {
    let data = document.getElementById('contentToConvert') as HTMLElement
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 180;
    var pageHeight = 295;
    var imgHeight = 150;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF
    });
    }

    saveTemp(){
      this.resumeservice.sendTempid(this.id);
    }
    copylink(input:any){
      input.select();
      document.execCommand('copy');
      console.log(input);
    
    }
    
sendmail3(){
  this.authservice.mailsend('http://localhost:4200/temp3link').subscribe((mail:any)=>{
    var respons = JSON.parse(JSON.stringify(mail))
    // console.log("happened")
    this.toast.success({detail:"Success Message",summary:"Mail Sent",duration:5000})
})
}
}