import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { ItemsComponent } from './items/items.component';

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
