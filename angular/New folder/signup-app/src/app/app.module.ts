import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [BrowserModule, ReactiveFormsModule], // Use ReactiveFormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

