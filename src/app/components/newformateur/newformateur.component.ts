import {Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {FormateurService} from "../../services/formateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newformateur',
  templateUrl: './newformateur.component.html',
  styleUrl: './newformateur.component.css'
})
export class NewformateurComponent implements OnInit{
  formateurFormGroup?: FormGroup
  submitted = false;
  idformateur: number|null=null;

  constructor(private fb: FormBuilder,private formateurService: FormateurService,private router: Router) {
  }

  ngOnInit() {
    this.formateurFormGroup = this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      mail:["",Validators.required],
    });
  }

  onSaveFormateur(){
    this.submitted = true;
    console.log(this.formateurFormGroup?.value);
    if(this.formateurFormGroup?.invalid){return;}
    this.formateurService.saveFormateur(this.formateurFormGroup?.value).subscribe(
      data=>{alert("Formateur ajouté!"); this.idformateur=data.idformateur; this.router.navigateByUrl('formateur')},
      err=>{alert(err.headers.get("error"));}
    );
  }

}
