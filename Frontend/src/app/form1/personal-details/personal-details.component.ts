import { Component,Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { VERSION, ViewChild, ElementRef } from '@angular/core';

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
  constructor() { }

  static addPersonalDetails():FormGroup{
    return new FormGroup({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      image: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      pin: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      aboutMe: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })
  }


  // public deletePersonalDetails(index:number):void{
  //   this.deletePersonalDetailsEvent.next(index);
  // }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name ;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          // console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0])
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = '';
    }
  }


    


  
}
