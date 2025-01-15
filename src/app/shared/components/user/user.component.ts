import { Component, EventEmitter, Input, Output } from '@angular/core';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) userImagePath!: string;
  @Input({ required: true }) userName!: string;

  @Output() selectEvent = new EventEmitter<string>();
  //avatar = input<string>();
  //we can also use signals to accept input

  get imagepath() {
    return this.userImagePath;
  }

  get username() {
    return this.userName;
  }

  //we received it from parent and we pass it back to the parent
  onSelectUser() {
    this.selectEvent.emit(this.userName);
  }
}
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   userImgPath = computed(() => this.selectedUser().avatar);

//   get userName() {
//     return this.selectedUser().uname;
//   }
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
