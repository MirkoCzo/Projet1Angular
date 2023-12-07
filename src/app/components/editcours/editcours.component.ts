import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editcours',
  templateUrl: './editcours.component.html',
  styleUrl: './editcours.component.css'
})
export class EditcoursComponent implements OnInit{
  coursFormGroup?: FormGroup;
  submitted = false;
  idCours: number;
  sessionCours? : SessionCours[];

  constructor(private coursService: CoursService,private sessionCoursService: SessionCoursService,private fb:
  FormBuilder,activatedRoute: ActivatedRoute) {
    this.idCours=activatedRoute.snapshot.params.idcours;
  }
  ngOnInit(): void {
    this.coursService.getCours(this.idCours).subscribe(
      cours =>{this.coursFormGroup = this.fb.group({
        idcours: [cours.idcours,Validators.required],
        matiere: [cours.matiere, Validators.required],
        heures: [cours.heures, Validators.required]
      })
      });
  }

  onUpdateCours(): void{
    this.submitted = true;
    if (this.coursFormGroup?.invalid) {return;}

    this.coursService.updateCours(this.coursFormGroup?.value).subscribe(
      data =>{alert("Mise à jour effectuée")},
      err =>{ alert(err.headers.get("error"));}
    )
  }

  onSeeSessionCours(): void{
    this.sessionCoursService.getSessionCoursCours(this.idCours).subscribe(
      data =>{this.sessionCours=data}
    )
  }


  onAddSessionCours(sc:SessionCours): void{
    this.sessionCours?.push(sc);
  }

}
