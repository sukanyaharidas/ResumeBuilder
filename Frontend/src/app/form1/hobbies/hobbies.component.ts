import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent{

  @Input()
  public childForm4:FormGroup|any;

  @Input()
  public arrayIndex: number|any;

  @Input()
  public totalHobbyDetails: number|any;

  @Output()
  public deleteHobbyDetailsEvent: EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

 public static addHobbyDetails():FormGroup{
  return new FormGroup({
    hobby: new FormControl('', Validators.required)
  })
 }

public deleteHobbyDetails(index:number):void{
  this.deleteHobbyDetailsEvent.next(index);
}
 
}
