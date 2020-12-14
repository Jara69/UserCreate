import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: UserCreateComponent},
  { path: 'detail', component: UserDetailComponent},
  { path: 'user', component: UsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
