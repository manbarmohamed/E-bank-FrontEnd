import { Routes } from '@angular/router';
import { BeneficiareListComponent } from './components/beneficiare/beneficiare-list/beneficiare-list.component';
import { BeneficiareFormComponent } from './components/beneficiare/beneficiare-form/beneficiare-form.component';

export const routes: Routes = [
    { path: '', component: BeneficiareListComponent },
    { path: 'beneficiaire', component: BeneficiareFormComponent },
    { path: 'beneficiaire/:id', component: BeneficiareFormComponent }
];
