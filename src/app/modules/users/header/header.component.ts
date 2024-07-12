import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    

  userEmail:any={}
  userName:any={}
  userId:any={}
  login:any=false

  


  constructor( private route:ActivatedRoute, private api:ApiService){}



  ngOnInit(): void {

    this.userEmail=localStorage.getItem("usermail")

    this.userId=localStorage.getItem("userId")

    this.userName=localStorage.getItem("userName")

     if (localStorage.getItem("userId")) {

      this.login=true
      
     } else {

      this.login=false
      
     }

    
 


  }

  logout=()=>{

    localStorage.clear()
    window.location.reload()
    console.clear();
    

  }






}
