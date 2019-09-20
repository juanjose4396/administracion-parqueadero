import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ROUTES_APP } from './app.route';
import { BussinessModule } from './bussiness/bussiness.module';
import { RegisterComponent } from './core/register/register.component';

const ROUTES = [...ROUTES_APP];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BussinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
