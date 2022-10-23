import { Servicesdem } from "./servicesdem";
import { Servicesoff } from "./servicesoff";
import { Solde } from "./solde";

export class User {
    nom?: string
    prenom?: string
    gender?: string
    solde?: Solde
    Profession?: string
    servicesdem?: Servicesdem[] |any
    servicesoff?: Servicesoff[] |any
    constructor(
         nom?: string, 
         prenom?: string,
         gender?: string,
         solde?: Solde,
         Profession?: string,
         servicesdem?: Servicesdem[] | any ,
         servicesoff?: Servicesoff[] |any
    ){}
}