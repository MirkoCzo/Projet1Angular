import {Local} from "./local.entities";
import {Cours} from "./cours.entities";
export interface SessionCours{
  idsessioncours: number;
  date_debut: string;
  date_fin: string;
  nbreinscrits: number;
  local: Local;
  cours: Cours;
}
