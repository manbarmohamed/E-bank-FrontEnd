import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { BeneficiaryListComponent } from './components/beneficiary-list/beneficiary-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AuthGuard } from './guard/auth-guard.guard';



export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'accounts', component: AccountListComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionListComponent, canActivate: [AuthGuard] },
  { path: 'beneficiaries', component: BeneficiaryListComponent, canActivate: [AuthGuard] },
  { path: 'cards', component: CardListComponent, canActivate: [AuthGuard] }
];
