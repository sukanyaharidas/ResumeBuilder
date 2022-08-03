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
    return this.http.post('http://localhost:4000/insert', {data})
    .subscribe((data)=>console.log('returndata'));
  }
}


getdata(){
  return this.http.get('http://localhost:4000/api/resdata')
  
}
sendprofileimage(dataimage:any){
  // console.log('imagess',dataimage)
  return this.http.post('http://localhost:4000/image',{dataimage})
  .subscribe((dataimage))
  
}

storepdf(pdfdata:any){
  console.log(pdfdata);
  
  return this.http.post('http://localhost:4000/storepdf',{pdfdata})
  .subscribe((pdfdata))
}

}
