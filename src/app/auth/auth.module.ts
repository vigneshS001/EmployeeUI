import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotposswordComponent } from './forgotpossword/forgotpossword.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotposswordComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
