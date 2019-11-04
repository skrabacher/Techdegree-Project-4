/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game { // creates game class
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
   
    createPhrases() { // creates and returns an array of phrase objects
        const phrasesArray = [
            new Phrase("knock on wood"),
            new Phrase("dime a dozen"),
            new Phrase("easy as pie"),
            new Phrase("break a leg"),
            new Phrase("for the birds")
        ];
       return phrasesArray;

    }
    getRandomPhrase() { //generates random integer from 0-4 the uses random the integer to select the phrase indexed at that number in the array
        const index = Math.floor(Math.random() * Math.floor(this.phrases.length)); // generates random integer from 0 to one less than the array length
        return game.phrases[index]; //returns one random phrase as a string
    }

    startGame() { //hides the start screen, gets a phrase for the new game and displays gameboard for user
        const startScreenOverlay = document.querySelector('#overlay');
        startScreenOverlay.style.display = 'none'; //hides start screen overlay
        let phraseObject = this.getRandomPhrase(); //selects a phrase object for the new game
        console.log(phraseObject);
        this.activePhrase = phraseObject; //assigns the selected phrase to the activePhrase property in the Game Class
        this.activePhrase.addPhraseToDisplay(); //displays corresponding phrase gameboard
    }

   /* The `startGame()` method hides the start screen overlay (the `div` element with an `id` of
`overlay`), calls the `getRandomPhrase()` method to select a Phrase object from the Game
object’s array of phrases, and then adds the phrase to the gameboard by calling the
`addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
easily accessed throughout the game. */
}


 

