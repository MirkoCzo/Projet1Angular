import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-newsessioncours',
  templateUrl: './newsessioncours.component.html',
  styleUrl: './newsessioncours.component.css'
})
export class NewsessioncoursComponent implements OnInit{
  @Input() coursact?: FormGroup;
  @Input() idCours?: number;
  @Output() newSessionCours = new EventEmitter<SessionCours>();
  sessionCoursFormGroup?: FormGroup;
  submitted = false;
  sc?: SessionCours;

  constructor(private fb: FormBuilder, private sessionCoursService: SessionCoursService) {
  }
  ngOnInit(): void {
    console.log(this.coursact?.get('idcours')?.value)
      this.sessionCoursFormGroup = this.fb.group({
        date_debut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
        date_fin: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
        nbreinscrits: ['1'],
        idlocal: ['1'],
        idcours: ['0']
      })
  }


  onSaveSessionCours(): void{
    this.submitted = true;
    var nsc = this.sessionCoursFormGroup?.value;
    nsc.cours=this.coursact?.value;
    console.log(this.coursact?.get('idcours')?.value+" id?");
    console.log(nsc);
    console.log(this.coursact?.value);
    this.sessionCoursService.save(nsc).subscribe(
      data =>{alert("sauvegarde ok");this.sc=data;this.newSessionCours.emit(data)},
      err => {alert(err.headers.get("error"));
      });
  }

}
