import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute} from '@angular/router';
var firebase = require('firebase');

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  title = 'EmailVerification';
  provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    private firebase1: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
    ){}
  googleSignIn() {
    firebase.auth().signInWithPopup(this.provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.email);
      this.router.navigate(['/user'], { relativeTo: this.route });
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  facebookSignIn() {
    this.router.navigate(['/user'], { relativeTo: this.route });
  }
  ngOnInit() {
    this.firebase1.collection('EmailPass').doc('example@example.com').valueChanges().subscribe(data => {
      console.log(data);
    });
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = result.credential.accessToken;
    //     // ...
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    //   }).catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
  }

}