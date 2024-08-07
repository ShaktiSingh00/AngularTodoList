import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface User {
  id: number;
  name: string;
  email: string;
  contact: number;
}
@Component({
  selector: 'app-showingtask',
  standalone: true,
  templateUrl: './showingtask.component.html',
  styleUrls: ['./showingtask.component.css'],
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, SidebarComponent]
})
export class ShowingtaskComponent {

  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', contact: 0 };
  editIndex: number | null = null;
  userToEdit: User | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  editUser(index: number) {
    if (window.confirm('Do you want to edit this user?')) {
      this.userToEdit = { ...this.users[index] };
      this.editIndex = index;
    }
  }

  updateUser() {
    if (this.userToEdit && this.editIndex !== null) {
      this.users[this.editIndex] = { ...this.userToEdit };
      this.updateLocalStorage();
      this.userToEdit = null;
      this.editIndex = null;
    }
  }

  deleteUser(id: number) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      this.users = this.users.filter(user => user.id !== id);
      this.updateLocalStorage();
    }
  }

  navigateToAddTask() {
    this.router.navigate(['/addtask']);
  }

  updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
