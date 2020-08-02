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
  public signUp = false;
  title = 'EmailVerification';
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    public auth: AuthService,
    private router: Router
    ){}
  public googleSignIn(): void {
    var x = firebase.auth().signInWithEmailAndPassword('example@example.com', 'example2').catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
    console.log("Here is the...");
    console.log(x);
    this.auth.googleSignIn()
    .subscribe((user)=> {
      console.log(user);
      this.auth.user$ = user;
      this.router.navigate(['user']);
    })
  }
  public facebookSignIn(): void {
    this.auth.facebookSignIn()
    .subscribe((user)=> {
      console.log(user);
      this.auth.user$ = user;
      this.router.navigate(['user']);
    })
  }

  ngOnChanges() {
    
  }

}
