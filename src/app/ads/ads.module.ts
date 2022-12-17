import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { CommentsModule } from '../comments/comments.module';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AdComponent,
    AdsComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CommentsModule
  ]
})
export class AdsModule { }
