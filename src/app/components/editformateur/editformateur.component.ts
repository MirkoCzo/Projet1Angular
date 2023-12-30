import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormateurService} from "../../services/formateur.service";
import {Formateur} from "../../entities/formateur.entities";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-editformateur',
  templateUrl: './editformateur.component.html',
  styleUrl: './editformateur.component.css'
})
export class EditformateurComponent implements OnInit{
  formateurFormGroup?: FormGroup;
  submitted=false;
  idFormateur: number;

  constructor(private formateurService: FormateurService, private fb:FormBuilder, activatedRoute: ActivatedRoute) {
    this.idFormateur=activatedRoute.snapshot.params.idformateur;
  }
  ngOnInit(): void {
    this.formateurService.getFormateur(this.idFormateur).subscribe(
        formateur=>{this.formateurFormGroup=this.fb.group({
          idformateur:[formateur.idformateur,Validators.required],
          nom:[formateur.nom,Validators.required],
          prenom:[formateur.prenom,Validators.required],
          mail:[formateur.mail,Validators.required]
        })
        });
  }

  onUpdateFormateur()
  {
    this.submitted = true;
    if (this.formateurFormGroup?.invalid){return;}
    this.formateurService.updateFormateur(this.formateurFormGroup?.value).subscribe(
        data=>{alert("Mise à jour effectuée")},
        err=>{alert(err.headers.get("error"));}
    )
  }


}
