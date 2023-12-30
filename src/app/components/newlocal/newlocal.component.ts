import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Local} from "../../entities/local.entities";
import {LocalService} from "../../services/local.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newlocal',
  templateUrl: './newlocal.component.html',
  styleUrl: './newlocal.component.css'
})
export class NewlocalComponent implements OnInit{
  localFormGroup?: FormGroup;
  submitted = false;
  idlocal:number|null=null;

  constructor(private fb: FormBuilder, private localService: LocalService,private router: Router) {
  }

  ngOnInit(): void {
    this.localFormGroup = this.fb.group({
      sigle: ["",Validators.required],
      places: ["", [Validators.required, Validators.min(1)]],
      description:[""],
    });
  }

  onSaveLocal(){
    this.submitted=true;
    if (this.localFormGroup?.invalid){return;}

    this.localService.save(this.localFormGroup?.value).subscribe(
      data =>{alert("Local enregistré"); this.idlocal = data.idlocal; this.router.navigateByUrl('local')},
      err =>{alert(err.headers.get("error"));
      });
  }

}
