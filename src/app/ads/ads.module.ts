import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdComponent,
    AdsComponent,
    CreateComponent,
    DetailsComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AdsModule { }
