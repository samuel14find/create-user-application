import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  onSubmitForm(form) {
    this.usersService.addUser(form.value);
  }

  ngOnInit() {
  }

}
