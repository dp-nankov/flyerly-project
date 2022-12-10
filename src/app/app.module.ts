import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { LoadingInterceptor } from './core/loading.interceptor';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuestHomeComponent,
    ItemsComponent,
    ItemComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
