import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SessionCours} from "../entities/sessionCours.entities";

@Injectable({providedIn:"root"})
export class SessionCoursService{
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  deleteSessionCours(sc : SessionCours): Observable<void>{
    return this.http.delete<void>(this.host+'/sessionCours/'+sc.idsessioncours);
  }

  save(sc: SessionCours): Observable<SessionCours>{
    return this.http.post<SessionCours>(this.host+'/sessionCours/',sc);
  }

  getSessionCours(idsessioncours: number): Observable<SessionCours>{
    return this.http.get<SessionCours>(this.host+'/sessionCours/'+idsessioncours);
  }

  updateSessionCours(sc: SessionCours): Observable<SessionCours>{
    return this.http.put<SessionCours>(this.host+'/sessionCours/'+sc.idsessioncours,sc);
  }
  getSessionCoursCours(idCours: number): Observable<SessionCours[]>{
    return this.http.get<SessionCours[]>(this.host+'/sessionCours/idcours='+idCours);
  }



}
