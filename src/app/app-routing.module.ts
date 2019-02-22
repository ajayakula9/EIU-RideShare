import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProfileComponent} from './profile/profile.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {MapsComponent} from './maps/maps.component'
import {OfrrideComponent} from './ofrride/ofrride.component';
import {LkngrideComponent} from './lkngride/lkngride.component'
const routes: Routes = [
  { path: '', component: HomeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'maps', component: MapsComponent},
    { path: 'ofrride', component: OfrrideComponent},
    { path: 'lkngride', component: LkngrideComponent},
  
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
