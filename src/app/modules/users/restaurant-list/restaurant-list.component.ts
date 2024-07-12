import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  allrestaurant:any=[]

  error:any={}

  searchkey:string=""


  constructor( private api:ApiService ){}
  ngOnInit(): void {

    this.getAllrestaurant()

    
  }


  




  // api call for get list


  getAllrestaurant=()=>{


    this.api.getAll().subscribe({

      next:(res:any)=>{


        // console.log(res);
        

        this.allrestaurant=res

      },
      error:(err:any)=>{

        console.log(err);
        
        this.error=err
        

      }

    })
    
    


   
    



  }







}
