import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SessionCours } from "../../entities/sessionCours.entities";
import { SessionCoursService } from "../../services/sessionCours.service";


@Component({
  selector: 'app-editsessioncours',
  templateUrl: './editsessioncours.component.html',
  styleUrl:'./editsessioncours.component.css'
})

export class EditsessioncoursComponent implements OnInit {
  sessionCoursFormGroup?: FormGroup;
  submitted = false;
  @Input() sessionCours?: SessionCours;
  deleted = false;

  constructor(private sessionCoursService: SessionCoursService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.sessionCoursFormGroup = this.fb.group({
      idsessioncours: [this.sessionCours?.idsessioncours],
      date_debut: [this.sessionCours?.date_debut, Validators.required],
      date_fin: [this.sessionCours?.date_fin, Validators.required],
      nbreinscrits: [this.sessionCours?.nbreinscrits, Validators.required],
      idlocal: [this.sessionCours?.local?.idlocal, Validators.required],
      idcours: [this.sessionCours?.cours?.idcours, Validators.required],
    });
  }


  onUpdateSessionCours(): void {
    this.submitted = true;
    if (this.sessionCoursFormGroup?.invalid) {
      return;
    }

    let sessioncoursMaj: SessionCours = this.sessionCoursFormGroup?.value;
    console.log(sessioncoursMaj.date_debut);
    console.log(sessioncoursMaj.date_fin);
    if (this.sessionCours) {
      sessioncoursMaj.local = this.sessionCours.local;
      sessioncoursMaj.cours = this.sessionCours.cours;

      this.sessionCoursService.updateSessionCours(sessioncoursMaj).subscribe({
        next: data => alert('Mise à jour de la session effectuée'),
        error: err => alert(err.headers.get("error"))
      })
    }
  }

  onDeleteSessionCours() {
    let v = confirm("êtes vous sur de vouloir supprimer?");
    if (v) {
      this.sessionCoursService.deleteSessionCours(this.sessionCoursFormGroup?.value).subscribe(data => {
          alert("effacement reussi");
          this.deleted = true;
        },
        err => { alert(err.headers.get("error")); });
    }
  }
}
