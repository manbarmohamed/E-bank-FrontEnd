import { Compte } from "./compte";
import { Transaction } from "./transaction";

export interface Beneficiare {
    id:number,
    nom:string,
    numeroCompte:string,
    banque:String,
    compte:Compte,
    listOfTransaction:Array<Transaction>
}
