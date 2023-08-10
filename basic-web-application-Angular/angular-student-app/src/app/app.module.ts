import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component'; // Import the StudentComponent

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent, // Add StudentComponent to the declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to the imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

