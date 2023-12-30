import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursComponent} from './components/cours/cours.component';
import {FormateurComponent} from './components/formateur/formateur.component';
import {HomeComponent} from './components/home/home.component';
import {LocalComponent} from './components/local/local.component';
import {SessionCoursComponent} from './components/session-cours/session-cours.component';
import {EditcoursComponent} from "./components/editcours/editcours.component";
import {NewcoursComponent} from "./components/newcours/newcours.component";
import {EditsessioncoursComponent} from "./components/editsessioncours/editsessioncours.component";
import {NewsessioncoursComponent} from "./components/newsessioncours/newsessioncours.component";
import {NewlocalComponent} from "./components/newlocal/newlocal.component";
import {EditlocalComponent} from "./components/editlocal/editlocal.component";
import {NewformateurComponent} from "./components/newformateur/newformateur.component";
import {EditformateurComponent} from "./components/editformateur/editformateur.component";
import {InfosComponent} from "./components/infos/infos.component";

const routes: Routes = [
  {path: 'cours', component: CoursComponent},
  {path: 'formateur', component: FormateurComponent},
  {path: '', component: HomeComponent},
  {path:'infos',component:InfosComponent},
  {path: 'local', component: LocalComponent},
  {path: 'sessionCours', component: SessionCoursComponent},
  {path:"newCours",component: NewcoursComponent},
  {path:"editCours/:idcours",component:EditcoursComponent},
  {path:"newSessionCours",component: NewsessioncoursComponent},
  {path:"editsessioncours/:idsessioncours",component: EditsessioncoursComponent},
  {path:"newlocal",component: NewlocalComponent},
  {path:"editlocal/:idlocal",component: EditlocalComponent},
  {path:"newFormateur",component: NewformateurComponent},
  {path:"editFormateur/:idformateur",component:EditformateurComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
