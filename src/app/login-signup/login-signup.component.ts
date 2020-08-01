import { Component, OnChanges } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../services/auth.service';
var firebase = require('firebase');

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnChanges {

  title = 'EmailVerification';
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    public auth: AuthService,
    private router: Router
    ){}
  googleSignIn() {
    this.auth.googleSignIn()
    .subscribe((user)=> {
      console.log(user);
      this.auth.user$ = user;
      this.router.navigate(['user']);
    })
  }
  facebookSignIn() {
    console.log('Inside facebook');
    console.log(this.router);
    this.router.navigate(['/user']);
  }
  ngOnChanges() {
    
  }

}
