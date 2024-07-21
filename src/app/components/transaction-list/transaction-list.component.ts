import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { NgFor } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { BeneficiaryService } from '../../services/beneficiary.service';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {
  transactions: any[] = [];
  accounts: any[] = [];
  beneficiaries: any[] = [];
  

  constructor(private transactionService: TransactionService, private accountService: AccountService,
    private beneficiaryService: BeneficiaryService
  ) {}

  ngOnInit() {
    this.transactionService.getAllTransactions().subscribe(
      transactions => this.transactions = transactions
    );
    this.getAccounts()
    this.getBeneficiaries()
  }
  getAccounts(){
    this.accountService.getAccounts().subscribe((data:any[])=>
      this.accounts=data
    )
  }
  getBeneficiaries(){
    this.beneficiaryService.getAllBeneficiaries().subscribe((data:any[])=>
      this.beneficiaries=data
    )
  }

  addTransaction(accountId: any, beneficiaryId: any, amount: any, type: string, description: string) {
    this.transactionService.addTransaction(accountId, beneficiaryId, amount, type, description).subscribe(
      newTransaction => this.transactions.push(newTransaction)
    );
  }
}
