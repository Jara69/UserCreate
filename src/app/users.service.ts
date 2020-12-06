import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {strict} from 'assert';

export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id = 0;
  private nextId = 1;
  private users: IUserEntity[] = [];


  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUserEntity> {
    let user: IUserEntity;
    for (const u of this.users) {
      if (id === u.id) {
        user = u;
        break;
      }
    }

    return of(user);
  }

  create(newUsername: string, newPassword: string): Observable<IUserEntity> {
    const newUser: IUserEntity = {id: this.id, username: newUsername, password: newPassword};
    if (this.users.find(u => u.username === newUsername)) {
      console.log('Tento uzivatel uz existuje');
    } else {
      this.id = this.id + 1;
      this.users.push(newUser);
      console.log(newUser);
      return of(newUser);
    }

  }
}
