import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

var firebase = require('firebase');


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$ : Object;
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router
  ) { 
    this.user$ = this.afAuth.authState;
  }

  public googleSignIn(): Observable<Object> {
    return from(this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  public facebookSignIn(): Observable<Object> {
    return from(this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }

  public logOut(): Promise<any> {
    return firebase.auth().signOut();
  }
}
