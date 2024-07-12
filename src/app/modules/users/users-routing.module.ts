import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

const routes: Routes = [

  { path: '', component:UserhomeComponent },
  { path:'allrestaurant/single/:id', component:SingleviewComponent },
  { path: 'allrestaurant', component:RestaurantListComponent },
  { path: 'allrestaurant/single/:id/book-form/:id' , component:BookingFormComponent},
  { path: 'mybookings' , component:MybookingsComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
