import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Local} from "../entities/local.entities";


@Injectable({providedIn:"root"})
export class LocalService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }

  getLocal(idlocal: number): Observable<Local>{
    return this.http.get<Local>(this.host+'/local/'+idlocal);
  }

  getLocalBySigle(sigle: string): Observable<Local>{
    return this.http.get<Local>(this.host+'/local/sigle='+sigle)
  }

  getLocalByPlaces(places: number): Observable<Local[]>{
    return this.http.get<Local[]>(this.host+'/local/places='+places);
  }

  getAllLocal(): Observable<Local[]>{
    return this.http.get<Local[]>(this.host+'/local/all');
  }

  save(l: Local): Observable<Local>{
    return this.http.post<Local>(this.host+'/local',l);
  }

  updateLocal(l: Local): Observable<Local>{
    return this.http.put<Local>(this.host+'/local/'+l.idlocal,l);
  }

  deleteLocal(l: Local): Observable<Local>{
    return this.http.delete<Local>(this.host+'/local/'+l.idlocal);
  }

}
