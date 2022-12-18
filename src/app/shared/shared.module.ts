import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';



@NgModule({
  declarations: [
  
    SearchFilterPipe,
       PriceFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class SharedModule { }
