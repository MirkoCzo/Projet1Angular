import { Component, OnInit } from '@angular/core';
import {Cours} from "../../entities/cours.entities";
import {CoursService} from "../../services/cours.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit{
  listcours?: Cours[];
  cours?: Cours;
  searchType: string = '';


  constructor(private coursService: CoursService, private router:Router) {
  }

  ngOnInit(): void{

  }

  onSearch(value: any){
    this.coursService.findCoursByMatiere(value.matiere).subscribe(
      data=>{
        this.listcours = data
      }
    )
  }

  onSearchAll()
  {
    this.coursService.getAllCours().subscribe(
      data =>{
        this.listcours = data
      }
    )
  }
  onSearchByHeures(value: any)
  {
    this.coursService.findCoursByHeures(value.heures).subscribe(
      data=>{
        this.listcours = data
      }
    )
  }

  onNewCours(){
    this.router.navigateByUrl('newCours');
  }

  onDelete(c: Cours) {
    let v = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (v) {
      this.coursService.deleteCours(c).subscribe(
        () => { // Fonction de succès
          this.onSearch(c);
        },
        err => { // Fonction d'erreur
          alert(err.headers.get("error"));
        }
      );
    }
  }

  onEdit(c: Cours)
  {
    this.router.navigateByUrl('editCours/'+c.idcours);
  }


}
