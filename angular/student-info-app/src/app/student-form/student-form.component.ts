// src/app/student-form/student-form.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  constructor(private http: HttpClient) {}

  student = { name: '', surname: '' };

  onSubmit() {
    this.http.post('http://localhost:3000/api/students', this.student)
      .subscribe(data => {
        console.log('Data sent successfully:', data);
      }, error => {
        console.error('Error sending data:', error);
      });
  }
}

