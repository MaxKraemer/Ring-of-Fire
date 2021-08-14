export class Game {
    //properties 
    public players: string [] = ['Max', 'Melina', 'Dennis', 'Eva'];
    public stack: string [] = [];
    public playedCards: string [] = [];
    public currentPlayer: number = 0;
    
    /**
     * 
     * Will shuffle the card before the game starts
     */
    
    constructor(){
        
        // loads our array with the diffrent kinds cards
        for (let i = 1; i < 14; i++) {
            
            this.stack.push('spade_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i); 
        }
        
        shuffle(this.stack);
    }
}

/**
 * 
 * @param array = stack
 * @returns shuffle the stack
 */

function shuffle(array:any) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }