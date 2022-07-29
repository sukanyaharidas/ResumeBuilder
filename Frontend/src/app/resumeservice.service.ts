import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  constructor(private http: HttpClient) { }
  data ={
    educational: {
      qualification: '',
      courseDetails: '',
      institution: '',
      startDate: '',
      course: '',
      endDate: '',
    },
    personal: {
  
      name: '',
      role: '',
      aboutMe: '',
      email: '',
      phone: '',
      image: '',
      address: '',
      city: '',
      pin: ''
  
  
    },
    workexp:
    {
      jobProfile: '',
      startDate: '',
      companName: '',
      endDate: '',
      jobDescription: '',
    },
    skills:
    {
      skill: '',
    
    },
    hobbies:
    {
      hobby: '',
  
    }
    
  
  }
  

  senddata(data:any){{
    console.log(data);
    return this.http.post('http://localhost:3000/insert', {data})
    .subscribe((data)=>console.log(data));
  }

}
getdata(){
  return this.http.get('http://localhost:3000/api/resdata')
  
}

}
