import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Cours} from '../entities/cours.entities';
@Injectable({providedIn:"root"})

export class CoursService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  getCours(idcours: number): Observable<Cours>{
    return this.http.get<Cours>(this.host + '/cours/' + idcours);
  }

  getAllCours(): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host+'/cours/all');
  }

  findCoursByMatiere(matiere: string): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host+'/cours/matiere='+matiere);
  }

  findCoursByHeures(heures: number): Observable<Cours>{
    return this.http.get<Cours>(this.host+'/cours/heures='+heures);
  }

  deleteCours(c: Cours): Observable<void>{
    return this.http.delete<void>(this.host+'/cours/'+c.idcours);
  }

  saveCours(c: Cours): Observable<Cours>{
    return this.http.post<Cours>(this.host+'/cours/',c);
  }

  updateCours(c: Cours): Observable<Cours>{
    return this.http.put<Cours>(this.host+'/cours/'+c.idcours,c);
  }
}
