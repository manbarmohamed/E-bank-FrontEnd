import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { TransactionService } from '../../services/transaction.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  accounts: any[] = [];
  recentTransactions: any[] = [];

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      accounts => this.accounts = accounts
    );
    this.transactionService.getTransactionsByUser().subscribe(
      transactions => this.recentTransactions = transactions
    );
  }
}