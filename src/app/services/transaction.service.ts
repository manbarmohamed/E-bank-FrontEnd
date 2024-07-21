import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8081/api/transaction';

  constructor(private http: HttpClient) { }

  getAllTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/All`);
  }

  getTransactionsByUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allByUser`);
  }

  getTransactionsByAccount(accountId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/AllByCompte`, { params: { id_Compte: accountId.toString() } });
  }

  addTransaction(compteId: number, beneficiaryId: number, montant: number, type: string, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, null, {
      params: { compteId: compteId.toString(), beneficiaryId: beneficiaryId.toString(), montant: montant.toString(), type, description }
    });
  }
}