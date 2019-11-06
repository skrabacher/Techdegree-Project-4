/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase { //creates phrase class
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();//creates phrase property that converts input to lowercase
     }

     addPhraseToDisplay() {
      let phraseCharactersArray = this.phrase.split(''); //selects the phrase and returns array consisting of each character in the phrase
      phraseCharactersArray.forEach(character => {
          if (character === " ") { //if the character is a space
            const li = document.createElement('li'); // creates LI node
            li.className = 'space'; // adds space class to li node
            li.textContent = ' '; //defines li text content
            document.querySelector('#phrase ul').appendChild(li) // appends li to 

          } else {
             const li = document.createElement('li'); // creates LI node
             li.className = `hide letter ${character}`; // adds letter class to li node
             li.textContent = `${character}`; //defines li text content
             document.querySelector('#phrase ul').appendChild(li) // appends li to 
          }
      });
     }
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
     checkLetter(letter) { //Checks to see if the letter selected by the player matches a letter in the phrase.
      console.log(letter);
      console.log("in the phrase.checkLetter method");
      let phraseCharactersArray = this.phrase.split(''); //converts phrase to array
      console.log(phraseCharactersArray);
      return phraseCharactersArray.includes(letter);
      
      // phraseCharactersArray.forEach(character => {
      //   if (character === letter) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });
     }
     
     showMatchedLetter(letter) { //method receives the letter the user selected as a parameter and if the letter is in the phrase it will reveal the letter on the game board
      let matchedLettersLi = document.querySelectorAll('#phrase ul li');// selects LI's that represent each character in the phrase
      matchedLettersLi.forEach(li => { //iterates through each LI element
        if (li.innerHTML === letter) { //if LI element's innerHTML is the same as the letter the user selected
          li.className = 'show'; //show the LI on the page(by changing it's css class)
        }
      });
     }
 }


