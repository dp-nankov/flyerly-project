import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AdsComponent} from './ads/ads.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './ads/create/create.component';

const routes: Routes = [
  {
    path: 'home',
    component: GuestHomeComponent
  },
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
