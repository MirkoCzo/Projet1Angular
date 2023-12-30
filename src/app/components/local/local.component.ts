import {Component, OnInit} from '@angular/core';
import {Local} from "../../entities/local.entities";
import {LocalService} from "../../services/local.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrl: './local.component.css'
})
export class LocalComponent implements OnInit{
  locaux?: Local[];
  local?: Local|null=null;
  searchType: string = '';
  constructor(private localService: LocalService,private router: Router) {
  }
  ngOnInit(): void {
  }

  onSearchBySigle(value: any) {
    this.local = null;
    this.localService.getLocalBySigle(value.sigle).subscribe(
      {
        next: data => {
          this.local = data;
        }
      }
    );
  }





  onSearchByPlaces(value: any){
    this.localService.getLocalByPlaces(value.places).subscribe(
      data =>{
        this.locaux=data
      }
    );
  }

  onSearchAll(){
    this.localService.getAllLocal().subscribe(
      data =>{
        this.locaux=data;
      }
    );
  }

  onDelete(l: Local) {
    let v = confirm("Êtes-vous sûr de vouloir supprimer?");
    if (v) {
      this.localService.deleteLocal(l).subscribe(
        () => {
          this.onSearchBySigle(l);
          alert("Suppression réussie");
          window.location.reload();
        },
        err => {
          alert(err.headers.get("error"));
        }
      );
    }
  }


  onNewLocal(){
    this.router.navigateByUrl('newlocal');
  }

  onEdit(l: Local){
    this.router.navigateByUrl("editlocal/"+l.idlocal);
  }

}
