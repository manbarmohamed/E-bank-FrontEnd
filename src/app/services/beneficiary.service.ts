import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private apiUrl = 'http://localhost:8081/api/beneficiaire';

  constructor(private http: HttpClient) { }

  getAllBeneficiaries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  addBeneficiary(beneficiary: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, beneficiary);
  }

  deleteBeneficiary(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/del/${id}`);
  }

  updateBeneficiary(id: number, beneficiary: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/edit/${id}`, beneficiary);
  }
}