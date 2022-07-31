import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../resumeservice.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
// import { ExportAsConfig,ExportAsService } from 'ngx-export-as';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  Data:any={
    
   }

   
   name:String='Sukanya';
  constructor(private resumeservice:ResumeserviceService) {}
  ngOnInit() {
     console.log(this.Data);
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

//     downloadimg(){

// this.exportAsService.save
//      // download the file using old school javascript method
//      this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
//       // save started
//     });
//     // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
//     this.exportAsService.get(this.exportAsConfig).subscribe(content => {
//       console.log(content);
//     });
//     }
 


}
