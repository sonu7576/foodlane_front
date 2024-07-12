import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent {
   


  allbookings:any=[]
  data:any={}
  searchkey:any={}



 
 

  constructor( private route:ActivatedRoute, private api:ApiService,){}



  ngOnInit(): void {

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




}
