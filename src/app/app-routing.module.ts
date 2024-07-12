import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './modules/users/userhome/userhome.component';

const routes: Routes = [
  { path: '', component:UserhomeComponent },
  { path:'login',  component:LoginComponent},
  { path:'register' ,component:UserregisterComponent },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'users/:userid', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
