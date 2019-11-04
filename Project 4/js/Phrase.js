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
     
 }
///Make sure the phrase displayed on the screen uses the letter 
// ///CSS class for letters and the space CSS class for spaces.
// <div id="phrase" class="section">
//     <ul>
//         <li class="hide letter h">h</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter w">w</li>
//         <li class="space"> </li>
//         <li class="hide letter a">a</li>
//         <li class="hide letter r">r</li>
//         <li class="hide letter e">e</li>
//         <li class="space"> </li>
//         <li class="hide letter y">y</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter u">u</li>
//     </ul>
// </div>


