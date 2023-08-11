import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  surname = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = { name: this.name, surname: this.surname };
    this.http.post('http://localhost:3000/api/submit', formData).subscribe((response) => {
      console.log('Data sent to server:', response);
      // Clear the form fields after successful submission
      this.name = '';
      this.surname = '';
    });
  }
}
