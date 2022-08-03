import { Component,Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { VERSION, ViewChild, ElementRef } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {

  name = 'Angular ' + VERSION.major;
  dataimage:any;


   @ViewChild('fileInput') fileInput: ElementRef |any;
  fileAttr = '';

 
@Input()
  public childForm: FormGroup|any;
@Input()
 public arrayIndex:number|any;
@Input()
 public totalPersonalDetails:number|any;

@Output()
public deletePersonalDetailsEvent:EventEmitter<number>=new EventEmitter<number>();
  static unamePattern: string | RegExp="^[0-9]{6}$";
  static emailPattern: string | RegExp="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  static phonePattern: string | RegExp="^[0-9]{10}$"; 
  constructor(public resumeservice:ResumeserviceService) { }

  static addPersonalDetails():FormGroup{
    return new FormGroup({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required,Validators.pattern(this.emailPattern)]),
      pin: new FormControl('',[Validators.required,Validators.pattern(this.unamePattern)]),
      phone: new FormControl('',[Validators.required,Validators.pattern(this.phonePattern)]),
      city: new FormControl('',Validators.required),
      aboutMe: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })
  }


  // file upload
  uploadFileEvt(event: any) {

    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return
    }
    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return
    }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.dataimage = reader.result
      console.log(this.dataimage)
  
    this.resumeservice.sendprofileimage(this.dataimage)
    }

  }
}
