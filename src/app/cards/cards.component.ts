import { Component, OnInit } from '@angular/core';

import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {

  gameIsReady: boolean = false;
  dealerCard: any;
  playerCard: any;
  result: string;

  constructor(private cardsService: CardsService) { }

  drawCards() {
    this.cardsService.drawCards().subscribe(data => {
      if(data.cards[0].value == data.cards[1].value) {
        this.drawCards();
      } else {
        [this.dealerCard, this.playerCard] = data.cards;
        this.gameIsReady = true;
      }
    });
  }

  play(choice) {
    this.gameIsReady = false;
    let faceCards = {
      "JACK": 11,
      "QUEEN": 12,
      "KING": 13,
      "ACE": 14
    }
    let dealerCardValue = faceCards[this.dealerCard.value] || Number(this.dealerCard.value);
    let playerCardValue = faceCards[this.playerCard.value] || Number(this.playerCard.value);
    let playerCardHigher = playerCardValue > dealerCardValue;
    if(choice == playerCardHigher) {
      this.result = "You Win!";
    } else {
      this.result = "Better Luck Next Time";
    }
  }

  reset() {
    this.dealerCard = null;
    this.playerCard = null;
    this.result = null;
    this.drawCards();
  }

  ngOnInit() {
    this.drawCards();
  }

}
