import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Import necessary modules
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private staticUsers = [
    { email: 'test@example.com', password: 'password123' }
  ];
  constructor(private router: Router) {}


  onSubmit() {
    const user = this.staticUsers.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      this.router.navigate(['/home']);
     
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
