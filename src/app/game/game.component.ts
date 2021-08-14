import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation= false;
  currentCard: any = '';
  game!: Game; //variable for game
  

  constructor() {

    
   }

  ngOnInit(): void {

    this.newGame();
  }

  newGame(){
    
    this.game = new Game();
    console.log(this.game);
  
  }

  pickCard(){
    if (!this.pickCardAnimation) {
      
      this.pickCardAnimation = true;
      console.log(this.currentCard);
      this.currentCard = this.game.stack.pop(); // show with a click a diffrent card
     
      
      setTimeout(() => {
      
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false; // animation from the deck
      
      }, 1000);
    
    }
  }

}
