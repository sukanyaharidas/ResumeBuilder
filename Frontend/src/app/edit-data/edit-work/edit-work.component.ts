import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResumeserviceService } from 'src/app/resumeservice.service';
@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent {


  data:any={}
 
  @Input()
  public childForm2: FormGroup|any;

  @Input()
  public arrayIndex:number|any;

  @Input()
  public totalWorkExperience:number|any;

  @Output()
  public deleteWorkExperienceEvent:EventEmitter<number>=new EventEmitter<number>();

  constructor(public resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.data = JSON.parse(JSON.stringify(data))
      console.log(this.data);

          // this.personal=data.personal;
    })

  }

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
