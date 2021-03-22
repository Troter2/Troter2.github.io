import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Practice } from '../models/practice';
@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(private firestore: AngularFirestore) { }

  getPractices(): Observable<Practice[]> {
    return this.firestore.collection<Practice>("practiques").valueChanges({idField : 'id'});
  }

  addPractice(practice: Practice) {
    this.firestore.collection("practiques").add({
      titul: practice.titul,
      data: practice.data,
      contingut: practice.contingut,
      tag: practice.tag
    });
  }

  updatePractices(practice: Practice, id: string) {
    this.firestore.collection("practiques").doc(id).update({
      titul: practice.titul,
      data: practice.data,
      contingut: practice.contingut,
      tag: practice.tag
    });
  }

  deletePractices(id: string) {
    this.firestore.collection<Practice>("practiques").doc(id).delete();
  }

  
  checkAllowedUser(correo: string): Observable<any[]> {
    return this.firestore.collection("allowed-users", ref => this.queryByCorreo(correo, ref)).valueChanges();
  }

  private queryByCorreo(correo: string, ref: any) {
    return ref.where("correo","==", correo);
  }
}
