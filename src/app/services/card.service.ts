import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8081/api/carte';

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/findall`);
  }

  getCardsByAccount(accountId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${accountId}`);
  }

  addCard(accountId: number, card: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Add`, card, { params: { accountID: accountId.toString() } });
  }

  activateCard(cardId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${cardId}/activate`, {});
  }

  deactivateCard(cardId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${cardId}/deactivate`, {});
  }

  blockCard(cardId: number, reason: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${cardId}/block`, null, { params: { reason } });
  }
}