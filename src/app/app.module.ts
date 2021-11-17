import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
