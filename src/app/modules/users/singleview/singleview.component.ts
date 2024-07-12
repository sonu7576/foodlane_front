import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit{

  restaurant:any={}

  allusers: any = []


  constructor(private api:ApiService, private activated:ActivatedRoute){}


  ngOnInit(): void {
    this.activated.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id);
      
      this.getRestaurant(id)
      
    })
   

     

     
    

    
  }

  getRestaurant=(id:any)=>{
    this.api.getSinglerestaurant(id).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.restaurant=res
      
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

    
  }

  

 









  }




