import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-edit-hobby',
  templateUrl: './edit-hobby.component.html',
  styleUrls: ['./edit-hobby.component.css']
})
export class EditHobbyComponent implements OnInit{

  @Input()
  public childForm4:FormGroup|any;

  @Input()
  public arrayIndex: number|any;

  @Input()
  public totalHobbyDetails: number|any;

  @Output()
  public deleteHobbyDetailsEvent: EventEmitter<number>=new EventEmitter<number>();
  data: any={};

  constructor(public resumeservice:ResumeserviceService) { }

  ngOnInit(): void {
    this.resumeservice.getdata().subscribe((data:any)=>{
      this.data = JSON.parse(JSON.stringify(data))
      console.log(this.data);

          // this.personal=data.personal;
    })

  }

 public static addHobbyDetails():FormGroup{
  return new FormGroup({
    hobby: new FormControl('', Validators.required)
  })
 }

public deleteHobbyDetails(index:number):void{
  this.deleteHobbyDetailsEvent.next(index);
}

trackByIdx(index: number, obj: any): any {
  return index;
}

}
