import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
  }

  create(): void {
    this.usersService.create(this.username, this.password).subscribe(
      user => this.router.navigateByUrl(`/user/${user.id}`)
    );

  }
}
