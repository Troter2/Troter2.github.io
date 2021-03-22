import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  constructor(private auth: AngularFireAuth) {}

  get allowedUsers():Observable<firebase.User> {
    return this.auth.user;
  }

  login(): Promise<firebase.auth.UserCredential>{
    let authenticator= new firebase.auth.GoogleAuthProvider();
    authenticator.setCustomParameters({prompt: 'select_account'});
    return this.auth.signInWithPopup(authenticator);
  }

  logout(): Promise<void>{
    return this.auth.signOut();
  }

  
}
