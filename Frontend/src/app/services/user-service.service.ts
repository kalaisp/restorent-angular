import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
adduser(user: User) {

  let users: any[] = [];

  if (localStorage.getItem('users')) {

    users = JSON.parse(localStorage.getItem('users') as string);
    users = [user, {...users}];

  } else {
    users = [user];
  }
  localStorage.setItem('users',JSON.stringify(users));

  }
}
