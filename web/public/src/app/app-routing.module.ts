import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {AuthGuard} from './middleware/auth-guard.service';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'profil', component: ProfilComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
