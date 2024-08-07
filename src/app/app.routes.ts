import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { ShowingtaskComponent } from './admin/showingtask/showingtask.component';
import { AddTaskComponent } from './admin/addtask/addtask.component';

export const routes: Routes = [
    { path : '', component: LoginComponent },
    { path : 'home',component: HomeComponent },
    { path : 'showingtask', component : ShowingtaskComponent},
    { path : 'addtask', component : AddTaskComponent}
];
