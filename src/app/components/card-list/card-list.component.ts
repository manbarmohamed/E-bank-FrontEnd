import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { NgFor, NgIf } from '@angular/common';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  cards: any[] = [];
  accounts: any[]=[]

  constructor(private cardService: CardService, private accountService:AccountService) {}

  ngOnInit() {
    this.cardService.getAllCards().subscribe(
      cards => this.cards = cards
    );
    this.getAccounts()
  }
  getAccounts(){
    this.accountService.getAccounts().subscribe((data:any[])=>
      this.accounts=data
    )
  }

  addCard(accountId: any, type: string) {
    const newCard = { type };
    this.cardService.addCard(accountId, newCard).subscribe(
      card => this.cards.push(card)
    );
  }
  toggleCardStatus(cardId: number, isActive: boolean) {
    if (isActive) {
      this.cardService.activateCard(cardId).subscribe(
        updatedCard => {
          const index = this.cards.findIndex(card => card.id === cardId);
          if (index !== -1) {
            this.cards[index] = updatedCard;
          }
        }
      );
    } else {
      this.cardService.deactivateCard(cardId).subscribe(
        updatedCard => {
          const index = this.cards.findIndex(card => card.id === cardId);
          if (index !== -1) {
            this.cards[index] = updatedCard;
          }
        }
      );
    }
  }

  blockCard(cardId: number, reason: string) {
    this.cardService.blockCard(cardId, reason).subscribe(
      blockedCard => {
        const index = this.cards.findIndex(card => card.id === cardId);
        if (index !== -1) {
          this.cards[index] = blockedCard;
        }
      }
    );
  }
}
