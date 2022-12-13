import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
