import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HeaderComponent } from './header/header.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { CarousalComponent } from './carousal/carousal.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './transform/search.pipe';
import { UsersearchPipe } from './transform/usersearch.pipe';
import { MybookingsComponent } from './mybookings/mybookings.component';





@NgModule({
  declarations: [
    UsersComponent,
    UserhomeComponent,
    HeaderComponent,
    SingleviewComponent,
    CarousalComponent,
    RestaurantListComponent,
    FooterComponent,
    BookingFormComponent,
    SearchPipe,
    UsersearchPipe,
    MybookingsComponent,
    
    
    
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule

   
    
   
    
    
    
  ]
})
export class UsersModule { }
