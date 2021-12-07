import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DynamicFieldModule} from "./dynamic-field";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
