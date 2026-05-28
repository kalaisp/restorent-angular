import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertifyService } from '../services/alertify.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterModule, CommonModule,BsDropdownModule]
})
export class NavBarComponent implements OnInit {
  loggedinUser: string | null = null;
  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }
  loggedin(){
    this.loggedinUser=localStorage.getItem('token');
    return this.loggedinUser;

  }
  onlogout(){
    localStorage.removeItem('token');
    this.alertify.success('you are logged out');
  }

}
