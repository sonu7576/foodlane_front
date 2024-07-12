import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  // form group
  registerForm=this.fb.group({

    username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(private fb:FormBuilder, private api:ApiService, private route:Router){}



  register(){
    if (this.registerForm.valid) {
      const username=this.registerForm.value.username
    const email=this.registerForm.value.email
    const password=this.registerForm.value.password

    // alert (`${username} ${email} ${password}`)
    console.log(`${username} ${email} ${password}`);

    const reqbody={username,email,password}

    // api call

    this.api.registerApi(reqbody).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.route.navigateByUrl('login')


        
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
