import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input()
  public childForm3: FormGroup|any;

  @Input ()
  public arrayIndex: number|any;

  @Input()
  public totalSkillDetails : number|any;

  @Output()
   public deleteSkillDetailsEvent: EventEmitter<number>= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
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
