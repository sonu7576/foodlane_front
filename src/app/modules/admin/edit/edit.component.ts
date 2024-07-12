import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any;
  data: any;
  AddForm: FormGroup;

  constructor(private route: ActivatedRoute, private api: ApiService, private fb: FormBuilder, private router: Router) {
    this.AddForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }
  

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.id = res.id; // Assigning the route parameter id to the component property
      this.api.getSinglerestaurant(this.id).subscribe(res => { // Corrected method name
        this.data = res;
        this.AddForm.patchValue({
          id: this.data.id,
          title: this.data.title,
          description: this.data.description,
          price: this.data.price,
          image: this.data.image
        });
      });
    });
  }

  async Submit(_id:any){
   

    const data = this.AddForm.value; 
    const id= this.data._id


    this.api.editRestaurant(id,data).subscribe({
      next:(res:any)=>{
        console.log(res);
        console.log("success");
        this.router.navigateByUrl('/admin/all')
        
        
      },error:(err:any)=>{
        console.log(err);
        
      }
    })
  

  }

  
    
  

  
}
