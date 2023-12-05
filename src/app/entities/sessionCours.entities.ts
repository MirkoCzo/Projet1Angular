import {Local} from "./local.entities";
import {Cours} from "./cours.entities";
export interface SessionCours{
  idsessioncours: number;
  date_debut: Date;
  date_fin: Date;
  nbreinscrits: number;
  local: Local;
  cours: Cours;
}
