import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Practice } from '../../models/practice';
import { FirebasedbService } from '../../services/firebasedb.service';
import { DetailComponent } from '../detail/detail.component';
import firebase from 'firebase/app';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-show-practices',
  templateUrl: './show-practices.component.html',
  styleUrls: ['./show-practices.component.css']
})
export class ShowPracticesComponent implements OnInit {

  public practices: Practice[];
  public practice: Practice;
  public nameFilter: string;

  public user: firebase.User;
  public error: boolean = false;
  public allowed: boolean = false;


  constructor(private firedb: FirebasedbService, private router:Router, private fireauth: FirebaseauthService) {

    this.firedb.getPractices().subscribe(
      (originalPractices: Practice[]) => {
        this.practices = originalPractices;
      }
    )
  }


  seeDetails(i:number){
    this.practice=this.practices[i];
    this.router.navigate(["show",i]);
  }

  
  update(i:number){
    this.practice=this.practices[i];
    this.router.navigate(["update",i]);
  }

  deletePractice(i:number){
    this.firedb.deletePractices(this.practices[i].id);
  }

  ngOnInit(): void {

    //Aixo te que estar en la pagina que sera index

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
              this.router.navigate(['/show']);
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
    this.router.navigate(['/show']);
    console.log("FF")
  }
}