import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-newcours',
  templateUrl: './newcours.component.html',
  styleUrl: './newcours.component.css'
})
export class NewcoursComponent implements OnInit{
  coursFormGroup?: FormGroup;
  submitted = false;
  idcours: number|null=null;

  constructor(private fb: FormBuilder, private coursService: CoursService) {
  }

  ngOnInit(): void{
    this.coursFormGroup = this.fb.group({
      matiere: ["",Validators.required],
      heures: ["",Validators.required]
    })
  }

  onSaveCours()
  {
    this.submitted = true;
    if(this.coursFormGroup?.invalid) {return;}

    this.coursService.saveCours(this.coursFormGroup?.value).subscribe(
      data => { alert("sauvegarde ok");this.idcours=data.idcours},
      err =>{ alert(err.headers.get("error"));
      }
    );
  }

}
