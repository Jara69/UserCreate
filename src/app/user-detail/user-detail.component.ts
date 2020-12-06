import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {delay} from 'rxjs/operators';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUserEntity;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id'); // '1'
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .subscribe(
          u => {
            if (u) {
              this.user = u;
            } else {
              this.router.navigateByUrl('/users');
            }
          },
          e => {
            console.error(e);
          }
        );
    });
  }

}
