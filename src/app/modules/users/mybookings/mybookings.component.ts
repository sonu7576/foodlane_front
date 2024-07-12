import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit{




  allbookings:any=[]
  
  searchkey:any={}



 
 

  constructor(private api:ApiService,){}



  ngOnInit(): void {


    
    this.searchkey= localStorage.getItem("usermail")

    
    

      this.getAllbookings()

      

     
    


  }

  getAllbookings=()=>{


    this.api.allbookings().subscribe({

      next:(res:any)=>{


        console.log(res);
        

        this.allbookings=res


        

      },
      error:(err:any)=>{

        console.log(err);
        

      }

    })
    
    


   
    



  }

  // delete booking

  deletebooking(_id:any){

     console.log(_id);
     
    this.api.deletebooking(_id).subscribe({
      next: (res: any) => {
        console.log(res);

          this.getAllbookings()
        
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }


}
