import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit{

  userId :any={}



  ngOnInit(): void {


    this.userId= localStorage.getItem("userId")


    
  }



}
