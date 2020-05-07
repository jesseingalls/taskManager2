import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'signup', component: SignupComponent},
  { path: '',   redirectTo: 'signup', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
