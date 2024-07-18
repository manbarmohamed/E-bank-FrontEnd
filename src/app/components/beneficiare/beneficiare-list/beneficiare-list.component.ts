import { Component, OnInit } from '@angular/core';
import { Beneficiare } from '../../../models/beneficiare';
import { BeneficiareService } from '../../../services/beneficiare/beneficiare.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-beneficiare-list',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './beneficiare-list.component.html',
  styleUrl: './beneficiare-list.component.scss'
})
export class BeneficiareListComponent implements OnInit{
  beneficiare: Beneficiare[]=[]

  constructor(private beneficiareService: BeneficiareService){}
  
  ngOnInit(): void {
    this.beneficiareService.getBeneficiaire().subscribe((data:Beneficiare[])=>
    this.beneficiare=data
  )
  }

  deleteBeneficiaire(id: number): void {
    this.beneficiareService.deleteBeneficiaire(id).subscribe(() => {
      this.beneficiare = this.beneficiare.filter(b => b.id !== id);
    });
  }
}
