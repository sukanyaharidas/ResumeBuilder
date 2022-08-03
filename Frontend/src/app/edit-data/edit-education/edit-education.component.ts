import { Component, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit{

  data:any={}
  @Input()
  public childForm1: FormGroup|any;
  @Input()
  public arrayIndex1:number|any;
  @Input()
  public totalEducationDetails:number|any;
  
  @Output()
  public deleteEducationDetailsEvent:EventEmitter<number>=new EventEmitter<number>();
  constructor(public resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.data = JSON.parse(JSON.stringify(data))
      console.log(this.data);

          // this.personal=data.personal;
    })

  }

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
