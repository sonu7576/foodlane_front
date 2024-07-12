import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="http://localhost:3000"

  constructor(private http:HttpClient) { }


  // to get all restaurant

  getAll=()=>{

   return this.http.get(`${this.server_url}/restaurant/all`)

  }

  addRestaurant=(rest:any)=>{
    return this.http.post(`${this.server_url}/restaurant/add`,rest)
  }

  // get single restaurant
  getSinglerestaurant=(id:any)=>{
    return this.http.get(`${this.server_url}/restaurant/view/${id}`)
  }

  // delete Restaurant


deletRest=(_id:any)=>{
  return this.http.delete(`${this.server_url}/delete/${_id}`)
}

  // edit

  editRestaurant(id: any, data: any){
    
    return this.http.put(`${this.server_url}/edit/${id}`, data);
  }


  // register Api

  registerApi=(user:any)=>{
   return this.http.post(`${this.server_url}/user/register`,user)
  }

  // get user

  
  // get_idSingleuser=(userid:any)=>{
  //   return this.http.get(`${this.server_url}/user/single/${userid}`)
  // }



  getAlluser=()=>{

    return this.http.get(`${this.server_url}/user/all`)
 
   }

  // login


  loginApi=(user:any)=>{

   return this.http.post(`${this.server_url}/user/login`,user)

  }

  
  

  AdminLogin=(admin:any)=>{
   return this.http.post(`${this.server_url}/admin/login`,admin)
  }

  // add booking

  addBooking=(book:any)=>{
    return this.http.post(`${this.server_url}/booking/add`,book)
  }

  // allbookings

  allbookings=()=>{
    return this.http.get(`${this.server_url}/mybookings`)

  }

  // delete booking

  deletebooking=(_id:any)=>{

    return this.http.delete(`${this.server_url}/deletebook/${_id}`)

  }


 



}
