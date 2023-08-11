import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = '';
  surname = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = { name: this.name, surname: this.surname };
    this.http.post('/api/submit', formData).subscribe((response) => {
      console.log('Data sent to server:', response);
    });
  }
}
