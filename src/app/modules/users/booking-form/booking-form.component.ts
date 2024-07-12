import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{

  id: any;
  data: any;
  bookForm: FormGroup;
  userdata: any;
  userEmail :any;

  constructor(private route: ActivatedRoute, private api: ApiService, private fb: FormBuilder, private navi:Router) {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      date: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const { id } = res;
      console.log(id);

      this.api.getSinglerestaurant(id).subscribe(res => {
        this.data = res;
        
      });

     
    });

    this.userdata=localStorage.getItem("userId")

  this.userEmail=localStorage.getItem("usermail")
    
  }

  addbook(){

    if (this.bookForm.valid) {

    const usermail=this.userEmail
    const name=this.bookForm.value.name
    const restaurant= this.data.title
    const restaurantid=this.data.id
    const restaurantimg=this.data.image
    const mobile=this.bookForm.value.mobile
    const date=this.bookForm.value.date
    

    // alert(`${id} ${title} ${description} ${price} ${image}`)

    console.log(`${usermail} ${name}  ${restaurant} ${restaurantid} ${mobile} ${date}`);

    const req={usermail,name,restaurant,restaurantid,restaurantimg,mobile,date}


    

    this.api.addBooking(req).subscribe({
      next:(res:any)=>{
        console.log(res);


        this.navi.navigateByUrl(`/users/${this.userdata}/mybookings`)


        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })

      
    } else {

      alert('please fill the form')

      
     }
    }

}
