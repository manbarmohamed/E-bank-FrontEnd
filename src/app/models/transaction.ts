import { Beneficiare } from "./beneficiare";
import { Compte } from "./compte";

export interface Transaction {
        id:number,
        montant:number,
        type:TransactionType,
        description:string,
        compte:Compte,
        beneficiare:Beneficiare
}

enum TransactionType{
    CREDIT,
    DEBIT
}