import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Practice } from 'src/app/models/practice';
import { FirebasedbService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public practice: Practice;
  public practices: Practice[];
  public practiceId: number;
  constructor(private firedb: FirebasedbService, private router: Router, private activateRoute: ActivatedRoute) {
    

  }

  //updatePractice(i: number){
  //  this.practices[i].
  //}

  ngOnInit(): void {
    //Activar la comprovació de la ruta actual

    this.activateRoute.params.subscribe(
      //Creació d'una funció lambda (funció sense nom i que només existeix dins del bloc de codi on es declara)
      (params: ParamMap) => {
        this.practiceId = params['id'];
        //Cal que anem a buscar el llibre corresponent
        if (params['id'] == null) {
          this.router.navigate(['show']);
        } else {
          this.practiceId = Number(params['id']);

          console.log(this.practiceId);
          this.firedb.getPractices().subscribe(
            (originalPractices: Practice[]) => {
              this.practice = originalPractices[this.practiceId];
            }
          )
        }
      }
    );
  }

  
  update(i:number){
  this.firedb.updatePractices(this.practice, this.practice.id);
  this.router.navigate(["show"]);
  }

  saveModify(i:number){

  }
}

