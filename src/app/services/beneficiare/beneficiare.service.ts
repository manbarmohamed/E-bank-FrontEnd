import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiare } from '../../models/beneficiare';

@Injectable({
  providedIn: 'root'
})
export class BeneficiareService {
  private url ='http://localhost:8081/api/beneficiaire/'

  constructor(private http: HttpClient) { }

  getBeneficiaire(): Observable<Beneficiare[]>{
    return this.http.get<Beneficiare[]>(this.url+"all")
  }

  getBeneficiaireById(id: number): Observable<Beneficiare> {
    return this.http.get<Beneficiare>(this.url+'findById/'+id);
  }

  addBeneficiaire(beneficiaire: Beneficiare): Observable<Beneficiare> {
    return this.http.post<Beneficiare>(this.url+"add", beneficiaire);
  }

  updateBeneficiaire(id: number, beneficiaire: Beneficiare): Observable<Beneficiare> {
    return this.http.put<Beneficiare>(this.url+"edit/"+id, beneficiaire);
  }

  deleteBeneficiaire(id: number): Observable<void> {
    return this.http.delete<void>(this.url+"del/"+id);
  }
}
