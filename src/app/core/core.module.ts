import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
