import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:8081/api/compte';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/findall`);
  }

  getAccountsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/findByUser?utilisateurId=${userId}`);
  }

  createAccount(userId: number, typeCompte: string, soldeInitial: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/creer`, null, { params: { utilisateurId: userId.toString(), typeCompte, soldeInitial: soldeInitial.toString() } });
  }
}