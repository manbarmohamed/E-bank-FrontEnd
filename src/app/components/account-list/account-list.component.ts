import { Component, NgModule, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { TransactionService } from '../../services/transaction.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent implements OnInit {
[x: string]: any;
  accounts: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      accounts => this.accounts = accounts
    );
  }

  createAccount(type: string, initialBalance: any) {
    // Assume user ID is 1 for now. In a real app, you'd get this from the logged-in user.
    this.accountService.createAccount(1, type, initialBalance).subscribe(
      newAccount => this.accounts.push(newAccount)
    );
  }
}
