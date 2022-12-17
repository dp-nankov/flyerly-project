import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
    
  ]
})
export class CoreModule { }
