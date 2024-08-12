import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   // form group
   loginform=this.fb.group({

    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  singleuser:any={}

  useremail:any={}

  userName:any={}

  constructor(private fb:FormBuilder, private api:ApiService, private route:Router){}


  login(){
    if (this.loginform.valid) {
    const email=this.loginform.value.email
    const password=this.loginform.value.password
   
    // alert (`${username} ${email} ${password}`)
    console.log(` ${email} ${password} `);

    const reqbody={email,password}

    // api call

    this.api.loginApi(reqbody).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.singleuser=res.existingUser._id

        this.useremail=res.existingUser.email

        this.userName=res.existingUser.username   

        console.log(this.singleuser);

        localStorage.setItem("userId",this.singleuser)

        localStorage.setItem("usermail",this.useremail)

        localStorage.setItem("userName",this.userName)

        this.route.navigateByUrl(`/users/${this.singleuser}`)
        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })

    this.api.AdminLogin(reqbody).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.route.navigateByUrl('admin')


        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })

    


    
      
    }

    else{
      alert('please fill the form')
    }


    

    

  }

  

  


  



}
