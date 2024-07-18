import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BeneficiareService } from '../../../services/beneficiare/beneficiare.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Beneficiare } from '../../../models/beneficiare';

@Component({
  selector: 'app-beneficiare-form',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './beneficiare-form.component.html',
  styleUrl: './beneficiare-form.component.scss'
})
export class BeneficiareFormComponent implements OnInit {
  beneficiareForm!: FormGroup;
  id!: number;
  isEditeMode = false;
  
  constructor(
    private fb:FormBuilder,
    private beneficiareService:BeneficiareService,
    private route:ActivatedRoute,
    private router: Router

  ){
    this.beneficiareForm = this.fb.group({
      nom: [''],
      banque: [''],
      numeroCompte: ['']
    });
  }
  
  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id')!;
    this.isEditeMode=!!this.id;

    if(this.isEditeMode){
      this.beneficiareService.getBeneficiaireById(this.id).subscribe((data: Beneficiare) => {
        this.beneficiareForm.setValue({
          nom: data.nom,
          banque: data.banque,
          numeroCompte: data.numeroCompte
        });
    })
  }
}
saveBeneficiaire(): void {
  const beneficiaire: Beneficiare = this.beneficiareForm.value;

  if (this.isEditeMode) {
    this.beneficiareService.updateBeneficiaire(this.id!, beneficiaire).subscribe();
    this.router.navigate(["/"])
  } else {
    this.beneficiareService.addBeneficiaire(beneficiaire).subscribe();
    this.router.navigate(["/"])
  }
}


}
