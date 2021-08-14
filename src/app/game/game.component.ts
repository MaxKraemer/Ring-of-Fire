import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation= false;
  currentCard: string;
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
    
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;

  }

}