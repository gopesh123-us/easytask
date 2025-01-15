import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';
import { DUMMY_USERS } from '../../dummy-user';
import { TasksComponent } from '../../shared/components/tasks/tasks.component';
import { UserComponent } from '../../shared/components/user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  users = DUMMY_USERS;
  private userName: string = '';

  onSelectUser(userName: string) {
    this.userName = userName;
  }

  get uName(): string {
    return this.userName;
  }
}
