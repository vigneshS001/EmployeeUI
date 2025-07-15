import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  user: any = {};
  ngOnInit(): void {
    
  }

  // onLogin() {

  //   console.log('Login clicked');
  //   if (this.user.userName && this.user.password) {
  //     localStorage.setItem('user', JSON.stringify(this.user));
  //   } 
  //   this.router.navigate(['/dashboard/home']);
  // }
   userName: string = '';
  password: string = '';

  onLogin() {
    if (this.userName === 'admin' && this.password === 'admin') {
      // Store login status
      localStorage.setItem('loggedIn', 'true');
      // Navigate to dashboard
      this.router.navigate(['/main/dashboard/home']);
    } else {
      alert('Invalid credentials');
    }
  }

}
