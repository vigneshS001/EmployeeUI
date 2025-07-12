import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = '/dashboard/home';
  }
  }

}
