import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad/ad.component';
import { AdsComponent } from './ads.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { CommentsModule } from '../comments/comments.module';
import { EditComponent } from './edit/edit.component';
import { TitleFilterPipe } from '../shared/pipes/title-filter.pipe';



@NgModule({
  declarations: [
    AdComponent,
    AdsComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    TitleFilterPipe
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CommentsModule,
    FormsModule
  ],
  exports: [
    AdComponent
  ]
})
export class AdsModule { }
