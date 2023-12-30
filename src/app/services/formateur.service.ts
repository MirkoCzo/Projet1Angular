import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Formateur} from "../entities/formateur.entities";


@Injectable({providedIn:"root"})

export class FormateurService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  getFormateur(idformateur: number): Observable<Formateur>{
    return this.http.get<Formateur>(this.host+'/formateur/'+idformateur);
  }

  getAllFormateur(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.host+'/formateur/all');
  }

  findFormateurByNomPrenom(nom: string, prenom: string): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.host+'/formateur/nomPrenom/'+nom+'/'+prenom);
  }

  findFormateurByMail(mail: string): Observable<Formateur>{
    return this.http.get<Formateur>(this.host+'/formateur/mail/'+mail)
  }

  deleteFormateur(f: Formateur): Observable<void>{
    return this.http.delete<void>(this.host+'/formateur/'+f.idformateur);
  }

  saveFormateur(f: Formateur): Observable<Formateur>{
    return this.http.post<Formateur>(this.host+'/formateur',f);
  }

  updateFormateur(f: Formateur): Observable<Formateur>{
    return this.http.put<Formateur>(this.host+'/formateur/'+f.idformateur,f);
  }
}

