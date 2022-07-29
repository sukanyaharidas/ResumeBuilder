import { Component, Input, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent{

  @Input()
  public childForm1: FormGroup|any;
  @Input()
  public arrayIndex1:number|any;
  @Input()
  public totalEducationDetails:number|any;
  
  @Output()
  public deleteEducationDetailsEvent:EventEmitter<number>=new EventEmitter<number>();
  constructor() { }

  static addEducationDetails():FormGroup{
    return new FormGroup({
      qualification: new FormControl('',Validators.required),
      course: new FormControl('',Validators.required),
      institution: new FormControl('',Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('',Validators.required),
      courseDetails: new FormControl('',Validators.required)
        })
  }


  public deleteEducation(index:number):void{
    this.deleteEducationDetailsEvent.next(index);
  }
  
}
