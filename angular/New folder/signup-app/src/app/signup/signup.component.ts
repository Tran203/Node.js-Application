import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = { email: '', password: '' };

  onSubmit() {
    // Access the form data here
    console.log('Form data submitted:', this.formData);

    // You can now process the form data or send it to your app's backend
    // For demonstration purposes, let's just log it to the console.
  }
}

