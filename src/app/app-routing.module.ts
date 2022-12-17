import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AdsComponent} from './ads/ads.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateComponent } from './ads/create/create.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { AuthActivate } from './shared/guards/auth.activate';
import { LogoutComponent } from './auth/logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DetailsComponent } from './ads/details/details.component';
import { EditComponent } from './ads/edit/edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: GuestHomeComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Flyerly',
      loginRequired: false
    }
  },
  {
    path: 'ads/details/:detailId',
    component: DetailsComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'ads',
    component: AdsComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Create',
      loginRequired: true
    }
  },
  {
    path: 'ads/edit/:adId',
    component: EditComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Edit',
      loginRequired: true
    }
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'My Profile',
      loginRequired: true
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
