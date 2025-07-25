import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  {
      path: '',
      component: AuthComponent,
      children: [
        { path: '', component: LoginComponent },
        { path: '**', redirectTo: 'login', pathMatch: 'full' }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
