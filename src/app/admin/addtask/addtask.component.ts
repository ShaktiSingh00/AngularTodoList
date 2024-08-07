
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface User {
  id: number;
  name: string;
  email: string;
  contact: number;
}

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule,CommonModule, FooterComponent, NavbarComponent, SidebarComponent],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
  export class AddTaskComponent {
    newUser: User = { id: 0, name: '', email: '', contact: 0 };
  
    constructor(private router: Router) {}
  
    addUser() {
      if (this.newUser.name && this.newUser.email && this.newUser.contact) {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]') as User[];
        this.newUser.id = storedUsers.length ? Math.max(...storedUsers.map(user => user.id)) + 1 : 1;
        storedUsers.push({ ...this.newUser });
        localStorage.setItem('users', JSON.stringify(storedUsers));
        this.router.navigate(['/showingtask']);
      }
    }
  }

