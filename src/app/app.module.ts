import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Expinterceptor } from './expinterceptor';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ] ,
  bootstrap: [AppComponent],
  providers:[
  ]
})
export class AppModule { }
