import { Router } from '@angular/router';
import { routes } from './../../app.routes';
import { AuthService } from './../../services/auth.service';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  imports: [FormsModule]
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private alertify:AlertifyService,
              private router:Router
  ) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm) {
    const token = this.authService.authuser(
      loginForm.value
    );
    if (token) {
      localStorage.setItem('token',token.username)
      this.alertify.success('Login Successful');
      this.router.navigate(['/']);
    }
    else{
      this.alertify.error('user id or password is wrong');
    }
  }
}
