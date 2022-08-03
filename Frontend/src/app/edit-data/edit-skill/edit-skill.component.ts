import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
data:any={}
  
  @Input()
  public childForm3: FormGroup|any;

  @Input ()
  public arrayIndex: number|any;

  @Input()
  public totalSkillDetails : number|any;

  @Output()
   public deleteSkillDetailsEvent: EventEmitter<number>= new EventEmitter<number>();

   constructor(public resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.data = JSON.parse(JSON.stringify(data))
      console.log(this.data);

          // this.personal=data.personal;
    })

  }

  public static addSkillDetails():FormGroup{
    return new FormGroup({
      skill: new FormControl('', Validators.required)
    })
  }

  
public deleteSkillDetails(index:number):void{
  this.deleteSkillDetailsEvent.next(index);
}
}
