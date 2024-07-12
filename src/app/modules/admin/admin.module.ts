import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { NavComponent } from './nav/nav.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';





@NgModule({
  declarations: [
    AdminComponent,
    AdminhomeComponent,
    AddComponent,
    EditComponent,
    AllrestaurantsComponent,
    NavComponent,
    AllbookingsComponent


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
