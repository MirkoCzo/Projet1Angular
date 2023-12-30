import {Local} from "./local.entities";
import {Cours} from "./cours.entities";
export interface SessionCours{
  idsessioncours: number;
  date_Debut: Date;
  date_Fin: Date;
  nbreinscrits: number;
  local: Local;
  cours: Cours;
}
