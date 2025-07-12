import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }
  onLogout() {
    localStorage.removeItem('loggedIn');
    window.location.href = '/auth';
  }

}
