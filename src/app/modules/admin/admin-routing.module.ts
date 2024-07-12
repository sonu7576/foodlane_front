import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AllrestaurantsComponent } from './allrestaurants/allrestaurants.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';

const routes: Routes = [
  { path: '', component: AdminhomeComponent },
  { path:'all', component:AllrestaurantsComponent },
  { path: 'all/add', component:AddComponent },
  { path: 'edit/:id' ,component:EditComponent },
  { path:'allbookings', component:AllbookingsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
