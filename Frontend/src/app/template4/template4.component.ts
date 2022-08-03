import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';

import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {

   Data:any={}
   id:any='temp4';
  constructor(private resumeservice:ResumeserviceService) {}
  ngOnInit() {
    
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.Data = JSON.parse(JSON.stringify(data))
      console.log(this.Data);
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
    });
    }


    saveTemp(){
      this.resumeservice.sendTempid(this.id);
    }
    
}
