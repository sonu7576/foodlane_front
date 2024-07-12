import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allrestaurants',
  templateUrl: './allrestaurants.component.html',
  styleUrls: ['./allrestaurants.component.css']
})
export class AllrestaurantsComponent implements OnInit {

  allrestaurant: any = []
  


  constructor(private api: ApiService, private route: ActivatedRoute) { }
  ngOnInit(): void {


    this.route.params.subscribe((res: any) => {

      // console.log(res);
      const { id } = res
      console.log(id);

      


    })



    this.getAllrestaurant()

  }








  // api call for get list


  getAllrestaurant = () => {


    this.api.getAll().subscribe({

      next: (res: any) => {


        // console.log(res);


        this.allrestaurant = res

      },
      error: (err: any) => {

        console.log(err);


      }

    })









  }

 


  // delete post
  deleteRest(_id:any){


    this.api.deletRest(_id).subscribe({
      next: (res: any) => {
        console.log(res);

        this.getAllrestaurant()
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }



 

}
