import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { LoginSignupComponent} from './login-signup/login-signup.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: '**', component: LoginSignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
