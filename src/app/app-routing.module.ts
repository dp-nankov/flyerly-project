import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: GuestHomeComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
