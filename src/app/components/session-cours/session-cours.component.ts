import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SessionCours} from "../../entities/sessionCours.entities";
import {SessionCoursService} from "../../services/sessionCours.service";

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrl: './session-cours.component.css'
})
export class SessionCoursComponent implements OnInit{
  sessionCours: SessionCours|null=null;
  idsession: number=0;

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
  onNewSessionCours()
  {
    this.router.navigateByUrl('newSessionCours');
  }
  onEdit(sc: SessionCours)
  {
    this.router.navigateByUrl("editsessioncours/"+sc.idsessioncours)
  }


}
