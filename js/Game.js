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
        console.log('in getRandomPhrase method');
        const index = Math.floor(Math.random() * Math.floor(this.phrases.length)); // generates random integer from 0 to one less than the array length
        return game.phrases[index]; //returns one random phrase from the phrasesArray and returns the phrase as a string
    }

    startGame() { //hides the start screen, gets a phrase for the new game and displays gameboard for user
        console.log('in startGame method');
        const startScreenOverlay = document.querySelector('#overlay');
        startScreenOverlay.style.display = 'none'; //hides start screen overlay
        let phraseObject = this.getRandomPhrase(); //selects a phrase object for the new game
        console.log(phraseObject);
        this.activePhrase = phraseObject; //assigns the selected phrase to the activePhrase property in the Game Class
        this.activePhrase.addPhraseToDisplay(); //displays corresponding phrase gameboard
        console.log(this.activePhrase);
    }

    checkForWin() { 
        //FOURTH TRY
        console.log('in checkForWin method');
        let allLetters = document.querySelectorAll('.letter').length; //get number of letters in the phrase
        let shownLetters = document.querySelectorAll('.show').length; //gets number of revealed letters in the phrase
        console.log("number of letters: ", document.querySelectorAll('.letter').length);
        console.log("number of shown letters: ", document.querySelectorAll('.show').length);
        if (allLetters === shownLetters) { //if LI node's class contains 'hide' then use has not won, return FALSE. else if there are no hide classes then user has won return TRUE
            return true;
        } else {
            return false;
        }
    };

    removeLife() {
        console.log('in removeLife method');        
        this.missed = this.missed + 1; //adds 1 to the missed property, effectively removing a life from the user
        let heartCount = this.missed - 1; //used for indexing so index position of the heart will always be one less than missed (aka the amount of hearts lost)
        console.log(this.missed);
        let hearts = document.querySelectorAll("#scoreboard ol img"); //selects and creates nodelist of the heart images
        console.log(hearts[0]);
        console.log(hearts[heartCount].src);
        hearts[heartCount].src = "images/lostHeart.png"; //finds the node at the current heart count and replaces the alive heart with a lost heart image
         if (this.missed === 5) { // if user loses all 5 hearts then game is over
             console.log('game over');
             this.gameOver(); //runs the game over method in the game class
         }
    }

    gameOver(gameWon) {
        console.log('in gameOver method');        
        const startScreenOverlay = document.querySelector('#overlay'); //selects start screen overlay element
        if (gameWon === true) {
            startScreenOverlay.style.display = 'block'; //shows start screen overlay
            startScreenOverlay.className = 'win'; // formats start page with css class for win
            document.querySelector('#game-over-message').innerHTML = 'You Won!'; // defines text content of the win message and selects element where it will be displayed
        } else {
            startScreenOverlay.style.display = 'block'; //shows start screen overlay
            startScreenOverlay.className = 'lose'; // formats start page with css class for lose
            document.querySelector('#game-over-message').innerHTML = 'Game Over'; // defines text content of the loss message and selects element where it will be displayed
        }
    }
    
    handleInteraction(clickedKey) { // takes parameter from On Screen Keyboard Event Listener in app.js file
        console.log('in handleInteraction method');        
        // console.log(clickedKey); // testing to ensure parameter was passed from app.js
        let clickedKeyStringValue = clickedKey.innerHTML.toString(); //returns the letter of the keyboard button that was clicked as a string value
        clickedKey.disabled = true; // disables the key so the user can not click it again
        // console.log(typeof clickedKeyStringValue, clickedKeyStringValue); // returns: string q
        // console.log(this.activePhrase);
        // console.log(phrase.checkLetter(clickedKeyStringValue));
        console.log(game.activePhrase.checkLetter(clickedKeyStringValue)); //NEED THIS TO RETURN false or true
        if (game.activePhrase.checkLetter(clickedKeyStringValue) === false) { // if the phrase does not include the guessed letter 
            clickedKey.classList.add('wrong');//turns the key orange if not part of phrase
            game.removeLife();//call the removeLife() method.
        } else if (game.activePhrase.checkLetter(clickedKeyStringValue) === true) {
            clickedKey.classList.add('chosen'); //turns the key dark grey if it is in the phrase
            game.activePhrase.showMatchedLetter(clickedKeyStringValue);//call the showMatchedLetter() method on the phrase
            console.log(game.checkForWin());//then call the checkForWin() method
            if (game.checkForWin() === true) {
                console.log('check for win TRUE')
                game.gameOver(game.checkForWin());
            } // If the player has won the game, also call the gameOver() method.
        }
    }
     
    resetGame() {
        console.log("in resetGame Method");

        //removes the old phrase from the game board
        let phraseUL = document.querySelectorAll('#phrase ul li'); //selects all list items that represent the board game phrase letters
        console.log(phraseUL);
        phraseUL.forEach (letter => { //Remove all `li` elements from the Phrase `ul` element.
            letter.parentNode.removeChild(letter);
        });
        // resets the onscreen keyboard so that keys are all enabled and all same gray color
        let onscreenKeyboardButtons = document.querySelectorAll('.keyrow button'); // selects all keyboard buton elements
        console.log(onscreenKeyboardButtons);
        onscreenKeyboardButtons.forEach(key => { // iterates through each button
            key.removeAttribute('disabled'); // removes disabled attribute so that the key can be clicked on again
            key.setAttribute('class', 'key'); // defines class as "key" for all keys, effectively removing chosen and wrong class
        })
        //resets all the heart images to blue hearts (full life)
        let hearts = document.querySelectorAll('.tries img');
        hearts.forEach( heart => {
            heart.setAttribute('src','images/liveHeart.png');
        })
    }
}
    


 

