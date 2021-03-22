import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public practice: Practice;
  constructor(private firedb: FirebasedbService, private router: Router, private firestore:AngularFirestore) { 
    this.practice=new Practice();
  }

  ngOnInit(): void {
  }

  addPractice(){
    this.firedb.addPractice(this.practice);
    this.router.navigate(["show"]);
  }

}
