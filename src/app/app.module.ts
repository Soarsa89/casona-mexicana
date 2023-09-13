import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {APP_BASE_HREF} from '@angular/common';
import { FormClientComponent } from './FormClient/FormClient.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [		
    AppComponent,
      FormClientComponent,
      LandingpageComponent
   ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
