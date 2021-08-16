import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation= false;
  currentCard: any = '';
  game!: Game; //variable for game
  

  constructor( private firestore: AngularFirestore, public dialog: MatDialog) {

   }

  ngOnInit(): void {

    this.newGame();
    this
      .firestore
      .collection('games')
      .valueChanges()
      .subscribe((game) =>{

      console.log('Game update', game);

    });
    
  }

  newGame(){
    
    this.game = new Game();
  
  
  }

  pickCard(){
    if (!this.pickCardAnimation) {
      
      this.pickCardAnimation = true;
      console.log(this.currentCard);
      this.currentCard = this.game.stack.pop(); // show with a click a diffrent card
     
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // show a diffrent player 
      setTimeout(() => {
      
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false; // animation from the deck
      
      }, 1000);
    
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name) => {
      this.game.players.push(name);
     
    });
  }

} 


