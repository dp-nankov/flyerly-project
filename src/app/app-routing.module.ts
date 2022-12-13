import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AdsComponent} from './ads/ads.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './ads/create/create.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: 'home',
    component: GuestHomeComponent
  },
  {
    path: 'ads',
    component: AdsComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Ads',
    //   loginRequired: false
    // }
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Register',
    //   loginRequired: false
    // }
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Login',
    //   loginRequired: false
    // }
  },
  {
    path: 'create',
    component: CreateComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   title: 'Create',
    //   loginRequired: false
    // }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
