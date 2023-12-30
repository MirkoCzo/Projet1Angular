import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";
import {getLocaleDateFormat} from "@angular/common";

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrl: './session-cours.component.css'
})
export class SessionCoursComponent implements OnInit{
  sessionCours: SessionCours|null=null;
  sessionCoursList?: SessionCours[];
  idsession: number=0;
  searchType: string= '';

  constructor(private sessionCoursService: SessionCoursService, private router: Router) {
  }
  ngOnInit(): void {
  }

  onSearch(){
    this.sessionCours=null;
    this.sessionCoursService.getSessionCours(this.idsession).subscribe(
      {next : data => this.sessionCours=data,
      error: error =>alert("Session introuvable")}
    )
  }
  onSearchByIdCours(value: any)
  {
    this.sessionCoursService.getSessionCoursCours(value.idcours).subscribe(
      data =>{
        this.sessionCoursList = data
      }
    )
  }

  onSearchAllSessionCours(){
    this.sessionCoursService.getAllSessionCours().subscribe(
        data =>{
          this.sessionCoursList= data;
          console.log(data)
        }
    )
  }

  onSearchSessionCoursByNbreInscrits(value: any){
    this.sessionCoursService.getSessionCoursByNbreInscrits(value.nbreinscrits).subscribe(
        data =>{
          this.sessionCoursList = data
        }
    )
  }
  onNewSessionCours()
  {
    this.router.navigateByUrl('newSessionCours');
  }
  onEdit(sc: SessionCours)
  {
    this.router.navigateByUrl("editsessioncours/"+sc.idsessioncours)
  }

}
