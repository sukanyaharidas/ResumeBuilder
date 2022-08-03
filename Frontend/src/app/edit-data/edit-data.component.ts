import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { EducationDetailsComponent } from '../form1/education-details/education-details.component'; 
import { HobbiesComponent } from '../form1/hobbies/hobbies.component';
import { PersonalDetailsComponent } from '../form1/personal-details/personal-details.component'; 
import { SkillsComponent } from '../form1/skills/skills.component'; 
import { WorkexperienceComponent } from '../form1/workexperience/workexperience.component';
import { ResumeserviceService } from '../resumeservice.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  editDetails:any={};
  Data:any={
    
  }
  currentTemp:any='';
  imageUrl:String='';
  isLinear=false;
  public personalDetailsForm: FormGroup |any;
  public educationDetailsForm: FormGroup |any;
  public workExperienceDetailsForm: FormGroup |any;
  public skillsForm:FormGroup|any;
  public hobbiesForm: FormGroup|any;
// public userdetails: FormGroup|any;


get personalDetailsArray(): FormArray{
  return this.personalDetailsForm?.get('personalDetails') as FormArray;
}
 get educationDetailsArray():FormArray{
  return this.educationDetailsForm?.get('educationDetails') as FormArray;
 }

 get workExperienceArray(): FormArray{
  return this.workExperienceDetailsForm?.get('workExperience') as FormArray;
 }

 get skillDetailsArray():FormArray{
  return this.skillsForm?.get('skillDetails') as FormArray;
 }


 get hobbyDetailsArray(): FormArray{
  return this.hobbiesForm?.get('hobbyDetails') as FormArray;
 }


  constructor(public resumeservice:ResumeserviceService,public router:Router){}
    
ngOnInit(): void {


  
  this.generatePersonalDetailsForm();
  this.generateEducationDetailsForm();
  this.generateWorkExperienceForm();
  this.generateSkillDetailsForm();
  this.generateHobbyDetailsForm();

  console.log(this.Data);
  this.resumeservice.getdata().subscribe((data:any)=>{
    this.Data = JSON.parse(JSON.stringify(data))
    console.log(this.Data);
    this.imageUrl=data.profileImage;

  })
  
  this.currentTemp=localStorage.getItem('temp');

}


// personal details functions 
 public generatePersonalDetailsForm():void{
    this.personalDetailsForm= new FormGroup({
      personalDetails:new FormArray([
        PersonalDetailsComponent.addPersonalDetails(),
       
      ])
    });
 }

//  public addPersonalDetailsItem():void{
//   this.personalDetailsArray?.push( PersonalDetailsComponent.addPersonalDetails());
//  }

//  public deletepersonalDetails(index:number):void{
//  this.personalDetailsArray?.removeAt(index);
//  }  


//  education details functions
public generateEducationDetailsForm():void{
  this.educationDetailsForm=new FormGroup({
    educationDetails:new FormArray([
      EducationDetailsComponent.addEducationDetails(),
      
    ])
  })
}

public addEducationDetailsItem():void{
  this.educationDetailsArray?.push(EducationDetailsComponent.addEducationDetails());
}

public deleteEducationDetails(index:number){
  this.educationDetailsArray?.removeAt(index);
}

// work experience functions

public generateWorkExperienceForm():void{
  this.workExperienceDetailsForm= new FormGroup({
    workExperience: new FormArray([
      WorkexperienceComponent.addWorkExperience()
    ])
  })
}

public addWorkExperienceItem():void{
  this.workExperienceArray?.push(WorkexperienceComponent.addWorkExperience());
}

public deleteworkExperience(index:number):void{
  this.workExperienceArray?.removeAt(index);
}

public generateSkillDetailsForm():void{
  this.skillsForm= new FormGroup({
    skillDetails: new FormArray([
      SkillsComponent.addSkillDetails()
    ])
  })
}

public addSkillDetailsItem():void{
  this.skillDetailsArray?.push(SkillsComponent.addSkillDetails());
}

public deleteskillDetails(index:number):void{
  this.skillDetailsArray?.removeAt(index);
}


public generateHobbyDetailsForm():void{
  this.hobbiesForm= new FormGroup({
    hobbyDetails: new FormArray([
      HobbiesComponent.addHobbyDetails()
    ])
  })
}

public addHobbyDetailsItem():void{
  this.hobbyDetailsArray?.push(HobbiesComponent.addHobbyDetails());
}
 public deletehobbyDetails(index:number):void{
  this.hobbyDetailsArray?.removeAt(index);
 }

// educationaldetailsmodel = new educationaldetailsmodel("","","","","","");
// workexperiencedetailsmodel = new workexperiencedetailsmodel("","","","","")
// personaldetailsmodel = new personaldetailsmodel("","","","","","","","","")
// skilldetailssmodel=new skilldetailsmodel("")
// hobbydetailsmodel =new hobbydetailesmodel("")
 Details_update:any={
  personal:{},
  educational:[],
  workexp:[],
  skills:[],
  hobbies:[]
 }

 public updatedata():void{

  this.Details_update.personal = this.personalDetailsForm.value;
  this.Details_update.educational = this.educationDetailsForm.value;
  this.Details_update.workexp = this.workExperienceDetailsForm.value;
  this.Details_update.skills = this.skillsForm.value;
  this.Details_update.hobbies = this.hobbiesForm.value;

this.resumeservice.senddata(this.Details_update);
this.router.navigate(['/data_edit']);

const currentRoute = this.router.url;

this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]); // navigate to same route
}); 
window.location.reload();




 }

 
}
