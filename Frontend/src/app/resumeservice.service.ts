import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { coerceNumberProperty } from '@angular/cdk/coercion';
@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {
   alltemp=['temp1','temp2','temp3','temp4'];

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
    return this.http.post('http://localhost:4000/insert', {data})
    .subscribe((data)=>console.log('returndata'));
  }


  getdata(){
    return this.http.get('http://localhost:4000/resdata')
    
  }

  getEditdata(){
    return this.http.get('http://localhost:4000/getDetails')
  }
 getTemp(){
  return this.http.get('http://localhost:4000/getTemp')
 }

  sendTempid(id:any){
    return this.http.post('http://localhost:4000/sendTempid', {id})
    .subscribe((data)=>console.log('return temp data',data));
  }

  sendprofileimage(imageData:any){
    return this.http.post('http://localhost:4000/imageUpload', {imageData})
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

  // removeTemp(temp:any):boolean{
  //   let index = this.alltemp.indexOf(temp); //find index in your array
  //   this.alltemp.splice(index, 1);//remove element from array
  //   console.log(this.alltemp)
  //   return false;

  // }
getavlTemps(){
  return this.http.get('http://localhost:4000/avlTemplates');
}


deleteavlTemp(id:any){
  return this.http.delete('http://localhost:4000/delete_avltemp/'+id);
}

addavlTemp(data:any){
  return this.http.put('http://localhost:4000/add_avltemp',{data});
}
}



