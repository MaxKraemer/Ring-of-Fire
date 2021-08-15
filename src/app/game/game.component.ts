import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation= false;
  currentCard: any = '';
  game!: Game; //variable for game
  

  constructor(public dialog: MatDialog) {

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

} 


