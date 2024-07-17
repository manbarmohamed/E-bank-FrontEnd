import { Compte } from "./compte"

export interface CarteBancaire {
    id:number,
    numero: string,
    dateExpiration:Date,
    type: CarteType
    active:boolean,
    bloque:boolean,
    raisonBlocage:string,
    compte:Compte
}

enum CarteType{
    CREDIT, 
    DEBIT
}
