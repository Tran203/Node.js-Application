import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Replace this URL with the URL of your Node.js server
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
