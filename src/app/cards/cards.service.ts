import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class CardsService {

  //private deckId = "";
  private cards = [];

  constructor(private http: Http) { }

  // getDeck() {
  //   return this.http.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  //     .map(response => response.json())
  //     .subscribe(data => this.deckId = data.deck_id);
  // }

  drawCards() {
    return this.http.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
      .map(response => response.json());
  }

}
