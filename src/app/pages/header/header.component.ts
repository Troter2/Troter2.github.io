import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebasedbService } from '../../services/firebasedb.service';
import firebase from 'firebase/app';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: firebase.User;
  public error: boolean = false;
  public allowed: boolean = false;
  constructor(private firedb: FirebasedbService, private router: Router, private fireauth: FirebaseauthService) { }

  ngOnInit(): void {
    this.fireauth.allowedUsers.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
      }
    )
  }
  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        let correo = user.user.email;
        this.firedb.checkAllowedUser(correo).pipe(take(1)).subscribe(
          (originalCorreos: any[]) => {
            if (originalCorreos.length >= 1) {
              this.error = false;
              this.allowed = false;
              this.router.navigate(['/home']);
            } else {
              this.error = true;
              this.allowed = true;
              this.fireauth.logout();
              console.log("FF")
            }
          }
        );
      }
    ).catch(
      (error: any) => {
      }
    )
  }
  logout() {
    this.fireauth.logout();
    this.router.navigate(['/home']);
    console.log("FF")
  }
}
