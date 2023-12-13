import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-newsessioncours',
  templateUrl: './newsessioncours.component.html',
  styleUrl: './newsessioncours.component.css'
})
export class NewsessioncoursComponent implements OnInit, OnChanges{
  @Input() coursact?: FormGroup;
  @Input() idCours?: number;
  @Output() newSessionCours = new EventEmitter<SessionCours>(); // Propriété de sortie pour émettre la nouvelle session de cours
  sessionCoursFormGroup?: FormGroup;
  submitted = false;
  sc?: SessionCours;

  constructor(private fb: FormBuilder, private sessionCoursService: SessionCoursService) {
  }

  ngOnChanges(changes: SimpleChanges): void {   // Méthode appelée lorsque des changements sont détectés dans les propriétés d'entrée
    if ('coursact' in changes) {
      // Appeler la méthode updateForm lorsque coursact change
      this.updateForm();
    }
  }

  updateForm(): void {
    if (this.coursact) {
      this.sessionCoursFormGroup?.get('idcours')?.setValue(this.coursact.get('idcours')?.value);
    }
  }
  ngOnInit(): void {
    this.updateForm();    // Appeler la méthode updateForm pour s'assurer que le formulaire est à jour dès le début
    this.sessionCoursFormGroup = this.fb.group({
        date_debut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
        date_fin: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
        nbreinscrits: ['1'],
        idlocal: ['1'],
        idcours: [this.coursact?.get('idcours')?.value]
      })
  }


  onSaveSessionCours(): void{
    this.submitted = true;
    var nsc = this.sessionCoursFormGroup?.value;
    nsc.cours=this.coursact?.value;
    console.log(nsc);
    this.sessionCoursService.save(nsc).subscribe(
      data =>{alert("sauvegarde ok");this.sc=data;this.newSessionCours.emit(data)},
      err => {alert(err.headers.get("error"));
      });
  }

}
