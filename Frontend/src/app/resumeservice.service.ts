import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {


  currentTemp:any='';
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
  

  senddata(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000/api/insert', {data})
    .subscribe((data)=>console.log('returndata'));
  }


  getdata(){
    return this.http.get('http://localhost:3000/api/resdata')
    
  }

  getEditdata(){
    return this.http.get('http://localhost:3000/api/getDetails')
  }
 getTemp(){
  return this.http.get('http://localhost:3000/api/getTemp')
 }

  sendTempid(id:any){
    return this.http.post('http://localhost:3000/api/sendTempid', {id})
    .subscribe((data)=>console.log('return temp data',data));
  }

  sendprofileimage(imageData:any){
    return this.http.post('http://localhost:3000/api/imageUpload', {imageData})
    .subscribe((data)=>console.log('image added successfully'));
  }

  chooseTemp(data:any){
    if(localStorage.getItem('temp')!==data){
      localStorage.setItem('temp',data);

    }
    
  }

  getCurrentTemp(){
    return this.currentTemp;
  }
}



