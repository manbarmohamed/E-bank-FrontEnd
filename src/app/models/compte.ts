import { Beneficiare } from "./beneficiare";
import { CarteBancaire } from "./carte-bancaire";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Compte {
    id:number,
    type:CompteType,
    solde:number,
    dateCreation: Date,
    actif:boolean,
    user: User,
    listOfTransaction : Array<Transaction>,
    listOfCarteBancaire : Array<CarteBancaire>,
    listOfBeneficiare : Array<Beneficiare>,

}

enum CompteType{
    COURANT, 
    EPARGNE
}