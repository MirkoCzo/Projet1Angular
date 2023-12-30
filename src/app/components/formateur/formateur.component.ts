import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Formateur} from "../../entities/formateur.entities";
import {FormateurService} from "../../services/formateur.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrl: './formateur.component.css'
})
export class FormateurComponent implements OnInit{
  formateurs?: Formateur[];
  formateur?: Formateur|null=null;
  searchType: string='';

  constructor(private formateurService: FormateurService,private routeur:Router) {
  }
  ngOnInit(): void {
  }

  onSearchByMail(value: any){
    console.log(value.mail);
    this.formateur=null;
    this.formateurService.findFormateurByMail(value.mail).subscribe(
      {
        next: data=>{
          this.formateur=data;
        }
      }
    );
  }

  onSearchByNomPrenom(value: any){
    console.log(value.nom,value.prenom);
    this.formateurService.findFormateurByNomPrenom(value.nom,value.prenom).subscribe(
      data=>{
        this.formateurs=data;
      }
    );
  }

  onSearchAll(){
    this.formateurService.getAllFormateur().subscribe(
      data=>{
        this.formateurs=data;
      }
    );
  }

  onDelete(f: Formateur){
    let v = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (v){
      this.formateurService.deleteFormateur(f).subscribe(
        ()=>{
          this.onSearchAll();
          alert("Suppression réussie");
          this.routeur.navigateByUrl('formateur')
        },
        err=>{
          alert(err.headers.get("error"));
        }
      )
    }
  }

  onNewFormateur(){
    this.routeur.navigateByUrl('newFormateur');
  }
  onEdit(f:Formateur){
    this.routeur.navigateByUrl('editFormateur/'+f.idformateur);
  }

}
