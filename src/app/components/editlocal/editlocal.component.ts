import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalService} from "../../services/local.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editlocal',
  templateUrl: './editlocal.component.html',
  styleUrl: './editlocal.component.css'
})
export class EditlocalComponent implements OnInit{
  localFormGroup?: FormGroup;
  submitted = false;
  idLocal: number;

  constructor(private localService: LocalService,private fb: FormBuilder,private router: Router,activatedRoute: ActivatedRoute) {
    this.idLocal=activatedRoute.snapshot.params.idlocal;
  }

  ngOnInit() {
    this.localService.getLocal(this.idLocal).subscribe(
      local=>{this.localFormGroup = this.fb.group({
        idlocal:[local.idlocal,Validators.required],
        sigle:[local.sigle,Validators.required],
        places:[local.places,Validators.required],
        description:[local.description]
      })});
  }

  onUpdateLocal(){
    this.submitted=true;
    if(this.localFormGroup?.invalid) {return;}

    this.localService.updateLocal(this.localFormGroup?.value).subscribe(
      data =>{alert("Mise à jour du local effectuée"); this.router.navigateByUrl("local")},
      err => {alert(err.headers.get("error"));
      });
  }

}
