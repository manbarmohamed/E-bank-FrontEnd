import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../services/beneficiary.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-beneficiary-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './beneficiary-list.component.html',
  styleUrl: './beneficiary-list.component.scss'
})
export class BeneficiaryListComponent implements OnInit {
  beneficiaries: any[] = [];

  constructor(private beneficiaryService: BeneficiaryService) {}

  ngOnInit() {
    this.beneficiaryService.getAllBeneficiaries().subscribe(
      beneficiaries => this.beneficiaries = beneficiaries
    );
  }

  addBeneficiary(name: string, accountNumber: string) {
    const newBeneficiary = { nom: name, numeroCompte: accountNumber };
    this.beneficiaryService.addBeneficiary(newBeneficiary).subscribe(
      beneficiary => this.beneficiaries.push(beneficiary)
    );
  }

  deleteBeneficiary(id: number) {
    this.beneficiaryService.deleteBeneficiary(id).subscribe(
      () => this.beneficiaries = this.beneficiaries.filter(b => b.id !== id)
    );
  }
}