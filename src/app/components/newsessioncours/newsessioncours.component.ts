import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";
import {formatDate} from "@angular/common";
import {LocalService} from "../../services/local.service";


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

  constructor(private fb: FormBuilder, private sessionCoursService: SessionCoursService,private localService: LocalService) {
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
    this.updateForm();
    this.sessionCoursFormGroup = this.fb.group({
      date_Debut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      date_Fin: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      nbreinscrits: [null, [Validators.required]],
      idlocal: [null, [Validators.required]],
      idcours: this.coursact?.get('idcours')?.value,
    });
  }


  onSaveSessionCours(): void {
    this.submitted = true;
    const idLocal = this.sessionCoursFormGroup?.get('idlocal')?.value;

    if (!idLocal) {
      console.error("L'ID du local est obligatoire.");
      return;
    }

    this.localService.getLocal(idLocal).subscribe(
      local => {
        if (!local) {
          console.error("L'ID du local ne correspond à aucun local dans la base de données.");
          return;
        }

        console.log("LOCAL JSON: ", JSON.stringify(local));

        const newSessionCours = {
          ...this.sessionCoursFormGroup?.value,
        };
        newSessionCours.cours = this.coursact?.value;
        newSessionCours.local = local;

        console.log("Valeur de new session cours : ", JSON.stringify(newSessionCours));
        this.sessionCoursService.save(newSessionCours).subscribe(
          data => {
            alert("Sauvegarde OK");
            this.sc = data;
            this.newSessionCours.emit(data);
          },
          err => {
            alert("Erreur lors de la sauvegarde : " + err.error);
          }
        );
      },
      err => {
        alert("Local d'ID:"+idLocal+" pas présent dans la BD");
      }
    );
  }






}
