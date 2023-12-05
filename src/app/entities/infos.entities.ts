import {SessionCours} from './sessionCours.entities'
import {Formateur} from "./formateur.entities";

export interface Infos{
    formateur: Formateur;
    sessionCours: SessionCours;
}
