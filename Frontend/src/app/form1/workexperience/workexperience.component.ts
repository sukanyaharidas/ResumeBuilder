import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent{

  @Input()
  public childForm2: FormGroup|any;

  @Input()
  public arrayIndex:number|any;

  @Input()
  public totalWorkExperience:number|any;

  @Output()
  public deleteWorkExperienceEvent:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

 public static addWorkExperience():FormGroup{
  return new FormGroup({
    jobProfile: new FormControl('',Validators.required),
    jobDescription: new FormControl('',Validators.required),
    companyName: new FormControl('',Validators.required),
    startDate1: new FormControl('', Validators.required),
    endDate1: new FormControl('',Validators.required)
  })
 }

 public deleteWorkExperience(index:number):void{
  this.deleteWorkExperienceEvent.next(index);
 }

}
