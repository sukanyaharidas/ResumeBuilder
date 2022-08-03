import { Component, OnInit } from '@angular/core';
import {FormArray,FormGroup} from '@angular/forms';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { Router } from '@angular/router';
import { ResumeserviceService } from '../resumeservice.service';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
 
  isLinear=false;
  public personalDetailsForm: FormGroup |any;
  public educationDetailsForm: FormGroup |any;
  public workExperienceDetailsForm: FormGroup |any;
  public skillsForm:FormGroup|any;
  public hobbiesForm: FormGroup|any;

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
  
}

// personal details functions 
 public generatePersonalDetailsForm():void{
    this.personalDetailsForm= new FormGroup({
      personalDetails:new FormArray([
        PersonalDetailsComponent.addPersonalDetails(),
       
      ])
    });
 }

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

// skill functions
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

// Hobby functions
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

 Details:any={
  personal:{},
  educational:[],
  workexp:[],
  skills:[],
  hobbies:[]
 }

 public displaydata():void{

  this.Details.personal = this.personalDetailsForm.value;
  this.Details.educational = this.educationDetailsForm.value;
  this.Details.workexp = this.workExperienceDetailsForm.value;
  this.Details.skills = this.skillsForm.value;
  this.Details.hobbies = this.hobbiesForm.value;

this.resumeservice.senddata(this.Details);
this.router.navigate(['/choosetemp'])
console.log(this.Details);

 }


}
  
  
  

