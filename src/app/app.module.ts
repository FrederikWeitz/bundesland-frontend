import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeadComponent from "../stories/components/head.component";
import CountryComponent from "../stories/components/country.component";
import PersonIndexComponent from "../stories/components/person-index.component";

@NgModule({
  "declarations": [
    AppComponent,
    HeadComponent,
    CountryComponent,
    PersonIndexComponent
  ],
  "imports": [
    BrowserModule,
    AppRoutingModule
  ],
  "providers": [],
  "bootstrap": [AppComponent]
})
export class AppModule { }
