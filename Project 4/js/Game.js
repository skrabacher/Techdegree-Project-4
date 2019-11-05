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
        console.log(this.activePhrase);
    }

    checkForWin() { //4th try idea: use reduce method to convert matchedLettersLi to one giant string, then use the includes method on that string to determine if 'hide' is in the string. if hide is not in the string then the user has won
        //FOURTH TRY
        let allLetters = document.querySelectorAll('.letter').length;
        let shownLetters = document.querySelectorAll('.show').length;
        console.log(document.querySelectorAll('.letter').length);
        console.log(document.querySelectorAll('.show').length);
        if (allLetters === shownLetters) { //if LI node's class contains 'hide' then use has not won, return FALSE. else if there are no hide classes then user has won return TRUE
            return true;
        } else {
            return false;
        }
        };


        //THIRD TRY
        // let matchedLettersLi = document.querySelectorAll('#phrase ul li');// selects LI's that represent each character in the phrase
        // matchedLettersLi.forEach(li => { //iterates through each LI node
        //     console.log(li.className.toString()); //
        //     let liClassString = li.className.toString(); //gets class value and converts to string so that includes method  can be used
        //     console.log(liClassString);
        // if (liClassString.includes('hide') ) { //if LI node's class contains 'hide' then use has not won, return FALSE. else if there are no hide classes then user has won return TRUE
        //     return false;
        // } else {
        //     return true;
        // }
        // });
        
        //SECOND TRY
        // let matchedLettersLi = document.querySelectorAll('#phrase ul li');// selects LI's that represent each character in the phrase
        // matchedLettersLi = matchedLettersLi.values();
        // console.log(matchedLettersLi);

        // if (matchedLettersLi.includes('hide')) {
        //     return false;
        // } else {
        //     return true;
        // }

        //FIRST TRY
    //     let matchedLettersLi = document.querySelectorAll('#phrase ul li');// selects LI's that represent each character in the phrase
    //     console.log(matchedLettersLi);
    //     matchedLettersLi.forEach(li => { //iterates through each LI element
    //     console.log(li.className);
    //     if (li.className !== 'show' && li.className !== 'space') { //if LI's class name is not show or space, then user has not won
    //       return false;
    //     } else {
    //         return true;
    //     }
    //   });
     }
    

//     `checkForWin()`: This method checks to see if the player has revealed all of the
// letters in the active phrase. (return Boolean value)


    // handleInteraction() {

    // }

 



 

