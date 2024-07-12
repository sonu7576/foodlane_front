import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  AddForm=this.fb.group({
    id:['',[Validators.required]],
    title:['',[Validators.required]],
    description:['',[Validators.required]],
    price:['',[Validators.required]],
    image:['',[Validators.required]]

  })

  constructor(private fb:FormBuilder, private api:ApiService, private route:Router){}



  add(){

    if (this.AddForm.valid) {
      
    const id=this.AddForm.value.id
    const title=this.AddForm.value.title
    const description=this.AddForm.value.description
    const price=this.AddForm.value.price
    const image=this.AddForm.value.image
    

    // alert(`${id} ${title} ${description} ${price} ${image}`)

    console.log(`${id} ${title} ${description} ${price} ${image}`);


    const reqbody={id,title,description,price,image}

    

    this.api.addRestaurant(reqbody).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.route.navigateByUrl('/admin/all')


        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })

      
    } else {

      alert('please fill the form')

      
    }





  }

}
