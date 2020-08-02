import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataCrudService {

  constructor(
    private firebase: AngularFirestore
  ) { }

  createUser(docname, value){
    return this.firebase.collection('users').doc(docname).set(value);
  }

  readUser(docname) {
    return this.firebase.collection('users').doc(docname).get();
  }
}
