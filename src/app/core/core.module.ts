import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent

  ]
})
export class CoreModule { }
