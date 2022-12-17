import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AdsModule } from '../ads/ads.module';




@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AdsModule
  ]
})
export class ProfileModule { }
