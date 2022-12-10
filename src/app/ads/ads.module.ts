import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdComponent,
    AdsComponent,
    CreateComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AdsModule { }
