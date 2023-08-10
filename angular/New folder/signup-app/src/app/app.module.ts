import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this line

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component'; // Make sure you import your SignupComponent if not done already

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
